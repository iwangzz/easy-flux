import flux from 'flux'
import itemStore from '../stores/ItemStore'

let Dispatcher = flux.Dispatcher;
let AppDispatcher = new Dispatcher();

AppDispatcher.register((action) => {
    switch(action.actionType) {
        case 'ADD_NEW_ITEM':
           itemStore.addNewItemHandler(action.text);
           itemStore.emitChange();
           break;

        default:
            console.log('no action selected');
        ;
    }
})

export default AppDispatcher


