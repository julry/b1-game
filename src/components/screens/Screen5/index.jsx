import { useState } from 'react';
import styled from 'styled-components';
import { strategy, stone, clients} from './images';
import { InfoModal } from '../../shared/InfoModal';
import { Level3 } from './Level3';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  ${({$isModal}) => $isModal ? 'filter: blur(3.5px); transform: scale(1.05)' : ''};
`;

const ModalStyled = styled(InfoModal)`
  min-height: 451px;

  @media screen and (max-width: 320px) {
    min-height: 416px;
  }
`;


export const Screen5 = () => {
    const [isModal, setIsModal] = useState(true);

    const items = [
        {
            name: 'strategy',
            nameRu: 'Стратегия',
            desc: '[определение \nстратегии \nразвития группы]',
            src: strategy,
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
            name: 'clients',
            nameRu: 'Клиенты',
            desc: '[поддержание \nдолгосрочных \nвзаимоотношений]',
            src: clients,
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
                <ModalStyled
                    onClick={handleStart}
                    title={'Партнер звучит\nсолидно!'}
                    desc={
                        'И ответственно! Прояви надёжность — выстаивай стратегию и находи новых клиентов.'
                    }
                    items={items}
                />
            )}
        </>
    )

}