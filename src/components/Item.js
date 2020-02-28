import React from 'react';
import './Item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name ? props.name : "Item";
        this.quality = props.quality ? props.quality : "Green";
        this.price = props.price ? props.price : 0;
        this.priceQuantity = props.priceQuantity ? props.priceQuantity : "Gold";
        this.image = props.image ? props.image : require("../resources/img/enemy/placeholder.png");
    }

    render() {
        return(
            <div className="Item" hasPrice={this.price !== 0 ? true : false}>
                <img src={this.image} alt="" />
                <div className="Quality" quality={this.quality}/>
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