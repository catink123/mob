import React from 'react';
import './EnemyImage.css';

class EnemyImage extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = props.onClick;
    }

    state = {
        image: require('../resources/img/enemy/placeholder.png')
    }

    changeImage = (path) => {
        this.setState({
            image: require(path)
        })
    }

    render() {
        return(
            <img className="EnemyImage" src={this.state.image} alt={this.state.image} onClick={this.onClick} />
        )
    }
}

export default EnemyImage;