import {TODO_ADD, TODO_TOGGLE, TODO_ARCHIVE, TODO_DELETE} from "../actionTypes";

export const todoAdd = text => ({
    type: TODO_ADD,
    payload: text
});

export const todoToggle = id => ({
    type: TODO_TOGGLE,
    payload: id
});

export const todoArchive = id => ({
    type: TODO_ARCHIVE,
    payload: id
});

export const todoDelete = id => ({
    type: TODO_DELETE,
    payload: id
});