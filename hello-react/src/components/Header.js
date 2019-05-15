import React, {Component} from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daftar : "Daftar Makanan Nusantara",
            state2 : "coba ajh",
            headerstate : "Ini Header dari State",
            dataList : this.props.list
        };
        this.handlePesan = this.handlePesan.bind(this)
    }

    handlePesan(value, e){
        e.preventDefault();
        alert(this.state.daftar)
        alert(value)
    }

    render() {
        return (
            <div>
                <h1>{this.state.headerstate}</h1>
                <h2>Ini Header</h2>
                <p>{this.state.daftar}</p>
                <p>{this.state.state2}</p>
                <p>{this.state.dataList}</p>
                <a href="/" onClick={(e)=>this.handlePesan("Pesan dari Header",e)}>Halaman header</a>
            </div>
        )
    };
};

export default Header;