import React from 'react';
import "./Menu.css";
import ClickSound from '../resources/audio/click.wav';

// Icons
import ShopIcon from '../resources/img/icons/Shop.png';

var Icons = {
    ShopIcon: ShopIcon
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.menuItems = props.menuItems;
    }

    render() {
        let items = []
        for (var item in this.menuItems) {
            items.push(<button
                onClick={this.menuItems[item].onClick}
                key={this.menuItems[item].name}>
                <img
                    className="Icon"
                    src={Icons[this.menuItems[item].icon]}
                    draggable={false}
                    alt="" />
            </button>)
        }
        return (
            <div className="Menu">
                {items}
            </div>
        )
    }
}

export default Menu;