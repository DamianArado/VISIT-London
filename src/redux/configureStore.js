import { createStore, combineReducers } from 'redux';
import { Destinations } from './destinations';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            destinations: Destinations,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
    return store;
}

