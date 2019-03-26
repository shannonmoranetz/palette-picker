export const lockedHexcodesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LOCKED_HEXCODES':
            if (!state.includes(action.hexcode)) {
                return [...state, action.hexcode];
            } else {
                return state;
            }
        case 'REMOVE_LOCKED_HEXCODE':
            if (state.includes(action.hexcode)) {
                const lockedHexcodes = state;
                const lockedHexcodeIndex = lockedHexcodes.indexOf(action.hexcode);
                lockedHexcodes.splice(lockedHexcodeIndex, 1);
                return lockedHexcodes;
            } else {
                return state;
            }
        default:
            return state;
    }
};