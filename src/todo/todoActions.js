import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

var changeDescription = exports.changeDescription = function changeDescription(event) {
    return {
        type: 'DESCRIPTION_CHANGED',
        payload: event.targe.value
    };
};

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request 
    }
}

export const add = (description) => {
    const request = axios.post(URL, {description})
    return {
        type: 'TODO_ADDED',
        payload: request 
    }
}