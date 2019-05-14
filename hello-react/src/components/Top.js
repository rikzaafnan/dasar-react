import React from "react";

const Top = () => {

    const handlePesan= ()=>{
        alert("Halaman Top Tampil loh");
    }

    return (
        <a href="/" onClick={handlePesan}>
            Halaman Top
        </a>
    );
};

export default Top;