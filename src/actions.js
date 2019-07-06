export const UPDATE_TIME = 'UPDATE_TIME';

export function updateTime() {
    console.log('tick tock gun shot');
    return {
        type: UPDATE_TIME,
        time: Date.now()
    }
}

export function updateTimeAsync(resolution = 1000) {
    return dispatch => {
        setInterval(() => {
            dispatch(updateTime());
        }, resolution);
    };
}
