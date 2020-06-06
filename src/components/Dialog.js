import React from 'react';
import './Dialog.css';


class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.image = props.image ? require("../resources/img/characters/placeholder.png") : null;
        this.title = props.title;
        this.text = props.text || "Placeholder Text.";
        this.actions = props.actions || [
            {
                label: "OK",
                onClick: "closeDialog"
            }
        ];
        this.onClose = props.onClose;
    }

    render() {
        return (
            <div className="Dialog HasImage">
                <div className="Actions">
                    {this.actions.map(action => {
                        if (action.onClick === "closeDialog") return <button className="Action" onClick={this.onClose}>{action.label}</button>
                        else return <button className="Action" onClick={action.onClick}>{action.label}</button>
                    })}
                </div>
                <p className="Text">{this.text}</p>
                {this.title ? <p className="Title">{this.title}</p> : null}
                    {this.image ? <img className="Image" src={this.image} alt="" /> : null}
            </div>
        )
    }
}

export default Dialog;