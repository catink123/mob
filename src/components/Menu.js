import React from 'react';
import "./Menu.css";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.menuItems = props.menuItems
    }
    render() {
        let items = []
        for (var item in this.menuItems) {
            items.push(<button onClick={this.menuItems[item].onClick}>{this.menuItems[item].name}</button>)
        }
        return (
            <div className="Menu">
                {items}
            </div>
        )
    }
}

export default Menu;