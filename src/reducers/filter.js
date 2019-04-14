import {FILTER_SET} from "../actionTypes";

export const filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ARCHIVED: 'SHOW_ARCHIVED'
};

const filter = (state = filters.SHOW_ALL, {type, payload}) => {
    switch (type) {
        case FILTER_SET:
            return payload
        default:
            return state
    }
};

export default filter;