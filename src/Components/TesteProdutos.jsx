import React from "react";
import image1 from "../img/tribore-action-figure.jpg";
import image2 from "../img/gary-mooncake-actionfigure.jpg";
import image3 from "../img/avocato-action-figure.jpg";
import image4 from "../img/hue-action-figure.jpg";
import image5 from "../img/mooncake-pelucia.jpg";
import image6 from "../img/kvn-pelucia.jpg";
import styled from 'styled-components';


const ContainerProdutos = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: #c1cdcd;
    width: 100%;
    
`
const CardProdutos = styled.div`
    border: 1px solid;
    text-align: center;
    justify-content: center;
    width: 85%;
    height: 350px;
    margin: 15px;
    padding: 10px;

    &:hover {
    box-shadow: 0px 0px 15px #838b8b;
    }
`

const ImagemProdutos = styled.img`
    max-height: 200px;
`

const Produtos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  
`


export default class WraperProdutos extends React.Component {
    state = {
        listaDeProdutos: [
            {
                id: 1,
                name: "Action Figure - Tribore",
                price: 75.0,
                image: image1
            },
            {
                id: 2,
                name: "Action Figure - Gary Goodspeed + Mooncake",
                price: 100.0,
                image: image2
            },
            {
                id: 3,
                name: "Action Figure - Avocato",
                price: 75.0,
                image: image3
            },
            {
                id: 4,
                name: "Action Figure - HUE",
                price: 50.0,
                image: image4
            },
            {
                id: 5,
                name: "Mooncake de Pelúcia",
                price: 50.0,
                image: image5
            },
            {
                id: 6,
                name: "KVN de Pelúcia",
                price: 50.0,
                image: image6
            }
        ]
    }
    render(){

        const produtos = this.state.listaDeProdutos.map((produto) => {
            return <CardProdutos>
                <ImagemProdutos key={produto.id} src={produto.image} width={200} />
                <p key={produto.id}>{produto.name}</p>
                <p key={produto.id}>R$ {produto.price},00</p>
                <button onClick>Adicionar ao Carrinho</button>
            </CardProdutos>
        })

        return (
            <ContainerProdutos>
                <Produtos> {produtos} </Produtos>
            </ContainerProdutos>
        )
    }
}
