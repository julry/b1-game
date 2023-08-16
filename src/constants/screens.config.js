import { Screen1 } from '../components/screens/Screen1';
import { Screen2 } from '../components/screens/Screen2';
import { Screen3 } from '../components/screens/Screen3';
import { Screen4 } from '../components/screens/Screen4';
import { Screen5 } from '../components/screens/Screen5';
import { Screen6 } from '../components/screens/Screen6';
import { Screen7 } from '../components/screens/Screen7';
import { Screen8 } from '../components/screens/Screen8';
import {
    person, personL, personRUp, personR,
    personLUp, clothes, personUp, calc,
    calcDesc, table, glasses, tableDesc, glassesDesc
} from '../components/screens/Screen3/images';
import {
    person as person2, personL as person2L, personRUp as person2RUp, personR as person2R,
    personLUp as person2LUp, clothes as clothes2, personUp as person2Up, pres,
    balance, folder, presDesc, balanceDesc, folderDesc
} from '../components/screens/Screen4/images';
import {
    person as person3, personL as person3L, personRUp as person3RUp, personR as person3R,
    personLUp as person3LUp, clothes as clothes3, personUp as person3Up,
    stone, strategy, clients, stoneDesc, strategyDesc, clientsDesc
} from '../components/screens/Screen5/images';
import cup from '../assets/images/cup.svg';
import commonPerson3 from '../assets/images/commonPerson3.svg';
import dialog from '../assets/images/dialog.svg';
import road from '../assets/images/road.svg';
import background from '../assets/images/background.svg';

export const screens = [
    {
        id: 0,
        component: Screen1,
        preloadImages: [
            person, personL, personRUp, personR,
            personLUp, clothes, personUp, calc,
            calcDesc, table, glasses, tableDesc, glassesDesc,
            background, road,
        ],
    },
    {
        id: 1,
        component: Screen2,
        preloadImages: [
            person2, person2L, person2RUp, person2R,
            person2LUp, clothes2, person2Up, pres,
            balance, folder, presDesc, balanceDesc, folderDesc
        ]
    },
    {
        id: 2,
        component: Screen3,
        preloadImages: [
            person3, person3L, person3RUp, person3R,
            person3LUp, clothes3, person3Up, stone,
            strategy, clients, stoneDesc, strategyDesc, clientsDesc
        ]
    },
    {
        id: 3,
        component: Screen4,
        preloadImages: [dialog, cup, commonPerson3]
    },
    {
        id: 4,
        component: Screen5,
        preloadImages: []
    },
    {
        id: 5,
        component: Screen6,
        preloadImages: []
    },
    {
        id: 6,
        component: Screen7,
        preloadImages: []
    },
    {
        id: 7,
        component: Screen8,
        preloadImages: []
    }
];