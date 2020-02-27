import Screen from './Screen';
import './MainScreen.css';

class MainScreen extends Screen {
    constructor(props) {
        super(props);
        this.className = "MainScreen";
        this.isVisible = true;
    }
}

export default MainScreen;