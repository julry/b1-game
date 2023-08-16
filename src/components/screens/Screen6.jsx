import styled from 'styled-components';
import cup from '../../assets/images/cup.svg';
import { Modal } from '../shared/Modal';
import { BackgroundScreen } from '../shared/BackgroundScreen';
import { Text, BoldText } from '../shared/texts';
import { useProgress } from '../../hooks/useProgress';

const Cup = styled.div`
  width: min(65px, 17.3vw);
  height: min(62px, 16.5vw);
  background: url(${cup}) no-repeat 0 0 /cover;
  margin: 0 auto min(17px, 4.5vw);
`;

const ModalStyled = styled(Modal)`
  min-height: 436px;
  @media screen and (max-width: 320px) {
    min-height: 388px;
  }
`;

export const Screen6 = () => {
    const { next } = useProgress();

    const handleNext = () => {
        setTimeout(next, 300);
    }

    return (
        <BackgroundScreen>
            <ModalStyled btnText={'Круто!'} btnType={'secondary'} type={'secondary'} onClick={handleNext}>
                <Cup />
                <BoldText>Вау, какой стремительный рост!</BoldText>
                <br/>
                <Text>
                    Ты собрал все, что нужно для быстрого достижения карьерных вершин! В <b>Б1</b> {'\n'}
                    тебя ждут все возможности
                    для развития — обучение, масштабные проекты, наставничество, мероприятия, а еще — поддержка коллег
                    и дружный коллектив.
                </Text>
            </ModalStyled>
        </BackgroundScreen>
    );
};