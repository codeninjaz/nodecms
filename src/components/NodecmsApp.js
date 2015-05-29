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

    getList() {
        if (!this.state.data) {
            return null
        };

        let list = this.state.data.pages;
        let lis = [];
        _.forEach(list, function(item, index) {
            lis.push(
                <li key={index}>{item.id} - {item.name}</li>
                )
        })
        return lis;
    }

    render() {
        return (
            <div className='main'>
                <ReactTransitionGroup transitionName="fade">
                    <ul>
                        {this.getList()}
                    </ul>
                </ReactTransitionGroup>
            </div>
        );
    }
}
