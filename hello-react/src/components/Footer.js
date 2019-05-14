import React from "react";

// class Footer extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>ini footer loh</h3>
//             </div>
//         )
//     }
// }

const Footer = props => {
    return (
        <div>
            <h4>Halaman Footer {props.name}</h4>
            <p>{props.tahun}</p>
        </div>
    )
}
export default Footer;