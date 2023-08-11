import player from '../../../assets/images/commonPlayer.svg';

export const BLOCK_WIDTH = 50;
export const BLOCK_HEIGHT = 29;
export const HAND_HEIGHT = 20;
export const PERSON_HEIGHT = 70;
export const PERSON_WIDTH = 24;
export const INITIAL_PERSON_Y = 157;
export const INITIAL_PERSON_X = 111;
export const ITEM_SIZE = 38;

export const STATES = {
    left: 'left',
    right: 'right',
    up: 'up',
    common: 'common'
}
export const MOVE_HORIZONTAL = BLOCK_WIDTH;
export const MOVE_VERTICAL = 144;
export const STATE_TO_IMAGE = {
    [STATES.left]: player,
    [STATES.right]: player,
    [STATES.up]: player,
    [STATES.common]: player,
}

export const MAX_WIDTH = 375;