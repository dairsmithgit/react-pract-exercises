import { FormEvent, useState } from 'react';
import Coin from '../model/coin';
import CoinListItem from './CoinListItem';
import './MakeMoney.css';

function MakeMoney() {
    const [ coins, setCoins ] = useState<Coin[]>([
        { name: "Dime" },
        { name: "Penny" },
    ]);
    const [ howMany, setHowMany ] = useState("1");
    const [ coinName, setCoinName ] = useState("Penny");

    function handleSubmit(e:FormEvent) {
        e.preventDefault();

        for (let i = 0; i < parseInt(howMany); i++) {
            let newCoin: Coin = { name: coinName };
            setCoins(prev => [...prev, newCoin]);
        }

    }

    return (
        <div className="MakeMoney">
            <h1>Make Money</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="howMany">How Many?</label>
                    <input id="howMany" type="number" value={howMany} onChange={e => setHowMany(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="whichCoin">Which Coin?</label>
                    <select id="whichCoin" value={coinName} onChange={e => setCoinName(e.target.value)}>
                        <option>Penny</option>
                        <option>Nickel</option>
                        <option>Dime</option>
                        <option>Quarter</option>
                    </select>
                </p>
                <p>
                    <button type="submit">Make Money!</button>
                </p>
            </form>
            <ul>
                {coins.map((thisCoin, i) => <CoinListItem key={i} coin={thisCoin} />)}
            </ul>
        </div>
    )
}

export default MakeMoney;