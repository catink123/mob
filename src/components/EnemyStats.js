import React from 'react';
import './EnemyStats.css';

class EnemyStats extends React.Component {
    state = {
        enemyHP: {
            value: 20,
            max: 20
        },
        enemyName: 'Name'
    }

    addEnemyHP = (amount) => {
        this.setState(prevState => {
            let enemyHP = Object.assign({}, prevState.enemyHP);
            enemyHP.value += amount;
            if (enemyHP.value === 0) {
                enemyHP.value = enemyHP.max;
            }
            return {enemyHP};
        });
    }

    getEnemyHP = () => {
        return this.state.enemyHP;
    }

    setEnemyName = (name) => {
        this.setState({
            enemyName: name
        });
    }

    render() {
        var enemyHPwidth = 0;
        enemyHPwidth = ((this.state.enemyHP.value / this.state.enemyHP.max) * 100) + '%';

        return(
            <div className="EnemyStats">
                <p>{this.state.enemyName}</p>
                <div className="EnemyHP">
                    <div style={{width: enemyHPwidth}} />
                    <p>{this.state.enemyHP.value} / {this.state.enemyHP.max}</p>
                </div>
            </div>
        )
    }
}

export default EnemyStats;