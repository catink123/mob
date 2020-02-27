import React from 'react';
import './Screen.css';

class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.className = "";
    }
    
    /* toggleVisibility(state) {
        if (state !== undefined) {
            if (state) {
                this.isVisible = true;
            } else {
                this.isVisible = false;
            }
        } else {
            if (this.isVisible) {
                this.isVisible = false;
            } else {
                this.isVisible = true;
            }
        }
        this.forceUpdate()
    }

    getVisibility() {
        return(this.isVisible);
    } */
    
    render() {
        /* if (this.isVisible) {
            this.className = this.className.replace(" hidden", "");
        } else {
            this.className += " hidden";
        } */
        return(
            <div className={"Screen " + this.className}>
                {this.props.children}
            </div>
        )
    }
}

export default Screen;