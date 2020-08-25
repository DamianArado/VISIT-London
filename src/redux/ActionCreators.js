import * as ActionTypes from './ActionTypes';

export const addComment = (destinationId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        destinationId: destinationId,
        rating: rating,
        author: author,
        comment: comment
    }
});