export const notes = (state = [], action) => {
    if (action.type === 'FETCH_NOTES') {
        return [
            ...action.notes
        ];
    } else {
        return state;
    }
};