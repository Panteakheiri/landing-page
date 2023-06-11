import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Landing from './Landing';
import Copyright from './components/Copyright';
import {Route , Routes} from "react-router-dom"
import Products from './Products';
import DetailPage from './components/DetailPage';


class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                
                  <Routes>
                     <Route path='/products' element={<Products/>}/>
                     <Route path='/products/:id' element={<DetailPage/>}/>
                     <Route axact path='/' element={<Landing/>}/>
                 </Routes>
                
                <Copyright />
            </div>
        );
    }
}

export default App;