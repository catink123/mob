import ShopIcon from '../resources/img/icons/Shop.png';

const gpath = "../resources/img/";

function c(path) {
    return require(gpath + path)
}

const StaticImages = {
    icons: {
        ShopIcon: ShopIcon
    }
}

export default StaticImages; 