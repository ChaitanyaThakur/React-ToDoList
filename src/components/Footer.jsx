import React from "react";

function Footer(){
    var constYear =new Date().getFullYear();

    return <footer>CopyRight © {constYear}</footer>;
}

export default Footer