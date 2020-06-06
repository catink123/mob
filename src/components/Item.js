import React from 'react';
import './Item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);

        if (props.data !== undefined && props.type !== undefined) {
            this.name = props.data.name;
            this.quality = props.data.quality;
            this.price = props.data.price;
            if (props.type === "character") {
                this.priceQuantity = "Gold";
                this.image = require(`../resources/img/characters/${props.data.image}`)
            } else if (props.type === "weapon") {
                this.priceQuantity = "Gold";
                this.image = require(`../resources/img/weapons/${props.data.image}`)
            } else if (props.type === "artifact") {
                this.priceQuantity = "Emeralds";
                this.image = require(`../resources/img/artifacts/${props.data.image}`)
            }
            this.onClick = props.onClick;
        } else {
            this.name = props.name ? props.name : "Item";
            this.quality = props.quality ? props.quality : "Green";
            this.price = props.price ? props.price : 0;
            this.priceQuantity = props.priceQuantity ? props.priceQuantity : "Gold";
            this.image = props.image ? props.image : require("../resources/img/enemies/placeholder.png");
            this.onClick = null;
        }
    }

    render() {
        return (
            <div className="Item" hasPrice={this.price !== 0 ? true : false} onClick={this.onClick}>
                <img src={this.image} alt="" draggable={false} />
                <div className="Quality" quality={this.quality} />
                <p className="Name">{this.name}</p>
                <p className="Price">{this.price !== 0 ? `${this.price} ${this.priceQuantity}` : "No Price"}</p>
            </div>
        )
    }
}

export default Item;