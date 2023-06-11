import React, { Component } from 'react';
import Banner from "./components/Banner";
import Cards from "./components/cards";
import Search from "./components/search";
import Footer from "./components/footer";

class Landing extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Cards />
                <Search />
                <Footer />
            </div>
        );
    }
}

export default Landing;