import React from "react";
import logoNavinha from "../img/spaceship.png"

export default class LogoCarrinho extends React.Component {
    render () {
        return(
            <div>
                <img src={logoNavinha} width={50} />
            </div>
        )
    }
}