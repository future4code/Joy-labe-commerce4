import React from "react";
import styled from "styled-components";
import imagemLogo from "../img/alien.png"

const ContainerLogo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center; 
`

const TextoLogo = styled.h1`
    font-family: virgo_01regular, sans-serif;
    font-variant: small-caps slashed-zero;

`

export default class Logo extends React.Component {
    render () {
        return(
            <ContainerLogo>
                <img src= {imagemLogo} width={75}/>
                <TextoLogo>Space <br /> Toys</TextoLogo>
            </ContainerLogo>
        )
    }
}