import React from 'react/addons';
import QuickBoxText from './QuickBoxText';

export default class QuickBox extends React.Component {
    constructor(props) {
        super(props);

        this._eventObj = {
            handleEvent: function(e) {
                var charCode = (typeof e.which === 'number') ? e.which : e.keyCode;
                if (charCode) {

                    if (charCode === 8) {
                        if (this.qbString.length >= 1) {
                            this.qbString = this.qbString.substr(0, this.qbString.length - 1);
                        }
                    } else {
                        this.qbString = this.qbString + String.fromCharCode(charCode);
                    }

                    this.positionX = 100; //fixa muspos
                    this.positionY = 400;
                    this.qb.forceUpdate();
                }
            },
            qbString: '',
            qb: this,
            positionX: null,
            positionY: null,
        };
    }

    componentWillMount() {
        window.addEventListener('keydown', this._eventObj);
    }

    componentWillUnmount() {
    }

    render() {
        var divStyle = {
            position: 'absolute',
            left: this._eventObj.positionX,
            top: this._eventObj.positionY
        }

        return (
            <div style={divStyle}>
                <QuickBoxText searchString={this._eventObj.qbString} />
            </div>
        );
    }
}
