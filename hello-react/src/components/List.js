import React, {Component} from "react"
import Image from "./Image"

class List extends Component {
    render(){
        return(
            <ol>
                <Image linkgambar="https://b.zmtcdn.com/data/menus/222/7415222/539f16498a13792c758607941137a524.jpg" lebar="500" deskripsi="gambar Menu makanan"/>
                <li>Nasi padang</li>
                <Image linkgambar="" lebar="400" deskripsi="gambar Nasi Padang" />
                <li>Sate</li>
                <Image linkgambar="" lebar="300" deskripsi="gambar Sate" />
                <li>Soto Lamongan</li>
                <Image linkgambar="" lebar="200" deskripsi="Gambar Soto Lamongan" />
            </ol>
        )
    }
}

export default List;