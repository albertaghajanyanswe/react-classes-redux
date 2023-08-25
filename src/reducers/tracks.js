const initialState = [
        'Track 1',
        'Track 2'
];

function reducerTracks(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state, 
            action.payload
        ];
    }
    if (action.type === 'DELETE_TRACK') {
        const index = state.indexOf(action.payload);
        console.log('state = ', state)
        console.log('action = ', action)
        console.log('index = ', index)
        if (index !== -1) {
            state.splice(index, 1);
        }
        return [
            ...state
        ]
    }
    return state;
}

export default reducerTracks;