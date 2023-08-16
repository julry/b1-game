import { useState } from 'react';
import useImage from 'use-image';
import { BLOCK_WIDTH } from '../../shared/Game/constants';
import { Game } from '../../shared/Game';
import { DoneLevelModal } from '../../shared/DoneLevelModal';
import { useProgress } from '../../../hooks/useProgress';
import {
    person, personR, personL, personUp,
    personRUp, clothes, personLUp, calc,
    calcDesc, table, glassesDesc, tableDesc, glasses
} from './images';

export const Level1 = () => {
    const {next} = useProgress();
    const [personSrc, loadedPerson] = useImage(person);
    const [personSrcLeft, loadedPersonLeft] = useImage(personL);
    const [personSrcRight, loadedPersonRight] = useImage(personR);
    const [personSrcUp, loadedPersonUp] = useImage(personUp);
    const [personSrcLeftUp, loadedPersonLeftUp] = useImage(personLUp);
    const [personSrcRightUp, loadedPersonRightUp] = useImage(personRUp);
    const [clothesSrc, loadedClothes] = useImage(clothes);
    const [glassesSrc, loadedGlasses] = useImage(glasses);
    const [tableSrc, loadedTable] = useImage(table);
    const [calcSrc, loadedCalc] = useImage(calc);
    const [calcDescSrc, loadedCalcDescSrc] = useImage(calcDesc);
    const [glassesDescSrc, loadedGlassesDescSrc] = useImage(glassesDesc);
    const [tableDescSrc, loadedTableDescSrc] = useImage(tableDesc);

    const [isModal, setIsModal] = useState(false);

    const blocks = [
        {
            id: 'block_1',
            x: 0,
            initialX: 0,
            y: 261,
        },
        {
            id: 'block_2',
            x: BLOCK_WIDTH - 3,
            initialX: BLOCK_WIDTH - 3,
            y: 261,
        },
        {
            id: 'block_3',
            x: 225,
            initialX: 225,
            y: 261,
        },
        {
            id: 'block_10',
            x: 600,
            initialX: 600,
            y: 261,
        },
        {
            id: 'block_11',
            x: 800,
            initialX: 800,
            y: 261,
        },
        {
            id: 'block_12',
            x: 1050,
            initialX: 1050,
            y: 261,
        },
        {
            id: 'block_23',
            x: 900,
            initialX: 900,
            y: 261,
            isFinish: true,
        },
        {
            id: 'block_24',
            x: 897 + BLOCK_WIDTH,
            initialX: 897 + BLOCK_WIDTH,
            y: 261,
            isFinish: true,
            isHand: true
        },
        {
            id: 'block_4',
            x: 325,
            initialX: 325,
            y: 319,
        },
        {
            id: 'block_13',
            x: 400,
            initialX: 400,
            y: 319,
        },
        {
            id: 'block_14',
            x: 397 + BLOCK_WIDTH,
            initialX: 397 + BLOCK_WIDTH,
            y: 319,
        },
        {
            id: 'block_5',
            x: 125,
            initialX: 125,
            y: 377,
        },
        {
            id: 'block_15',
            x: 700,
            initialX: 700,
            y: 377,
        },
        {
            id: 'block_16',
            x: 775,
            initialX: 775,
            y: 377,
        },
        {
            id: 'block_43',
            x: 772 + BLOCK_WIDTH,
            initialX: 772 + BLOCK_WIDTH,
            y: 377,
        },
        {
            id: 'block_17',
            x: 523,
            initialX: 523,
            y: 405,
        },
        {
            id: 'block_71',
            x: 520 + BLOCK_WIDTH,
            initialX: 520 + BLOCK_WIDTH,
            y: 405,
        },
        {
            id: 'block_6',
            x: 225,
            initialX: 225,
            y: 435,
        },
        {
            id: 'block_7',
            x: 222 + BLOCK_WIDTH,
            initialX: 222 + BLOCK_WIDTH,
            y: 435,
        },
        {
            id: 'block_8',
            x: 0,
            initialX: 0,
            y: 493,
        },
        {
            id: 'block_9',
            x: BLOCK_WIDTH - 3,
            initialX: BLOCK_WIDTH - 3,
            y: 493,
        },
        {
            id: 'block_18',
            x: 428,
            initialX: 428,
            y: 493,
        },
        {
            id: 'block_19',
            x: 676,
            initialX: 676,
            y: 493,
        },
        {
            id: 'block_20',
            x: 1025,
            initialX: 1025,
            y: 493,
        },
        {
            id: 'block_21',
            x: 1022 + BLOCK_WIDTH,
            initialX: 1022 + BLOCK_WIDTH,
            y: 493,
        },
    ];

    const items = [
        {
            pic: calcSrc,
            srcDesc: calcDescSrc,
            descD: 5,
            descW: 216,
            descH: 125,
            items: [
                {
                    id: 'calc_1',
                    x: 131,
                    initialX: 131,
                    y: 421,
                },
                {
                    id: 'calc_2',
                    x: 331,
                    initialX: 331,
                    y: 364,
                },
                {
                    id: 'calc_3',
                    x: 430,
                    initialX: 430,
                    y: 538,
                },
                {
                    id: 'calc_4',
                    x: 560,
                    initialX: 560,
                    y: 451,
                },
                {
                    id: 'calc_5',
                    x: 806,
                    initialX: 806,
                    y: 305,
                },
            ]
        },
        {
            pic: glassesSrc,
            srcDesc: glassesDescSrc,
            descD: 19,
            descW: 155,
            descH: 125,
            amount: 5,
            items: [
                {
                    id: 'glass_1',
                    x: 258,
                    initialX: 258,
                    y: 526,
                },
                {
                    id: 'glass_2',
                    x: 230,
                    initialX: 230,
                    y: 298,
                },
                {
                    id: 'glass_3',
                    x: 442,
                    initialX: 442,
                    y: 381,
                },
                {
                    id: 'glass_4',
                    x: 680,
                    initialX: 680,
                    y: 531,
                },
                {
                    id: 'glass_5',
                    x: 1055,
                    initialX: 1055,
                    y: 296,
                },
            ]
        },
        {
            pic: tableSrc,
            srcDesc: tableDescSrc,
            descD: 130,
            descW: 186,
            descH: 125,
            amount: 5,
            items: [
                {
                    id: 'table_1',
                    x: 30,
                    initialX: 30,
                    y: 301,
                },
                {
                    id: 'table_2',
                    x: 32,
                    initialX: 32,
                    y: 543,
                },
                {
                    id: 'table_3',
                    x: 606,
                    initialX: 606,
                    y: 302,
                },
                {
                    id: 'table_4',
                    x: 707,
                    initialX: 707,
                    y: 416,
                },
                {
                    id: 'table_5',
                    x: 806,
                    initialX: 806,
                    y: 416,
                },
            ]
        }
    ];

    const isLoaded = loadedCalc === 'loaded' && loadedCalcDescSrc === 'loaded'
        && loadedGlassesDescSrc === 'loaded' && loadedTableDescSrc === 'loaded'
        && loadedGlasses === 'loaded' && loadedTable === 'loaded'
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
            x: 1029,
            initialX: 1029,
            y: 553,
            width: 24,
            height: 60,
    };

    const handleDone = () => {
        setIsModal(true);
    }

    const handleNext = () => {
        next();
    }

    return <>
        <Game
            blocks={blocks}
            items={items}
            isPicsLoaded={isLoaded}
            personPics={personsPics}
            nextLevelItem={nextLevelItem}
            onDone={handleDone}
            onNext={handleNext}
            gameWidth={1022 + BLOCK_WIDTH}
            isFirst
        />
        {isModal && <DoneLevelModal onClose={() => setIsModal(false)} />}
    </>
}