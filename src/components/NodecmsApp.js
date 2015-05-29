import React from 'react/addons';
import imageURL from '../images/yeoman.png';
import Store from '../stores/pagestore';
import Action from '../actions/dummyaction';
import _ from 'lodash';

import 'normalize.css';
import '../styles/main.scss';

var ReactTransitionGroup = React.addons.TransitionGroup;

//This is the main controller thingy, talking to the store.
export default class NodecmsApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = Store.getState();
    }
    componentWillMount() {
        Store.addChangeListener(this._onChange.bind(this));
        console.log('Listening for changes');
        if (!this.state.data) {
            Action.fetch();
        }
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange.bind(this));
        console.log('Stopped listening for changes');
    }

    _onChange() {
        this.setState(Store.getState());
    }

    getList(state) {
        console.log('getList');
        if (!state.data) {
            return null
        };

        let list = state.data.pages;
        console.log('list', list);
        let lis = [];
        _.forEach(list, function(item) {
            console.log('item', item);
            lis.push(
                <li>{item.id} - {item.name}</li>
                )
        })
        return lis;
    }

    render() {
        console.log('this.state.data', this.state.data);
        return (
            <div className='main'>
                <ReactTransitionGroup transitionName="fade">
                    <ul>
                        {this.getList(this.state)}
                    </ul>
                </ReactTransitionGroup>
            </div>
        );
    }
}
