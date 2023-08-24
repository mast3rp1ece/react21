import { legacy_createStore as createStore} from 'redux';

const initialState = {
	posts: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_POST':
			return {
				...state, posts: [...state.posts, action.payload]
			};
		default:
			return state;
	}
}
const store = createStore(reducer);

export default store;