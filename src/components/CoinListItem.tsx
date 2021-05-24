import Coin from "../model/coin";
import './CoinListItem.css';

interface Props {
    coin: Coin;
}

function CoinListItem({ coin }: Props) {
    
    return (
        <li className="CoinListItem">
            { coin.name }
        </li>
    )
}

export default CoinListItem;