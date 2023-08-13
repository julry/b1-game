import { useState } from 'react';
import styled from 'styled-components';
import { team, stone, binoculars} from './images';
import { InfoModal } from '../../shared/InfoModal';
import { Level3 } from './Level3';
import { Text } from '../../shared/texts';
import { Button } from '../../shared/Button';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  ${({$isModal}) => $isModal ? 'filter: blur(3.5px); transform: scale(1.05)' : ''};
`;

export const Screen5 = () => {
    const [isModal, setIsModal] = useState(true);

    const items = [
        {
            name: 'team',
            nameRu: 'Команда',
            desc: '[навык\nуправление командой]',
            src: team,
            amount: 5,
        },
        {
            name: 'stone',
            nameRu: 'Камень',
            desc: '[надежность]',
            src: stone,
            amount: 5,
        },
        {
            name: 'binoculars',
            nameRu: 'Бинокль',
            desc: '[широкий кругозор]',
            src: binoculars,
            amount: 5,
        }
    ];

    const handleStart = () => {
        setIsModal(false);
    };

    return (
        <>
            <Wrapper $isModal={isModal}>
                <Level3 />
            </Wrapper>
            {isModal && (
                <InfoModal
                    onClick={handleStart}
                    title={'Менеджер звучит\nсолидно!'}
                    desc={
                        'И ответственно! Прояви надёжность — умело ' +
                        'управляй командой и продолжай расширять свой кругозор.'
                    }
                    items={items}
                />
            )}
        </>
    )

}