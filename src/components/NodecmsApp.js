import React from 'react/addons';
var ReactTransitionGroup = React.addons.TransitionGroup;

import 'normalize.css';
import '../styles/main.css';

import imageURL from '../images/yeoman.png';
console.log('imageURL', imageURL);

export default class NodecmsApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='main'>
                <ReactTransitionGroup transitionName="fade">
                    <img src={imageURL} />
                </ReactTransitionGroup>
            </div>
        );
    }
}
