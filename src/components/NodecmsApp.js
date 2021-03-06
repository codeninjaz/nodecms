import React from 'react/addons';
import imageURL from '../images/yeoman.png';
import Store from '../flux/stores/pagestore';
import Action from '../flux/actions/dummyaction';
import pauseGif from '../images/be7.gif';
import _ from 'lodash';
import QuickBox from './QuickBox';
import Router from 'react-router';

import 'normalize.css';
import '../styles/main.scss';

var ReactTransitionGroup = React.addons.TransitionGroup;
var RouteHandler = Router.RouteHandler;

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
            return (
                <img style={{width:'376px', height:'238px'}} src={pauseGif} />
                )
        };

        let list = this.state.data.pages;
        let lis = [];
        _.forEach(list, function(item, index) {
            lis.push(
                <li key={index}>{item.id} - {item.name}</li>
                )
        })
        return (
            <ul>
                {lis}
            </ul>
            );
    }

    render() {
        return (
            <div className='main'>
                <QuickBox />

                <RouteHandler />
                <ReactTransitionGroup transitionName="fade">
                    {this.getList()}
                </ReactTransitionGroup>
            </div>
        );
    }
}
