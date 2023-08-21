import styled from 'styled-components';
import { Modal } from './Modal';
import { BoldText, Text } from './texts';

const ModalStyled = styled(Modal)`
  min-height: 227px;
`;

export const DoneLevelModal = ({onClose, isLast}) => (
    <ModalStyled onClick={onClose} btnType={'primary'} btnText={'Уже бегу!'}>
        <BoldText>
            Все собрано!
        </BoldText>
        <br/>
        <Text>
            Теперь тебе нужно встать на ладонь,
            чтобы {isLast ? 'продолжить свой карьерный рост в Б1!' : 'перейти на новую карьерную ступень.'}
        </Text>
    </ModalStyled>
);
