export enum ACTIONS_TYPE {
    CHANGE_START_VALUE = 'Counter/CHANGE-START-VALUE',
    CHANGE_MAX_VALUE = 'Counter/CHANGE-MAX-VALUE',
    CHANGE_VALUE = 'Counter/CHANGE-VALUE',
    CHANGE_STATUS_SET_BTN = 'Counter/CHANGE-STATUS-SET-BTN',
    CHANGE_STATUS_INC_BTN = 'Counter/CHANGE-STATUS-INC-BTN',
    CHANGE_STATUS_RESET_BTN = 'Counter/CHANGE-STATUS-RESET-BTN',
}

const initialState = {
    start: 0,
    max: 5,
    value: 0,
    setBtnStatus: true,
    incBtnStatus: false,
    resetBtnStatus: false,
};

export type initialStateType = typeof initialState;

type ActionsType =
    ActionStartType
    | ActionMaxType
    | ActionValueType
    | ActionSetBtnStatusType
    | ActionIncBtnStatusType
    | ActionResetBtnStatusType;



export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_START_VALUE :
        case ACTIONS_TYPE.CHANGE_MAX_VALUE :
        case ACTIONS_TYPE.CHANGE_VALUE :
        case ACTIONS_TYPE.CHANGE_STATUS_SET_BTN :
        case ACTIONS_TYPE.CHANGE_STATUS_INC_BTN :
        case ACTIONS_TYPE.CHANGE_STATUS_RESET_BTN :

            return {
                ...state, ...action.payload
            }
    }

    return state;
};

export const changeStart = (start: number) => {
    return {
        type: ACTIONS_TYPE.CHANGE_START_VALUE,
        payload: {
            start,
        },
    }
};

type ActionStartType = ReturnType<typeof changeStart>;

export const changeMax = (max: number) => {
    return {
        type: ACTIONS_TYPE.CHANGE_MAX_VALUE,
        payload: {
            max,
        },
    }
};

type ActionMaxType = ReturnType<typeof changeMax>;

export const changeValue = (value: number) => {
    return {
        type: ACTIONS_TYPE.CHANGE_VALUE,
        payload: {
            value,
        },
    }
};

type ActionValueType = ReturnType<typeof changeValue>;

export const changeStatusSetBtn = (status: boolean) => {
    return {
        type: ACTIONS_TYPE.CHANGE_STATUS_SET_BTN,
        payload: {
            setBtnStatus: status,
        },
    }
};

type ActionSetBtnStatusType = ReturnType<typeof changeStatusSetBtn>;

export const changeStatusIncBtn = (status: boolean) => {
    return {
        type: ACTIONS_TYPE.CHANGE_STATUS_INC_BTN,
        payload: {
            incBtnStatus: status,
        },
    }
};

type ActionIncBtnStatusType = ReturnType<typeof changeStatusIncBtn>;

export const changeStatusResetBtn = (status: boolean) => {
    return {
        type: ACTIONS_TYPE.CHANGE_STATUS_RESET_BTN,
        payload: {
            resetBtnStatus: status,
        },
    }
};

type ActionResetBtnStatusType = ReturnType<typeof changeStatusResetBtn>;
