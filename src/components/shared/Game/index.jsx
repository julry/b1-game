import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import {
    BLOCK_HEIGHT,
    BLOCK_WIDTH, HAND_HEIGHT,
    INITIAL_PERSON_X,
    INITIAL_PERSON_Y, ITEM_SIZE,
    PERSON_HEIGHT,
    PERSON_WIDTH
} from './constants';
import blockImg from '../../../assets/images/block.svg';
import roadImg from '../../../assets/images/road.svg';
import handImg from '../../../assets/images/hand.svg';
import arrowRight from '../../../assets/images/arrowRight.svg';
import arrowLeft from '../../../assets/images/arrowLeft.svg';
import arrowUp from '../../../assets/images/arrowUp.svg';
import useImage from 'use-image';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: #E8F1F8;
  align-items: end;
`;

const ButtonsBlock = styled.div`
  position: absolute;
  bottom: 29px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 190px;
  justify-content: space-between;
`;

const Button = styled.button`
  outline: none;
  border: none;
  width: 49px;
  height: 45px;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ButtonRight = styled(Button)`
  background-image: url(${arrowRight});
`;

const ButtonLeft = styled(Button)`
  background-image: url(${arrowLeft});
`;

const ButtonUp = styled(Button)`
  width: 44px;
  height: 50px;
  background-image: url(${arrowUp});
`;

const gravity = 0.5;

export const Game = ({blocks, items, personPics, isPicsLoaded}) => {
    const [blockSrc, loaded] = useImage(blockImg);
    const [roadSrc, roadLoaded] = useImage(roadImg);
    const [handSrc, handLoaded] = useImage(handImg);
    const $canvas = useRef();
    const $ctx = useRef();
    const $person = useRef({
        position: {
            x: INITIAL_PERSON_X,
            y: 0,
        },
        velocity: {
            x: 0,
            y: 0,
        },
        width: PERSON_WIDTH,
        height: PERSON_HEIGHT,
        initialX: INITIAL_PERSON_X
    });

    const $keysPressed = useRef({
        left: false,
        right: false,
        leftUp: false,
        rightUp: false,
    });

    const $blocks = useRef(blocks);
    const $firstItems = useRef(items[0].items);
    const $secondItems = useRef(items[1].items);
    const $thirdItems = useRef(items[2].items);

    const $isDone = useRef(false);
    const $isFinishing = useRef(false);

    useEffect(() => {
        const isEverythingLoaded = loaded === 'loaded' && handLoaded === 'loaded'
            && roadLoaded === 'loaded' && isPicsLoaded;
        if ($canvas.current && isEverythingLoaded) {
            const canvas = $canvas.current;
            const dpr = window.devicePixelRatio;
            $ctx.current = canvas.getContext('2d');

            $canvas.current.width = window.innerWidth * dpr;
            const height = window.innerHeight * dpr;
            $canvas.current.height = height;
            $canvas.current.style.width = window.innerWidth;
            $canvas.current.style.height = window.innerHeight;
            $person.current.position.y = height - $person.current.height - INITIAL_PERSON_Y;
            animate();
        }
    }, [loaded, handLoaded, roadLoaded, isPicsLoaded]);

    const draw = () => {
        if (!$ctx.current) return;
        const {position, width, height, velocity} = $person.current;
        let src = personPics.common;
        let persWidth = width;
        if (velocity.x > 0) {
            if (velocity.y === 0) src = personPics.right;
            else src = personPics.rightUp;
            persWidth *= 2;
        } else if (velocity.x < 0) {
            if (velocity.y === 0) src = personPics.left;
            else src = personPics.leftUp;
            persWidth *= 2;
        } else if (velocity.y !== 0 && !$isFinishing.current) {
            src = personPics.up;
        }

        $ctx.current.drawImage(src, position.x, position.y, persWidth, height);
    };

    const drawPlatform = (block) => {
        if (!$ctx.current || !$canvas.current) return;
        let src = blockSrc;
        let height = BLOCK_HEIGHT;
        if (block.isFinish && !$isDone.current) {
            $ctx.current.globalAlpha = 0.5;
        } else $ctx.current.globalAlpha = 1;

        if (block.isHand) {
            src = handSrc;
            height = HAND_HEIGHT;
        }
        $ctx.current.drawImage(src, block.x, $canvas.current.height - block.y, BLOCK_WIDTH, height);
    };

    const drawItems = (item, src) => {
        if (!$ctx.current || !$canvas.current) return;
        $ctx.current.drawImage(src, item.x, $canvas.current.height - item.y, ITEM_SIZE, ITEM_SIZE);
    };

    const drawAndCheckItems = (drownItems, position, velocity, height, width, src) => {
        let array = [...drownItems];
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            const itemY = $canvas.current.height - item.y;

            drawItems(item, src);

            if ( getIsShouldMoveLeft()) {
                array[i].x -= 8;
            }
            if (getIsShouldMoveRight()) {
                array[i].x += 8;
            }
            if
            (
                position.y <= itemY && position.y + height + velocity.y >= itemY
                && position.x + width >= item.x && position.x <= item.x + ITEM_SIZE
            ) {
                array = array.filter(({id}) => id !== item.id);
            }
        }

        return array;
    };

    const update = () => {
        draw();
        const bottomBorder = $canvas.current.height - INITIAL_PERSON_Y;
        const {position, velocity, height, initialX} = $person.current;
        const positionY = position?.y + velocity?.y;
        const velocityY = (positionY + height + velocity?.y <= bottomBorder) ? velocity?.y + gravity : 0;
        const canvasWidth = $canvas.current.width / window.devicePixelRatio;
        const isLeftEdge = position?.x + velocity?.x <= 0;
        const isRightEdge = position?.x + velocity?.x >= canvasWidth - 2 * PERSON_WIDTH;
        const positionX =  isLeftEdge ? 0 : isRightEdge ? canvasWidth - 2 * PERSON_WIDTH
                : position?.x + velocity?.x;

        const distance = (getIsShouldMoveLeft() || getIsShouldMoveRight()) ? 65 : 75;

        if (
            $keysPressed.current.right &&
            position?.x + velocity?.x - initialX > distance
        ) {
            $keysPressed.current.right = false;
        }

        if (
            $keysPressed.current.left &&
            initialX - position?.x + velocity?.x > distance
        ) {
            $keysPressed.current.left = false;
        }

        if (
            positionY + height + velocity?.y >= bottomBorder &&
            ($keysPressed.current.leftUp || $keysPressed.current.rightUp)
        ) {
            $keysPressed.current.leftUp = false;
            $keysPressed.current.rightUp = false;
        }

        $person.current.position.y = positionY;
        $person.current.velocity.y = velocityY;
        $person.current.position.x = positionX;
    };

    const getIsShouldMoveRight = () => {
        return $keysPressed.current.left && $blocks.current[0].x < $blocks.current[0].initialX
        && ($person.current.position.x < $canvas.current.width / (2 * window.devicePixelRatio));
    }

    const getIsShouldMoveLeft = () => ($keysPressed.current.right || $isFinishing.current) &&
        $blocks.current[$blocks.current.length - 1].x >= $canvas.current.width / window.devicePixelRatio - BLOCK_WIDTH
        && ($person.current.position.x > $canvas.current.width / (2 * window.devicePixelRatio));

    const animate = () => {
        if (!$firstItems.current.length && !$secondItems.current.length && !$thirdItems.current.length && !$isDone.current) {
            $isDone.current = true;
        }
        requestAnimationFrame(animate);
        $ctx.current?.clearRect?.(0, 0, $canvas.current?.width, $canvas.current?.height);
        update();
        $ctx.current.drawImage(roadSrc, 0, $canvas.current?.height - INITIAL_PERSON_Y, $canvas.current?.width, INITIAL_PERSON_Y);
        const {position, height, velocity, width} = $person.current;
        const canvasWidth = $canvas.current.width / window.devicePixelRatio;

        if ($keysPressed.current.right) {
            $person.current.velocity.x += 1;
            if ($person.current.velocity.x > 11) {
                $keysPressed.current.right = false;
            }

        } else if ($keysPressed.current.left) {
            $person.current.velocity.x += -1;
            if ($person.current.velocity.x < -11) {
                $keysPressed.current.left = false;
            }
        } else {
            $person.current.velocity.x = 0;
        }

        for (let i = 0; i < $blocks.current.length; i++) {
            const block = $blocks.current[i];
            const blockY = $canvas.current.height - block.y;

            drawPlatform(block);

            if (
                position.y + height <= blockY && position.y + height + velocity.y >= blockY
                && position.x + width >= block.x && position.x <= block.x + BLOCK_WIDTH
                // && ((block.isFinish && $isDone.current) || !block.isFinish)
            ) {
                $person.current.velocity.y = 0;
                $keysPressed.current.leftUp = false;
                $keysPressed.current.rightUp = false;
                if (block.isFinish) {
                    $isFinishing.current = true;
                }
            }

            if ($isFinishing.current && block.isFinish) {
                if (block.y < $blocks.current[$blocks.current.length - 1].y) {
                    $blocks.current[i].y += 3;
                    if (block.isHand) {
                        $person.current.position.x = block.x + BLOCK_WIDTH / 2;
                    }
                    $person.current.velocity.y = -3;
                } else {
                    $blocks.current[i].y = $blocks.current[$blocks.current.length - 1].y;
                    if ($person.current.position.x < $blocks.current[$blocks.current.length - 1].x) {
                        $person.current.velocity.x += 2;
                    }
                }
            }

            if (getIsShouldMoveLeft()) {
                $blocks.current[i].x -= 8;
            }
            if (getIsShouldMoveRight())
             {
                $blocks.current[i].x += 8;
            }
        }

        $ctx.current.drawImage(items[0].pic, 19, 20, ITEM_SIZE, ITEM_SIZE);
        $ctx.current.drawImage(items[1].pic, canvasWidth / 3 + 19, 20, ITEM_SIZE, ITEM_SIZE);
        $ctx.current.drawImage(items[2].pic, 2 * canvasWidth / 3 + 19, 20, ITEM_SIZE, ITEM_SIZE);
        $ctx.current.fillText(`x ${$firstItems.current.length}`, 66, 37);
        $ctx.current.fillText(`x ${$secondItems.current.length}`, canvasWidth / 3 + 66, 37);
        $ctx.current.fillText(`x ${$thirdItems.current.length}`, 2 * canvasWidth / 3 + 66, 37);

        if (!!$firstItems.current.length) {
            $firstItems.current = drawAndCheckItems($firstItems.current, position, velocity, height, width, items[0].pic);
        }

        if (!!$secondItems.current.length) {
            $secondItems.current = drawAndCheckItems($secondItems.current, position, velocity, height, width, items[1].pic);
        }

        if (!!$thirdItems.current.length) {
            $thirdItems.current = drawAndCheckItems($thirdItems.current, position, velocity, height, width, items[2].pic);
        }
    };

    const handleLeft = () => {
        if ($keysPressed.current.leftUp || $isFinishing.current) return;
        if (!!$person.current.velocity.y) {
            $keysPressed.current.leftUp = true;
        }
        $person.current.initialX = $person.current.position.x;
        $keysPressed.current.left = true;
        $keysPressed.current.right = false;
    };

    const handleUp = () => {
        if (!!$person.current.velocity.y || $isFinishing.current) return;
        const {velocity} = $person.current;
        $person.current.velocity.y = velocity?.y - 12;
    };

    const handleRight = () => {
        if ($keysPressed.current.rightUp || $isFinishing.current) return;
        if (!!$person.current.velocity.y) {
            $keysPressed.current.rightUp = true;
        }
        $person.current.initialX = $person.current.position.x;
        $keysPressed.current.right = true;
        $keysPressed.current.left = false;
    };

    return (
        <Wrapper>
            <canvas ref={$canvas} onClick={(event) => console.log(event)}/>
            <ButtonsBlock>
                <ButtonLeft onClick={handleLeft} />
                <ButtonRight onClick={handleRight} />
                <ButtonUp onClick={handleUp} />
            </ButtonsBlock>
        </Wrapper>
    );
};
