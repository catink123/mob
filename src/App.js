import React from 'react';
import './App.css';
import 'typeface-roboto';
import Screen from './components/Screen';
import Menu from './components/Menu';
import EnemyStats from './components/EnemyStats';
import EnemyImage from './components/EnemyImage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.enemyStats = React.createRef();
        this.enemyImage = React.createRef();
        this.dpc = 1
    }

    render() {
        return (
            <div>
                <Menu menuItems={[{
                    name: 'Hit',
                    onClick: () => {
                        this.enemyStats.current.addEnemyHP(-this.dpc);
                    }
                },
                {
                    name: 'Nam',
                    onClick: () => {
                        this.enemyStats.current.setEnemyName("Igar");
                    }

                },
                {
                    name: '-D',
                    onClick: () => {
                        this.dpc -= 1;
                    }
                },
                {
                    name: '+D',
                    onClick: () => {
                        this.dpc += 1;
                    }
                }]} />
                <Screen main>
                    <EnemyStats ref={this.enemyStats} />
                    <EnemyImage ref={this.enemyImage} onClick={() => {
                        this.enemyStats.current.addEnemyHP(-1);
                    }} />
                </Screen>

            </div>
        );
    }
}

export default App;
