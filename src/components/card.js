import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from "./card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";

class card extends Component {
    constructor () {
        super();
        this.state = {
            counter : 0
        }
    }

    downHandler = () => {
        if (this.state.counter >= 1) {
            this.setState(prevstate => ({
                counter : prevstate.counter - 1,
            }))
        }
    }

    upHandler = () => {
        this.setState(prevstate => ({
            counter : prevstate.counter + 1,
        }))
    }

    render() {
       const {image , name , cost , id} = this.props
       const {counter} = this.state
        return (
            <div className={styles.container}>
                <img src={image} alt="apple"/>
                <h1><Link to={`/products/${id}`}>{name}</Link></h1>
                <p>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])} $` : ""}</p>
                <div className={styles.counter}>
                   <img src={down} className={!counter ? styles.deactive : ""} alt='arrow' onClick={this.downHandler}/>
                   <span>{this.state.counter}</span>
                   <img src={up} alt='arrow' onClick={this.upHandler}/>
                </div>
                
            </div>
        );
    }
}

export default card;