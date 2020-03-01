import React from 'react';
import './App.css';

// Screens
import MainScreen from './components/MainScreen';
import ShopScreen from './components/ShopScreen';

// Game navigation
import Menu from './components/Menu';

// Enemy status for main screen
import EnemyStats from './components/EnemyStats';
import EnemyImage from './components/EnemyImage';

class App extends React.Component {
    constructor(props) {
        super(props);

        // Define a database for all JSON game data
        this.database = {
            characters: [],
            weapons: [],
            artifacts: []
        }

        // Import the data

        let data = require("./resources/json/data.json")
        var index

        for (index in data.characters) {
            this.database.characters.push(require(`./resources/json/characters/${data.characters[index]}.json`));
        }

        for (index in data.weapons) {
            this.database.weapons.push(require(`./resources/json/weapons/${data.weapons[index]}.json`));
        }

        for (index in data.artifacts) {
            this.database.artifacts.push(require(`./resources/json/artifacts/${data.artifacts[index]}.json`));
        }

        // Create refs for components
        this.enemyStats = React.createRef();
        this.enemyImage = React.createRef();
        this.shopScreen = React.createRef();
    }

    state = {
        dpc: 1,
        dps: 0,
        coinCount: 0,
        emeraldCount: 0,
        shopOpen: false,
        inventory: {
            characters: [],
            weapons: [],
            artifacts: []
        }
    }

    onKill = () => {
        this.setState({coinCount: this.state.coinCount + 1})
    }

    render() {
        return (
            <div className="App">
                <Menu menuItems={[
                {
                    name: '-D',
                    onClick: () => {
                        this.setState({dpc: this.state.dpc - 1})
                    }
                },
                {
                    name: '+D',
                    onClick: () => {
                        this.setState({dpc: this.state.dpc + 1})
                    }
                },
                {
                    name: 'S',
                    onClick: () => {
                        this.setState({shopOpen: !this.state.shopOpen})
                    }
                },
                {
                    name: 'C',
                    onClick: () => {
                        this.setState({coinCount: this.state.coinCount + 1})
                    }
                }
                ]} />
                <MainScreen>
                    <EnemyStats ref={this.enemyStats} onKill={this.onKill} />
                    <EnemyImage ref={this.enemyImage} onClick={() => {
                        this.enemyStats.current.addEnemyHP(-this.state.dpc);
                    }} />
                </MainScreen>
                {
                    this.state.shopOpen ?
                    <ShopScreen currentCoinCount={this.state.coinCount} currentEmeraldCount={this.state.emeraldCount} database={this.database} />
                    : null
                }
            </div>
        );
    }
}

export default App;
