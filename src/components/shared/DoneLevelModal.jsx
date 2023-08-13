import { Modal } from './Modal';
import { BoldText, Text } from './texts';

export const DoneLevelModal = ({onClose}) => (
    <Modal onClick={onClose} btnType={'primary'} btnText={'Уже бегу!'}>
        <BoldText>
            Всё собрано!
        </BoldText>
        <br/>
        <Text>
            Теперь тебе нужно встать на ладонь, чтобы перейти на новую карьерную ступень.
        </Text>
    </Modal>
)
