import NodecmsConstants from '../constants/nodecmsconstants';
import Dispatcher from '../dispatcher/nodecmsappdispatcher';
import {EventEmitter} from 'events';

let data = {};

export class PageStore extends EventEmitter {
    getState() {
        return data;
    }

    emitChange() {
        this.emit('CHANGE');
    }

    addChangeListener(cb) {
        this.on('CHANGE', cb);
    }

    removeChangeListener(cb) {
        this.removeListener('CHANGE', cb);
    }
}

let _PageStore = new PageStore();

export default _PageStore;

Dispatcher.register((payload) => {
    let action = payload.action;
    switch (action.type) {
        case NodecmsConstants.FETCHING:
            data = action.data;
            _PageStore.emitChange();
            break;
        default:
            break;
    }
});
