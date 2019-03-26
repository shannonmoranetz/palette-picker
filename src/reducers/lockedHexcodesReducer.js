export const lockedHexcodesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RANDOM_HEXCODES':
            return [...state, action.hexcode];
        default:
            return state;
    }
};