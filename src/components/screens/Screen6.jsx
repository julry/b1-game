import { Modal } from '../shared/Modal';
import { BackgroundScreen } from '../shared/BackgroundScreen';
import { Text, BoldText } from '../shared/texts';

export const Screen6 = () => {
    return (
        <BackgroundScreen>
            <Modal btnText={'Круто!'} btnType={'secondary'}>
                <BoldText>Вау, какой стремительный рост!</BoldText>
                <br/>
                <Text>
                    Ты собрал все, что нужно для быстрого достижения карьерных вершин! В Б1 тебя ждут все возможности для развития — обучение, масштабные проекты, командировки, мероприятия, а ещё — поддержка коллег и дружный коллектив.
                </Text>
            </Modal>
        </BackgroundScreen>
    )
}