import * as actionTypes from './actionTypes';

export const pumpsFetchSuccess = ( data ) => {
    return {
        type: actionTypes.PUMPS_FETCH_SUCCESS,
        value: data
    };
};

export const pumpsFetchFailure = () => {
    return {
        type: actionTypes.PUMPS_FETCH_FAILURE
    };
};

export const loadPumps = () => {
    return dispatch => {
        fetch("https://websynergy-52a98-default-rtdb.firebaseio.com/pumps.json")
        .then((res) => res.json())
        .then((data) => {
            dispatch(pumpsFetchSuccess(data));
        })
        .catch((err) => {
            dispatch(pumpsFetchFailure())
        })
    };
};

export const sortHandler = (value) => {
    return {
        type: actionTypes.SORT_HANDLER,
        value
    };
}

export const selectedPumpHandler = (id) => {
    return {
        type: actionTypes.SELECTED_PUMP,
        id
    }
}

export const handleInputChange = (cat) => {
    return {
        type: actionTypes.FILTER_PUMP,
        cat
    }
}