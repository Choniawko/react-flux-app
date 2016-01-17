import AppConstants from '../constants/app.constant';
import { dispatch, register } from '../dispatchers/app-dispatcher';


export default {
	addItem( item ){
		dispatch({
		actionType: AppConstants.ADD_ITEM, item
	})
	},
	removeItem( item ){
		dispatch({
		actionType: AppConstants.REMOVE_ITEM, item
	})
	},
	increaseItem( item ){
		dispatch({
		actionType: AppConstants.INCREASE_ITEM, item
	})
	},
	decreaseItem( item ){
		dispatch({
		actionType: AppConstants.DECREASE_ITEM, item
	})
	}
}