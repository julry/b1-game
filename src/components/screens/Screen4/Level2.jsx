import { useState } from 'react';
import useImage from 'use-image';
import { BLOCK_WIDTH } from '../../shared/Game/constants';
import { Game } from '../../shared/Game';
import { DoneLevelModal } from '../../shared/DoneLevelModal';
import { useProgress } from '../../../hooks/useProgress';
import {
    person, personL, personRUp, personR,
    personLUp, clothes, personUp, pres,
    balance, folder, presDesc, balanceDesc, folderDesc
} from './images';

export const Level2 = () => {
    const {next} = useProgress();
    const [personSrc, loadedPerson] = useImage(person);
    const [personSrcLeft, loadedPersonLeft] = useImage(personL);
    const [personSrcRight, loadedPersonRight] = useImage(personR);
    const [personSrcUp, loadedPersonUp] = useImage(personUp);
    const [personSrcLeftUp, loadedPersonLeftUp] = useImage(personLUp);
    const [personSrcRightUp, loadedPersonRightUp] = useImage(personRUp);
    const [clothesSrc, loadedClothes] = useImage(clothes);
    const [presSrc, loadedPres] = useImage(pres);
    const [folderSrc, loadedFolder] = useImage(folder);
    const [balanceSrc, loadedBalance] = useImage(balance);
    const [folderDescSrc, loadedFolderDescSrc] = useImage(folderDesc);
    const [balanceDescSrc, loadedBalanceDescSrc] = useImage(balanceDesc);
    const [presDescSrc, loadedPresDescSrc] = useImage(presDesc);

    const [isModal, setIsModal] = useState(false);

    const blocks = [
        {
            id: 'block_1',
            x: 0,
            initialX: 0,
            y: 435,
        },
        {
            id: 'block_2',
            x: BLOCK_WIDTH - 3,
            initialX: BLOCK_WIDTH - 3,
            y: 435,
        },
        {
            id: 'block_3',
            x: 150,
            initialX: 150,
            y: 348,
        },
        {
            id: 'block_10',
            x: 225,
            initialX: 225,
            y: 261,
        },
        {
            id: 'block_11',
            x: 275,
            initialX: 275,
            y: 377,
        },
        {
            id: 'block_12',
            x: 272 + BLOCK_WIDTH,
            initialX: 272 + BLOCK_WIDTH,
            y: 377,
        },
        {
            id: 'block_23',
            x: 400,
            initialX: 400,
            y: 377,
        },
        {
            id: 'block_24',
            x: 398 + BLOCK_WIDTH,
            initialX: 398 + BLOCK_WIDTH,
            y: 377,
        },
        {
            id: 'block_4',
            x: 700,
            initialX: 700,
            y: 348,
        },
        {
            id: 'block_13',
            x: 550,
            initialX: 550,
            y: 348,
        },
        {
            id: 'block_14',
            x: 625,
            initialX: 625,
            y: 261,
        },
        {
            id: 'block_5',
            x: 625,
            initialX: 625,
            y: 435,
        },
        {
            id: 'block_15',
            x: 622 + BLOCK_WIDTH,
            initialX: 622 + BLOCK_WIDTH,
            y: 435,
        },
        {
            id: 'block_16',
            x: 775,
            initialX: 775,
            y: 261,
        },
        {
            id: 'block_43',
            x: 772 + BLOCK_WIDTH,
            initialX: 772 + BLOCK_WIDTH,
            y: 261,
        },
        {
            id: 'block_17',
            x: 775,
            initialX: 775,
            y: 435,
        },
        {
            id: 'block_71',
            x: 850,
            initialX: 850,
            y: 493,
        },
        {
            id: 'block_8',
            x: 900,
            initialX: 900,
            y: 261,
            isFinish: true
        },
        {
            id: 'block_9',
            x: 897 + BLOCK_WIDTH ,
            initialX: 897 + BLOCK_WIDTH,
            y: 261,
            isFinish: true,
            isHand: true
        },
        {
            id: 'block_6',
            x: 1025,
            initialX: 1025,
            y: 493,
        },
        {
            id: 'block_7',
            x: 1022 + BLOCK_WIDTH,
            initialX: 1022 + BLOCK_WIDTH,
            y: 493,
        },
    ];

    const items = [
        {
            pic: presSrc,
            srcDesc: presDescSrc,
            descD: 0,
            descW: 216,
            descH: 105,
            items: [
                {
                    id: 'pres_1',
                    x: 157,
                    initialX: 157,
                    y: 389,
                },
                {
                    id: 'pres_2',
                    x: 431,
                    initialX: 431,
                    y: 418,
                },
                {
                    id: 'pres_3',
                    x: 630,
                    initialX: 630,
                    y: 304,
                },
                {
                    id: 'pres_4',
                    x: 782,
                    initialX: 782,
                    y: 304,
                },
                {
                    id: 'pres_5',
                    x: 831,
                    initialX: 831,
                    y: 304,
                },
            ]
        },
        {
            pic: balanceSrc,
            srcDesc: balanceDescSrc,
            descD: 5,
            descW: 187,
            descH: 105,
            amount: 5,
            items: [
                {
                    id: 'balance_1',
                    x: 281,
                    initialX: 281,
                    y: 473,
                },
                {
                    id: 'balance_2',
                    x: 555,
                    initialX: 555,
                    y: 388,
                },
                {
                    id: 'balance_3',
                    x: 656,
                    initialX: 656,
                    y: 482,
                },
                {
                    id: 'balance_4',
                    x: 656,
                    initialX: 656,
                    y: 535,
                },
                {
                    id: 'balance_5',
                    x: 855,
                    initialX: 855,
                    y: 535,
                },
            ]
        },
        {
            pic: folderSrc,
            srcDesc: folderDescSrc,
            descD: 165,
            descW: 232,
            descH: 105,
            amount: 5,
            items: [
                {
                    id: 'folder_1',
                    x: 12,
                    initialX: 12,
                    y: 473,
                },
                {
                    id: 'folder_2',
                    x: 55,
                    initialX: 55,
                    y: 473,
                },
                {
                    id: 'folder_3',
                    x: 234,
                    initialX: 234,
                    y: 300,
                },
                {
                    id: 'folder_4',
                    x: 706,
                    initialX: 706,
                    y: 388,
                },
                {
                    id: 'folder_5',
                    x: 781,
                    initialX: 781,
                    y: 473,
                },
            ]
        }
    ];

    const isLoaded = loadedBalance === 'loaded' && loadedBalanceDescSrc === 'loaded'
        && loadedFolder === 'loaded' && loadedFolderDescSrc === 'loaded'
        && loadedPres === 'loaded' && loadedPresDescSrc === 'loaded'
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
            y: 550,
            width: 24,
            height: 57,
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
        />
        {isModal && <DoneLevelModal onClose={() => setIsModal(false)} />}
    </>
}