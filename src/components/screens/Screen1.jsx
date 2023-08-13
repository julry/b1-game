import { Modal } from '../shared/Modal';
import { BackgroundScreen } from '../shared/BackgroundScreen';
import { Text, BoldText } from '../shared/texts';
import { useProgress } from '../../hooks/useProgress';

export const Screen1 = () => {
    const {next} = useProgress();

    const handleNext = () => {
        setTimeout(next, 100);
    }
    return (
        <BackgroundScreen isLogo>
            <Modal btnText={'Давайте!'} btnType={'primary'} onClick={handleNext}>
                <BoldText>Привет! </BoldText>
                <br/>
                <BoldText>Раскроем секрет:</BoldText>
                <Text>на пути к карьерным вершинам важны две вещи:
                    поддержка коллег  и возможности для роста.
                    В Б1 есть и то, и другое. Проверим в игре?</Text>
            </Modal>
        </BackgroundScreen>
    )
}