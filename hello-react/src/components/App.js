import React, {Component} from 'react';
import Header from './Header';
import Top from './Top';
import Main from './Main';
import Footer from './Footer';
import List from './List';



class App extends Component {
    render() {
       var name = "Muhammad Rikza Afnan";
       let hobi = "Learn Learn Learn";
        return (
        <div >
            <Header list="3 terbaik" />
            <Top/>
            <Main/>
            <List/>
            <h3>My Name is : {name}</h3>
            <h3>Tujuan : {hobi}</h3>
            <Footer name="Makanan Nusantara" tahun="2019"/>
        </div>
        
    );
    }
}

export default App;