import { Modal } from '../shared/Modal';
import { BackgroundScreen } from '../shared/BackgroundScreen';
import { Text, BoldText } from '../shared/texts';

export const Screen2 = () => {
    return (
        <BackgroundScreen isLogo>
            <Modal btnText={'Принято!'} btnType={'primary'}>
                <BoldText>Что делать?</BoldText>
                <br/>
                <Text>
                    Беги вперед и собирай пасхалки. Каждая пасхалка поможет
                    тебе в карьерном росте. Когда соберешь их все — вставай на <b>ладонь</b>,
                    чтобы перепрыгнуть на следующую карьерную ступень.
                </Text>
            </Modal>
        </BackgroundScreen>
    )
}