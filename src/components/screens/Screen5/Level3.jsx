import { useState } from 'react';
import useImage from 'use-image';
import { BLOCK_WIDTH } from '../../shared/Game/constants';
import { Game } from '../../shared/Game';
import { DoneLevelModal } from '../../shared/DoneLevelModal';
import { useProgress } from '../../../hooks/useProgress';
import {
    person, personL, personRUp, personR,
    personLUp, clothes, personUp, strategy,
    stone, clients, strategyDesc, stoneDesc, clientsDesc
} from './images';

export const Level3 = () => {
    const {next} = useProgress();
    const [personSrc, loadedPerson] = useImage(person);
    const [personSrcLeft, loadedPersonLeft] = useImage(personL);
    const [personSrcRight, loadedPersonRight] = useImage(personR);
    const [personSrcUp, loadedPersonUp] = useImage(personUp);
    const [personSrcLeftUp, loadedPersonLeftUp] = useImage(personLUp);
    const [personSrcRightUp, loadedPersonRightUp] = useImage(personRUp);
    const [clothesSrc, loadedClothes] = useImage(clothes);
    const [strategySrc, loadedStrategy] = useImage(strategy);
    const [clientsSrc, loadedClients] = useImage(clients);
    const [stoneSrc, loadedStone] = useImage(stone);
    const [clientsDescSrc, loadedClientsDescSrc] = useImage(clientsDesc);
    const [stoneDescSrc, loadedStoneDescSrc] = useImage(stoneDesc);
    const [strategyDescSrc, loadedStrategyDescSrc] = useImage(strategyDesc);

    const [isModal, setIsModal] = useState(false);

    const blocks = [
        {
            id: 'block_1',
            x: 0,
            initialX: 0,
            y: 348,
        },
        {
            id: 'block_2',
            x: 100,
            initialX: 100,
            y: 261,
        },
        {
            id: 'block_3',
            x: 175,
            initialX: 175,
            y: 319,
        },
        {
            id: 'block_10',
            x: 172 + BLOCK_WIDTH,
            initialX: 172 + BLOCK_WIDTH,
            y: 319,
        },
        {
            id: 'block_11',
            x: 275,
            initialX: 275,
            y: 406,
        },
        {
            id: 'block_12',
            x: 325,
            initialX: 325,
            y: 493,
        },
        {
            id: 'block_23',
            x: 400,
            initialX: 400,
            y: 493,
        },
        {
            id: 'block_24',
            x: 500,
            initialX: 500,
            y: 406,
        },
        {
            id: 'block_4',
            x: 375,
            initialX: 375,
            y: 319,
        },
        {
            id: 'block_13',
            x: 373 + BLOCK_WIDTH,
            initialX: 373 + BLOCK_WIDTH,
            y: 319,
        },
        {
            id: 'block_14',
            x: 500,
            initialX: 500,
            y: 261,
        },
        {
            id: 'block_5',
            x: 650,
            initialX: 650,
            y: 261,
        },
        {
            id: 'block_15',
            x: 750,
            initialX: 750,
            y: 261,
        },
        {
            id: 'block_16',
            x: 750,
            initialX: 750,
            y: 377,
        },
        {
            id: 'block_43',
            x: 748 + BLOCK_WIDTH,
            initialX: 748 + BLOCK_WIDTH,
            y: 377,
        },
        {
            id: 'block_17',
            x: 975,
            initialX: 975,
            y: 348,
        },
        {
            id: 'block_71',
            x: 1000,
            initialX: 1000,
            y: 261,
        },
        {
            id: 'block_71',
            x: 997 + BLOCK_WIDTH,
            initialX: 997 + BLOCK_WIDTH,
            y: 261,
        },
        {
            id: 'block_8',
            x: 850,
            initialX: 850,
            y: 261,
            isFinish: true
        },
        {
            id: 'block_9',
            x: 847 + BLOCK_WIDTH,
            initialX: 847 + BLOCK_WIDTH,
            y: 261,
            isFinish: true,
            isHand: true
        },
        {
            id: 'block_6',
            x: 975,
            initialX: 975,
            y: 493,
            isLast: true,
        },
        {
            id: 'block_7',
            x: 972 + BLOCK_WIDTH,
            initialX: 972 + BLOCK_WIDTH,
            y: 493,
            isLast: true,
        },
        {
            id: 'block_753',
            x: 969 + 2 * BLOCK_WIDTH,
            initialX: 969 + 2 * BLOCK_WIDTH,
            y: 493,
            isLast: true,
        },
    ];

    const items = [
        {
            pic: strategySrc,
            srcDesc: strategyDescSrc,
            descD: 0,
            descW: 220,
            descH: 125,
            amount: 5,
            items: [
                {
                    id: 'strategy_1',
                    x: 7,
                    initialX: 7,
                    y: 390,
                },
                {
                    id: 'strategy_2',
                    x: 219,
                    initialX: 219,
                    y: 363,
                },
                {
                    id: 'strategy_3',
                    x: 505,
                    initialX: 505,
                    y: 447,
                },
                {
                    id: 'strategy_4',
                    x: 657,
                    initialX: 657,
                    y: 303,
                },
                {
                    id: 'strategy_5',
                    x: 781,
                    initialX: 781,
                    y: 420,
                },
            ]
        },
        {
            pic: stoneSrc,
            srcDesc: stoneDescSrc,
            descD: 5,
            descW: 153,
            descH: 106,
            amount: 5,
            items: [
                {
                    id: 'stone_1',
                    x: 106,
                    initialX: 106,
                    y: 301,
                },
                {
                    id: 'stone_2',
                    x: 281,
                    initialX: 281,
                    y: 447,
                },
                {
                    id: 'stone_3',
                    x: 381,
                    initialX: 381,
                    y: 354,
                },
                {
                    id: 'stone_4',
                    x: 406,
                    initialX: 406,
                    y: 535,
                },
                {
                    id: 'stone_5',
                    x: 756,
                    initialX: 756,
                    y: 297,
                },
            ]
        },
        {
            pic: clientsSrc,
            srcDesc: clientsDescSrc,
            descD: 117,
            descW: 183,
            descH: 125,
            amount: 5,
            items: [
                {
                    id: 'clients_1',
                    x: 181,
                    initialX: 181,
                    y: 358,
                },
                {
                    id: 'clients_2',
                    x: 333,
                    initialX: 333,
                    y: 531,
                },
                {
                    id: 'clients_3',
                    x: 426,
                    initialX: 426,
                    y: 383,
                },
                {
                    id: 'clients_4',
                    x: 506,
                    initialX: 506,
                    y: 299,
                },
                {
                    id: 'clients_5',
                    x: 981,
                    initialX: 981,
                    y: 384,
                },
            ]
        }
    ];

    const isLoaded = loadedStone === 'loaded' && loadedStoneDescSrc === 'loaded'
        && loadedClients === 'loaded' && loadedClientsDescSrc === 'loaded'
        && loadedStrategy === 'loaded' && loadedStrategyDescSrc === 'loaded'
        && loadedPerson === 'loaded' && loadedPersonLeft === 'loaded'
        && loadedPersonRight === 'loaded' && loadedPersonUp === 'loaded'
        && loadedPersonLeftUp === 'loaded' && loadedPersonRightUp === 'loaded'
        && loadedClothes === 'loaded';

    const personsPics = {
        common: personSrc,
        left: personSrcLeft,
        right: personSrcRight,
        up: personSrcUp,
        leftUp: personSrcLeftUp,
        rightUp: personSrcRightUp,
    };

    const nextLevelItem = {
        id: 'clothes',
        pic: clothesSrc,
        x: 976,
        initialX: 976,
        y: 561,
        width: 82,
        height: 69,
    };

    const handleDone = () => {
        setIsModal(true);
    };

    const handleNext = () => {
        next();
    };

    return (
        <>
            <Game
                blocks={blocks}
                items={items}
                isPicsLoaded={isLoaded}
                personPics={personsPics}
                nextLevelItem={nextLevelItem}
                onDone={handleDone}
                onNext={handleNext}
                gameWidth={969 + 2 * BLOCK_WIDTH}
            />
            {isModal && <DoneLevelModal onClose={() => setIsModal(false)} isLast/>}
        </>
    );
};
