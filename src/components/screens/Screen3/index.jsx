import { useState } from 'react';
import styled from 'styled-components';
import calc from './images/calc.svg';
import glasses from './images/glasses.svg';
import table from './images/table.svg';
import { InfoModal } from '../../shared/InfoModal';
import { Level1 } from './Level1';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  ${({$isModal}) => $isModal ? 'filter: blur(3.5px); transform: scale(1.05)' : ''};
`;

const ModalStyled = styled(InfoModal)`
    min-height: 421px;

    @media screen and (max-width: 320px) {
      min-height: 386px;
    }
`;

export const Screen3 = () => {
    const [isModal, setIsModal] = useState(true);

    const items = [
        {
            name: 'calc',
            nameRu: 'Цифра',
            desc: 'сильная\nматематическая база',
            src: calc,
            amount: 5,
        },
        {
            name: 'glasses',
            nameRu: 'Очки',
            desc: 'быстрая\nобучаемость',
            src: glasses,
            amount: 5,
        },
        {
            name: 'table',
            nameRu: 'Таблица',
            desc: 'работа с базами\nданных в Excel',
            src: table,
            amount: 5,
        }
    ];

    const handleStart = () => {
        setIsModal(false);
    };

    return (
        <>
            <Wrapper $isModal={isModal}>
                <Level1 />
            </Wrapper>
            {isModal && (
                <ModalStyled
                    onClick={handleStart}
                    title={'Добро пожаловать\nв Б1, стажер!'}
                    desc={
                        'Тебе предстоит показать свою математическую базу, ' +
                        'много учиться у коллег\nи работать с данными.'
                    }
                    items={items}
                />
            )}
        </>
    )

}