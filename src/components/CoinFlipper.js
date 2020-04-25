import React, { Component } from 'react';
import "./CoinFlipperStyles.css";
import Coin from "./Coin";

const options = ["yazi", "tura"];

const getRandomElFromArr = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
};

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStatus: options[0],
            gelenler: [],
            donuyor: false
        }
    }

    atisYap = () => {
        this.setState({
            donuyor: true
        });
        const rastgeleEleman = getRandomElFromArr(options);
        setTimeout(() => {
            this.setState({
                currentStatus: rastgeleEleman,
                gelenler: [...this.state.gelenler, rastgeleEleman],
                donuyor: false
            })
        }, 1000);
    }

    counterForHeadsAndTails = (headsOrTails) => {
        const count = this.state.gelenler.filter(coin => coin === headsOrTails).length;
        return <div>{headsOrTails} sayisi: {count}</div>
    }

    render() {
        const { currentStatus, donuyor, gelenler } = this.state;
        return (
            <div>
                <h1>
                    Yazi ya da tura
                </h1>
                <Coin currentStatus={currentStatus} donuyor={donuyor} />
                <button onClick={this.atisYap}>Atis yap</button>
                {
                    gelenler.length > 0 && !donuyor && <h3>{currentStatus} geldi</h3>
                }

                <p>Toplam Atış sayısı: {gelenler.length}</p>
                {
                    options.map(option => this.counterForHeadsAndTails(option))
                }
            </div>
        );
    }
}

export default CoinFlipper;