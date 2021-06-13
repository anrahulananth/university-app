import { UNIVERSITIES } from '../actions';

export const universitiesReducer = (state = [], action) => {
    switch (action.type) {
        case UNIVERSITIES.GET_NEXT_UNIVERSITIES: 
            return action.universities;
        default:
            return state
    }
};