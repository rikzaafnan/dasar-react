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
    }
    render() {
        return (
            <div>
                <h1>{this.state.headerstate}</h1>
                <h2>Ini Header</h2>
                <p>{this.state.daftar}</p>
                <p>{this.state.state2}</p>
                <p>{this.state.dataList}</p>
            </div>
        )
    };
};

export default Header;