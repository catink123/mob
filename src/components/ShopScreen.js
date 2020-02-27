import Screen from './Screen';
import React from 'react';
import './ShopScreen.css';
import Item from './Item';

class ShopScreen extends Screen {
    constructor(props) {
        super(props);
        this.name = "Shop";
        this.className = "ShopScreen";
        this.currentCoinCount = props.currentCoinCount;
        this.currentEmeraldCount = props.currentEmeraldCount;
    }

    state = {
        coinCount: 0,
        emeraldCount: 0
    }

    componentDidMount() {
        this.setState({coinCount: this.currentCoinCount, emeraldCount: this.currentEmeraldCount})
    }

    render() {
        return (
            <div className={"Screen " + this.className}>
                <div className="TopBar">
                    <p className="ScreenName">Shop</p>
                    <div className="VerticalAlign">
                        <div>
                            <p>Coins: {this.state.coinCount}</p>
                            <p>Emeralds: {this.state.emeraldCount}</p>
                        </div>
                        <div>
                            <button>Characters</button>
                            <button>Weapons</button>
                            <button>Artifacts</button>
                        </div>
                    </div>
                </div>
                <div className="ItemContainer">
                    <Item quality="Green" />
                    <Item quality="Red" />
                    <Item quality="Purple" />
                    <Item quality="Orange" />
                    <Item quality="Green" name="Igor durak" />
                    <Item quality="Red" name="Another Igor durak" />
                    <Item quality="Purple" />
                    <Item quality="Orange" />
                </div>
            </div>
        )
    }
}

export default ShopScreen;