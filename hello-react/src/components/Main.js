import React, { Component } from "react";

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            title : "Menu Makanan",
            judul: "Ini percobaan Judul"
        }
        this.rubahData = this.rubahData.bind(this)
    }


    rubahData(){
        this.setState({title:"pilih makanan"})
    }
    render(){
        return (    
            <div>
                <h3>{this.state.title}</h3>
                <h5>{this.state.judul}</h5>
                <button onClick={this.rubahData}>Rubah data</button>
            </div> 
        )
    }
}

export default Main;