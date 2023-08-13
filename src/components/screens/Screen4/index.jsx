import { useState } from 'react';
import styled from 'styled-components';
import pres from './images/pres.svg';
import balance from './images/balance.svg';
import folder from './images/folder.svg';
import { InfoModal } from '../../shared/InfoModal';
import { Level2 } from './Level2';
import { Text } from '../../shared/texts';
import { Button } from '../../shared/Button';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  ${({$isModal}) => $isModal ? 'filter: blur(3.5px); transform: scale(1.05)' : ''};
`;

export const Screen4 = () => {
    const [isModal, setIsModal] = useState(true);

    const items = [
        {
            name: 'pres',
            nameRu: 'Презентация',
            desc: '[навык презентации]',
            src: pres,
            amount: 5,
        },
        {
            name: 'balance',
            nameRu: 'Весы',
            desc: '[work-life balance]',
            src: balance,
            amount: 5,
        },
        {
            name: 'folder',
            nameRu: 'Папка',
            desc: '[работа с документами]',
            src: folder,
            amount: 5,
        }
    ];

    const handleStart = () => {
        setIsModal(false);
    };

    return (
        <>
            <Wrapper $isModal={isModal}>
                <Level2 />
            </Wrapper>
            {isModal && (
                <InfoModal
                    title={'Теперь ты старший консультант!'}
                    desc={
                        'Напрямую общайся с клиентами, работай с документами и не забудь про work-life balance.'
                    }
                    items={items}
                >
                    <Text>
                        А если хочешь к нам в команду Б1 уже сейчас — откликайся!
                    </Text>
                    <Button type={'secondary'}>На стажировку</Button>
                    <Button
                        type={'primary'}
                        onClick={handleStart}
                    >
                        Продолжить расти
                    </Button>
                </InfoModal>
            )}
        </>
    )

}