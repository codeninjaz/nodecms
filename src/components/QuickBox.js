import React from 'react/addons';
import QuickBoxText from './QuickBoxText';

export default class QuickBox extends React.Component {
    constructor(props) {
        super(props);

        this._keydownEvent = {
            handleEvent: function(e) {
                var charCode = (typeof e.which === 'number') ? e.which : e.keyCode;
                if (charCode) {

                    if (charCode === 8) {
                        if (this.qbString.length >= 1) {
                            this.qbString = this.qbString.substr(0, this.qbString.length - 1);
                        } else {
                            this.componentActive = false;
                        }
                    } else {
                        this.qbString = this.qbString + String.fromCharCode(charCode);
                    }

                    if (this.qbString.length > 0) {
                        this.componentActive = true;
                    }

                    this.qb.forceUpdate();
                }
            },
            qbString: '',
            qb: this,
            componentActive: false
        };

        this._mouseMovement = {
		    handleEvent: function(e){
                this.mousePositionX = e.clientX;
                this.mousePositionY = e.clientY;
            },
            mousePositionX: null,
            mousePositionY: null,
            };
    }

    componentWillMount() {
        window.addEventListener('keydown', this._keydownEvent);
        document.addEventListener('mousemove', this._mouseMovement);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this._keydownEvent);
        document.removeEventListener('mousemove', this._mouseMovement);    	
    }

    render() {
        var divStyle = {
            position: 'absolute',
            left: this._mouseMovement.mousePositionX,
            top: this._mouseMovement.mousePositionY
        }

        var activeClass = this._keydownEvent.componentActive ? 'active' : 'inactive';

        return (
            <div className={activeClass} style={divStyle}>
                <QuickBoxText searchString={this._keydownEvent.qbString} />
            </div>
        );
    }
}
