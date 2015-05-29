import React from 'react/addons';
import imageURL from '../images/yeoman.png';

import 'normalize.css';
import '../styles/main.css';

var ReactTransitionGroup = React.addons.TransitionGroup;

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
