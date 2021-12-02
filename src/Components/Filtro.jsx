import React from "react";
import styled from 'styled-components';

const ContainerFiltro = styled.div`
    border: 1px solid black;
    width: 90%;
    justify-self: flex-start;
    align-self: start;
    margin-left: 15px;
`

const TituloFiltro =styled.h3`
    text-align: center;
`

export default class FiltroProdutos extends React.Component {

    state ={
        busca: "",
        precoMinimo: "",
        precoMaximo: "",
    };

    atualizaBusca = (event) => {
        this.setState({
            busca: event.target.value
        })
    }

    atualizaPrecoMinimo = (event) => {
        this.setState({
           precoMinimo: event.target.value
        })
     }
  
     atualizaPrecoMaximo = (event) => {
        this.setState({
           precoMaximo: event.target.value
        })
     }
     
    render (){


        return (
            <ContainerFiltro>
                <TituloFiltro>Filtre os produtos</TituloFiltro>
                <input></input>
                <input></input>
                <input></input>
                <button>Filtrar</button>
            </ContainerFiltro>
        )
    }
}