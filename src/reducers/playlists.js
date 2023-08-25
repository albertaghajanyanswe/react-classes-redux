const initialState = [
        'Playlist 1',
        'Playlist 2'
];

function reducerPlayList(state = initialState, action) {
    if (action.type ==='ADD_PLAYLIST') {
        return [
            ...state,
           action.payload
        ]
    }
    if (action.type === 'DELETE_PLAYLIST') {
        var index = state.indexOf(action.payload);
        if (index !== -1) {
            state.splice(index, 1);
        }
        return [
            ...state
        ]
    }
    return state;
}

export default reducerPlayList;