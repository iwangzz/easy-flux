import AppDispatcher from '../dispatcher/AppDispatcher'

export default class ButtonActions {
    addNewItem(text) {
        AppDispatcher.dispatch({
          actionType: 'ADD_NEW_ITEM',
          text: text
        }) 
    }
}