import React, { Component } from "react";

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            title : "Menu Makanan",
            judul: "Ini percobaan Judul",
            title2 : "Menu Minuman",
            jenisminuman : "minuman dingin",
            jenisminuman2 : "minuman panas"
        }
        this.rubahData = this.rubahData.bind(this)
        this.cobaAja = this.cobaAja.bind(this)
    }

    // rubahData(){
    //     this.state({title:"Pilih Makanan :"})
    // }

    cobaAja(){
        this.setState((state, props)=>{
            return {
                jenisminuman : state.jenisminuman2
            }
        })
    }


    rubahData(){
        this.setState((state, props)=>{
            return {
                        title: state.title2,
                        title2: state.title
                    }
        })
    }
    render(){
        return (    
            <div>
                <h3>{this.state.title}</h3>
                <h2>{this.state.title2}</h2>
                <h5>{this.state.judul}</h5>
                <button onClick={this.rubahData}>Rubah data</button>
                <button onClick={this.cobaAja}>minuman nih</button>
                <p>{this.state.jenisminuman}</p>
            </div> 
        )
    }
}

export default Main;