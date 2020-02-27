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
        this.enemyStats = React.createRef();
        this.enemyImage = React.createRef();
        this.shopScreen = React.createRef();
    }

    state = {
        dpc: 1,
        dps: 0,
        coinCount: 0,
        emeraldCount: 0,
        shopOpen: false
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
                    <ShopScreen currentCoinCount={this.state.coinCount} currentEmeraldCount={this.state.emeraldCount} />
                    : null
                }
            </div>
        );
    }
}

export default App;
