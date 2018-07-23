import Constants from '../constants/siteConstants'

const initialState = {
    loading: false,
    payload: null,
    error: false,
    meta: null,
    baseUrl: '/',
    location: '/'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.SITE_STARTED:
            return {
                ...state,
                loading: true
            };
        case Constants.SITE_FINISHED:
            return {
                ...state,
                loading: false,
                payload: action.payload,
                error: action.error,
                meta: action.meta || initialState.meta
            };
        default:
            return state;
    }
};
