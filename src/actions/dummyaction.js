import NodecmsAppDispatcher from '../dispatcher/nodecmsappdispatcher';
import NodecmsConstants from '../constants/nodecmsconstants';
import NodecmsApi from '../apicalls/nodecmsapi';

export default {
    fetch: () => {
        NodecmsApi.fetch().then((data) => {
            NodecmsAppDispatcher.handleAction({
                type: NodecmsConstants.FETCHING,
                data: data
            })
        })
    }
}
