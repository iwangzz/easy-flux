import EventEmitter from 'events'

class ItemStore extends EventEmitter {
    constructor() {
        super()
        this.items = []
    }

    getAll() {
        return this.items
    }

    addNewItemHandler(text) {
        this.items.push(text)
    }

    emitChange() {
        console.log('fire change');
        this.emit('change');
    }

    addChangeListener(callback) {
        console.log('add change listener');
        console.log(this);
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        console.log('remove change listener');
        this.removeListener('change', callback)
    }
}

let itemStore = new ItemStore();

export default itemStore