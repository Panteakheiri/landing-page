import React, { Component } from 'react';
import styles from "./cards.module.css"
import Card from "./card";

import iphone14 from "../images/iPhone14.jpg"
import airpodspro2 from "../images/airpodspro2.jpg"
import applewatch7 from "../images/applewatch7.jpg"
import macbookpro from "../images/macbookpro.jpg"

class cards extends Component {
    constructor () {
        super()
        this.state = {
            appleData : [
                {id : 1, image: iphone14 , name:"Iphone 14", cost:"850 $"},
                {id : 2, image: airpodspro2 , name:"Airpod pro 2", cost:"400 $"},
                {id : 3, image: applewatch7 , name:"Smart watch 7", cost :"550 $"},
                {id : 4, image: macbookpro , name:"Macbook pro 2023" ,cost :"2200 $"}
            ]
        }
    }

    render() {
        return (
            <div className={styles.container}>
                {this.state.appleData.map(apple => <Card key={apple.id} id={apple.id} image={apple.image} name={apple.name} cost={apple.cost} />)}
            </div>
        );
    }
}

export default cards;