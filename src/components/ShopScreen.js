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
        this.database = props.database;
        this.isOpen = props.isOpen;
    }

    state = {
        coinCount: 0,
        emeraldCount: 0,
        currentTab: "characters"
    }

    changeTab(tab) {
        this.setState({currentTab: tab});
        this.forceUpdate();
    }

    componentDidMount() {
        this.setState({coinCount: this.currentCoinCount, emeraldCount: this.currentEmeraldCount})
    }

    render() {
        return (<>
            { this.isOpen ?
            <div className={"Screen " + this.className}>
                <div className="TopBar">
                    <p className="ScreenName">Shop</p>
                    <div className="VerticalAlign">
                        <div>
                            <p>Coins: {this.state.coinCount}</p>
                            <p>Emeralds: {this.state.emeraldCount}</p>
                        </div>
                        <div>
                            <button onClick={() => this.changeTab("characters")}>Characters</button>
                            <button onClick={() => this.changeTab("weapons")}>Weapons</button>
                            <button onClick={() => this.changeTab("artifacts")}>Artifacts</button>
                        </div>
                    </div>
                </div>
                <div className="ItemContainer">
                    {this.state.currentTab === "characters" ? this.database.characters.map(character => <Item data={character} type="character" inventoryItem={false} />) : null}
                    {this.state.currentTab === "weapons" ? this.database.weapons.map(weapon => <Item data={weapon} type="weapon" inventoryItem={false} />) : null}
                    {this.state.currentTab === "artifacts" ? this.database.artifacts.map(artifact => <Item data={artifact} type="artifact" inventoryItem={false} />) : null}
                </div>
            </div>
            : null}
            </>
        )
    }
}

export default ShopScreen;