import { useState } from 'react';
import styled from 'styled-components';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import { openIntership } from '../../../utils/openIntership';
import { Text } from '../../shared/texts';
import { Button } from '../../shared/Button';
import { InfoModal } from '../../shared/InfoModal';
import pres from './images/pres.svg';
import balance from './images/balance.svg';
import folder from './images/folder.svg';
import { Level2 } from './Level2';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  ${({$isModal}) => $isModal ? 'filter: blur(3.5px); transform: scale(1.05)' : ''};
`;

const TextStyled = styled(Text)`
  margin-top: min(10px, 2.6vw);
`;

const ButtonStyled = styled(Button)`
  margin: min(10px, 2.6vw) auto 0;
  max-width: 214px;

  &:nth-of-type(2) {
    max-width: 240px;
  }
`;

const ModalStyled = styled(InfoModal)`
  min-height: 567px;

  @media screen and (max-width: 320px) {
    min-height: 518px;
  }
`;

export const Screen4 = () => {
    const [isModal, setIsModal] = useState(true);

    const items = [
        {
            name: 'pres',
            nameRu: 'Презентация',
            desc: 'навык презентации',
            src: pres,
            amount: 5,
        },
        {
            name: 'balance',
            nameRu: 'Весы',
            desc: 'work-life balance',
            src: balance,
            amount: 5,
        },
        {
            name: 'folder',
            nameRu: 'Папка',
            desc: 'работа с документами',
            src: folder,
            amount: 5,
        }
    ];

    const handleStart = () => {
        reachMetrikaGoal('lvl1finish');
        setIsModal(false);
    };

    const handleInterClick = () => {
        reachMetrikaGoal('lvl1_intership');
        setTimeout(() => openIntership(), 0);
    }

    return (
        <>
            <Wrapper $isModal={isModal}>
                <Level2/>
            </Wrapper>
            {isModal && (
                <ModalStyled
                    title={'Теперь ты \nменеджер!'}
                    desc={
                        'Напрямую общайся \nс клиентами, работай \nс документами и не забудь про work-life balance.'
                    }
                    items={items}
                >
                    <TextStyled>
                        А если хочешь к нам {'\n'}в команду Б1 уже сейчас — откликайся!
                    </TextStyled>
                    <ButtonStyled type={'primaryOutlined'} onClick={handleInterClick}>На стажировку</ButtonStyled>
                    <ButtonStyled
                        type={'primary'}
                        onClick={handleStart}
                    >
                        Продолжить расти
                    </ButtonStyled>
                </ModalStyled>
            )}
        </>
    );
};