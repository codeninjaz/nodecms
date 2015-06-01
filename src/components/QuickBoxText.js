import React from 'react/addons';

export default class QuickBoxText extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <h1>{this.props.searchString}</h1>
            );
    }
}
