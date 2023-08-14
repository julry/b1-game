import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import useImage from 'use-image';
import blockImg from '../../../assets/images/block.svg';
import roadImg from '../../../assets/images/road.svg';
import handImg from '../../../assets/images/hand.svg';
import arrowRight from '../../../assets/images/arrowRight.svg';
import arrowLeft from '../../../assets/images/arrowLeft.svg';
import arrowUp from '../../../assets/images/arrowUp.svg';
import logo from '../../../assets/images/logo.svg';
import bg from '../../../assets/images/background.svg';
import {
    BLOCK_HEIGHT,
    BLOCK_WIDTH, HAND_HEIGHT,
    INITIAL_PERSON_X,
    INITIAL_PERSON_Y, ITEM_SIZE, MOVE_SIDE,
    PERSON_HEIGHT,
    PERSON_WIDTH
} from './constants';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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

export const Game = ({blocks, items, personPics, isPicsLoaded, nextLevelItem, onDone, onNext, gameWidth}) => {
    const [blockSrc, loaded] = useImage(blockImg);
    const [roadSrc, roadLoaded] = useImage(roadImg);
    const [handSrc, handLoaded] = useImage(handImg);
    const [logoSrc, logoLoaded] = useImage(logo);
    const [bgSrc, bgLoaded] = useImage(bg);
    const $canvas = useRef();
    const $ctx = useRef();
    const $wrapper = useRef();
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

    const $clicked = useRef({x: 0, y: 0});

    const $logo = useRef({
        x: 1062,
        initialX: 1062,
        y: 542,
        width: 50,
        height: 50
    });

    const $blocks = useRef(blocks);
    const $firstItems = useRef(items[0].items);
    const $secondItems = useRef(items[1].items);
    const $thirdItems = useRef(items[2].items);
    const $nextLevelItem = useRef();
    const $icons = useRef([]);
    const $bg = useRef();

    const $isDone = useRef(false);
    const $isFinishing = useRef(false);

    const setIcons = () => {
        const canvasWidth = $canvas.current?.width;
        const iconY = 27;
        let iconXDelta = (canvasWidth - 38) / 3 - ITEM_SIZE - 70;
        iconXDelta = iconXDelta > 5 ? iconXDelta : 5;

        $icons.current = [
            {
                x: 19,
                y: iconY,
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                src: items[0].pic,
                deltaText: 47,
                textY: iconY + 24,
                textRef: $firstItems,
                srcDesc: items[0].srcDesc,
                descX: 19 - items[0].descD,
                descW: items[0].descW,
                descH: items[0].descH,
            },
            {
                x: (canvasWidth - 38) / 3 + iconXDelta + 19,
                y: iconY,
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                src: items[1].pic,
                deltaText: 47,
                textY: iconY + 24,
                textRef: $secondItems,
                srcDesc: items[1].srcDesc,
                descX: (canvasWidth - 38) / 3 + iconXDelta + 19 - items[1].descD,
                descW: items[1].descW,
                descH: items[1].descH,
            },
            {
                x: 2 * (canvasWidth - 38) / 3 + iconXDelta + 19,
                y: iconY,
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                src: items[2].pic,
                deltaText: 47,
                textY: iconY + 24,
                textRef: $thirdItems,
                srcDesc: items[2].srcDesc,
                descX: 2 * (canvasWidth - 38) / 3 + iconXDelta + 19 - items[2].descD,
                descW: items[2].descW,
                descH: items[2].descH,
            },
        ];
    };

    useEffect(() => {
        const isEverythingLoaded = loaded === 'loaded' && handLoaded === 'loaded'
            && roadLoaded === 'loaded' && isPicsLoaded && logoLoaded === 'loaded'
            && bgLoaded === 'loaded';
        if ($canvas.current && isEverythingLoaded) {
            const canvas = $canvas.current;
            $ctx.current = canvas?.getContext('2d');
            const width = $wrapper.current?.clientWidth;
            $canvas.current.width = width;
            const height = $wrapper.current?.clientHeight;
            $ctx.current.imageSmoothingEnabled = false;
            $canvas.current.height = height;
            $person.current.position.y = height - $person.current.height - INITIAL_PERSON_Y;
            $nextLevelItem.current = nextLevelItem;
            $bg.current = [
                {
                    x: -284,
                    initialX: -284,
                    y: height - 120,
                    width: 665,
                    height: 563,
                },
                {
                    x: 373,
                    y: height - 120,
                    initialX: 373,
                    width: 665,
                    height: 563
                },
                {
                    x: 1028,
                    initialX: 1028,
                    y: height - 120,
                    width: 665,
                    height: 563
                },
            ];
            setIcons();
            animate();
        }
    }, [loaded, handLoaded, roadLoaded, isPicsLoaded, logoLoaded, bgLoaded]);

    const getIsShouldMoveRight = () => {
        return $keysPressed.current.left
            && ($person.current.position.x < $canvas.current?.width / 2);
    }

    const getIsShouldMoveLeft = () => {
        return ($keysPressed.current.right || $isFinishing.current)
            && ($person.current.position.x > $canvas.current?.width / 2);
    }

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
        $ctx.current.globalCompositeOperation = "destination-over";
        $ctx.current?.drawImage(src, position.x, position.y, persWidth, height);
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

        return drawItems({...block, width: BLOCK_WIDTH, height}, src);
    };

    const drawItems = (item, src) => {
        if (!$ctx.current || !$canvas.current) return;
        let x = item.x;
        const width = item.width ?? ITEM_SIZE;
        const height = item.height ?? ITEM_SIZE;
        if (getIsShouldMoveLeft() && item.x > item.initialX - (gameWidth - $canvas.current?.width) - BLOCK_WIDTH + 3) {
            x -= MOVE_SIDE;
        } else if (getIsShouldMoveRight() && item.x < item.initialX) {
            x += MOVE_SIDE;
        }

        $ctx.current?.drawImage(src, item.x, $canvas.current?.height - item.y, width, height);

        return x;
    };

    const drawAndCheckItems = (drownItems, position, velocity, height, width, src) => {
        let array = [...drownItems];
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            const itemY = $canvas.current?.height - item.y;

            array[i].x = drawItems(item, src);

            if (
                position.y <= itemY && position.y + height + velocity.y >= itemY
                && position.x + width >= item.x && position.x <= item.x + ITEM_SIZE
            ) {
                array = array.filter(({id}) => id !== item.id);
            }
        }

        return array;
    };

    const drawAndCheckBlocks = (position, velocity, height, width,) => {
        let array = [...$blocks.current];
        for (let i = 0; i < array.length; i++) {
            const block = array[i];
            const blockY = $canvas.current?.height - block.y;
            array[i].x = drawPlatform(block);

            if (
                position.y + height <= blockY && position.y + height + velocity.y >= blockY
                && position.x + width >= block.x && position.x <= block.x + BLOCK_WIDTH
                && ((block.isFinish && $isDone.current) || !block.isFinish)
            ) {
                $person.current.velocity.y = 0;
                $keysPressed.current.leftUp = false;
                $keysPressed.current.rightUp = false;
                if (block.isFinish && $isDone.current) {
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
                    if ($person.current.position.x < nextLevelItem.x) {
                        $person.current.velocity.x += 2;
                    } else {
                        onNext();
                    }
                }
            }
        }
        return array;
    }

    const update = () => {
        draw();
        const bottomBorder = $canvas?.current?.height - INITIAL_PERSON_Y;
        const {position, velocity, height, initialX} = $person.current;
        const positionY = position?.y + velocity?.y;
        const velocityY = (positionY + height + velocity?.y <= bottomBorder) ? velocity?.y + gravity : 0;
        const canvasWidth = $canvas?.current?.width;
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

    const drawIcons = () => {
        $ctx.current.fillStyle = "black";
        for (let i = 0; i < $icons.current.length; i++) {
            const icon = $icons.current[i];
            $ctx.current?.drawImage(icon.src, icon.x, icon.y, icon.width, icon.height);
            $ctx.current.font = "bold 13px PixeloidSans";
            $ctx.current?.fillText(`X`, icon.x + icon.deltaText - 5, icon.textY - 3);
            $ctx.current.font = "bold 17px PixeloidSans";
            $ctx.current?.fillText(icon.textRef.current.length, icon.x + icon.deltaText + 10, icon.textY);
            if (
                $clicked.current.x >= icon.x && $clicked.current.x <= icon.x + icon.width
                && $clicked.current.y >= icon.y && $clicked.current.y <= icon.y + icon.height
            ) {
                $ctx.current?.drawImage(icon.srcDesc, icon.descX, icon.y + icon.height + 5, icon.descW, icon.descH);
            }
        }
    };

    const drawBg= () => {
        $ctx.current.globalCompositeOperation = "destination-over";

        for (let i = 0; i < $bg.current.length; i++) {
            $bg.current[i].x = drawItems($bg.current[i], bgSrc);
        }

        $ctx.current.globalCompositeOperation = "source-over";
    };

    const animate = () => {
        if (!$firstItems.current.length && !$secondItems.current.length && !$thirdItems.current.length && !$isDone.current) {
            $isDone.current = true;
            onDone();
        }
        requestAnimationFrame(animate);
        if (!$ctx.current || !$canvas.current) return;
        const {position, height, velocity, width} = $person.current;

        $ctx.current?.clearRect?.(0, 0, $canvas.current?.width, $canvas.current?.height);
        $ctx.current?.drawImage(roadSrc, 0, $canvas.current?.height - INITIAL_PERSON_Y, $canvas.current?.width, INITIAL_PERSON_Y);

        drawIcons();
        update();

        $logo.current.x = drawItems($logo.current, logoSrc);

        drawBg();

        $nextLevelItem.current.x = drawItems($nextLevelItem.current, $nextLevelItem.current.pic);

        $blocks.current = drawAndCheckBlocks(position, velocity, height, width);

        if (!!$firstItems.current.length) {
            $firstItems.current = drawAndCheckItems($firstItems.current, position, velocity, height, width, items[0].pic);
        }

        if (!!$secondItems.current.length) {
            $secondItems.current = drawAndCheckItems($secondItems.current, position, velocity, height, width, items[1].pic);
        }

        if (!!$thirdItems.current.length) {
            $thirdItems.current = drawAndCheckItems($thirdItems.current, position, velocity, height, width, items[2].pic);
        }

        if ($keysPressed.current.right && $person.current.position.x <= $canvas.current?.width - PERSON_WIDTH) {
            $person.current.velocity.x += 1;
            if ($person.current.velocity.x > 11 || (getIsShouldMoveLeft() && $person.current.velocity.x > 5)) {
                $keysPressed.current.right = false;
            }
        } else if ($keysPressed.current.left && $person.current.position.x >= 0) {
            $person.current.velocity.x -= 1;
            if ($person.current.velocity.x < -11 || (getIsShouldMoveRight() && $person.current.velocity.x < -5)) {
                $keysPressed.current.left = false;
            }
        } else {
            $person.current.velocity.x = 0;
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

    const handleCanvasClick = (event) => {
        $clicked.current = {
            x: event.clientX,
            y: $canvas.current?.height - window.innerHeight + event.clientY,
        }
    };

    return (
        <Wrapper ref={$wrapper}>
            <canvas ref={$canvas} onClick={handleCanvasClick}/>
            <ButtonsBlock>
                <ButtonLeft onClick={handleLeft} />
                <ButtonRight onClick={handleRight} />
                <ButtonUp onClick={handleUp} />
            </ButtonsBlock>
        </Wrapper>
    );
};
