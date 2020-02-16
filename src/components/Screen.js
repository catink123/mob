import React from 'react';
import './Screen.css';

class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.isMainScreen = this.props.main;
        this.isVisible = false;
        if (this.isMainScreen) {
            this.toggleVisibility(true);
        }
    }
    
    toggleVisibility(state) {
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
    }
    
    render() {
        let className = "Screen";
        if (this.isVisible) {
            className = className.replace(" hidden", "");
        } else {
            className += " hidden";
        }
        return(
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}

export default Screen;