import React from 'react';
import './EnemyImage.css';

class EnemyImage extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = props.onClick;
    }

    state = {
        image: require('../resources/img/enemies/placeholder.png')
    }

    setImage = (name) => {
        this.setState({
            image: require(`../resources/img/enemies/${name}`)
        })
    }

    render() {
        return (
            <div className="EnemyImage" onClick={this.onClick}>
                <img src={this.state.image} alt={this.state.image} draggable={false} />
            </div>
        )
    }
}

export default EnemyImage;