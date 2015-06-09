var Dispatcher = require('flux').Dispatcher;

class NodecmsAppDispatcher extends Dispatcher{
    handleAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
}

let _NodecmsAppDispatcher = new NodecmsAppDispatcher();

export default _NodecmsAppDispatcher;
