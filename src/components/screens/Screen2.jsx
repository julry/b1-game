import { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../shared/Modal';
import { BackgroundScreen } from '../shared/BackgroundScreen';
import { Text, BoldText } from '../shared/texts';
import { useProgress } from '../../hooks/useProgress';

const ModalStyled = styled(Modal)`
  min-height: ${({$isDisc}) => $isDisc ? 340 : 308}px;

  @media screen and (max-width: 320px) {
    min-height: ${({$isDisc}) => $isDisc ? 291 : 259}px;
  }
`;

export const Screen2 = () => {
    const [isDisc, setIsDisc] = useState(false);
    const {next} = useProgress();

    const handleNext = () => {
        setTimeout(() => {
            if (!isDisc) setIsDisc(true);
            else next();
        }, 300);
    };

    const title = isDisc ? 'Дисклеймер' : 'Что делать?';
    const text = () => isDisc ? (
        <>
            В этой игре ты пройдешь {'\n'}
            сокращенный путь {'\n'}от стажера до партнера Б1.
            Карьерная лестница {'\n'}в компании включает в себя больше ступеней,
            и каждая из них открывает новые горизонты! Более подробную информацию
            ты всегда можешь найти {'\n'} на сайте Б1.
        </>
    ) : (
        <>
            Беги вперед и собирай пасхалки. Каждая пасхалка поможет
            тебе в карьерном росте. Когда соберешь их все — вставай на <b>ладонь</b>,
            чтобы перепрыгнуть на следующую карьерную ступень.
        </>
    );

    return (
        <BackgroundScreen isLogo>
            <ModalStyled btnText={'Принято!'} btnType={'primary'} onClick={handleNext} $isDisc={isDisc}>
                <BoldText>{title}</BoldText>
                <br/>
                <Text>{text()}</Text>
            </ModalStyled>
        </BackgroundScreen>
    );
};
