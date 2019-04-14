import {FILTER_SET} from "../actionTypes";

export const filterSet = filter => ({
    type: FILTER_SET,
    payload: filter
});