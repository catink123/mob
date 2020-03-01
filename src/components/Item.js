import React from 'react';
import './Item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);

        // // If itemID exists, then populate properties based on that
        // this.itemID = props.itemID ? props.itemID : "any.any";
        // if (this.itemID !== "any.any") {
        //     // Split itemID into type and name
        //     var splitText = this.itemID.split(".")
        //     this.itemClass = {
        //         type: splitText[0],
        //         name: splitText[1]
        //     }

        //     if (this.itemClass.type == "character") {

        //     }

        // If data exists, then populate properties based on that
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
        } else {
            this.name = props.name ? props.name : "Item";
            this.quality = props.quality ? props.quality : "Green";
            this.price = props.price ? props.price : 0;
            this.priceQuantity = props.priceQuantity ? props.priceQuantity : "Gold";
            this.image = props.image ? props.image : require("../resources/img/enemies/placeholder.png");
        }
    }

    render() {
        return (
            <div className="Item" hasPrice={this.price !== 0 ? true : false}>
                <img src={this.image} alt="" />
                <div className="Quality" quality={this.quality} />
                <p className="Name">{this.name}</p>
                {
                    this.price !== 0 ?
                        <p className="Price">{this.price} {this.priceQuantity}</p>
                        : null
                }
            </div>
        )
    }
}

export default Item;