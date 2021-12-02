import React from "react";
import image1 from "../img/tribore-action-figure.jpg"
import image2 from "../img/gary-mooncake-actionfigure.jpg"
import image3 from "../img/avocato-action-figure.jpg"
import image4 from "../img/hue-action-figure.jpg"
import image5 from "../img/mooncake-pelucia.jpg"
import image6 from "../img/kvn-pelucia.jpg"

export default class ProdutosLojinha extends React.Component {
    state = {
        listaDeProdutos: [
            {
                id: 1,
                name: "Action Figure - Tribore",
                value: 75.0,
                imageUrl: image1
            },
            {
                id: 2,
                name: "Action Figure - Gary Goodspeed + Mooncake",
                value: 100.0,
                imageUrl: image2
            },
            {
                id: 3,
                name: "Action Figure - Avocato",
                value: 75.0,
                imageUrl: image3
            },
            {
                id: 4,
                name: "Action Figure - HUE",
                value: 50.0,
                imageUrl: image4
            },
            {
                id: 5,
                name: "Mooncake de Pelúcia",
                value: 50.0,
                imageUrl: image5 
            },
            {
                id: 6,
                name: "KVN de Pelúcia",
                value: 50.0,
                imageUrl: image6
            }
        ],
        
        query: "",
        precoMinimo: "",
        precoMaximo: "",
        sortingParameter: "title",
        order: 1
    };


    atualizaQuery = (event) => {
        this.setState({
           query: event.target.value
        })
     }
  
     atualizaPrecoMinimo = (event) => {
        this.setState({
           precoMinimo: event.target.value
        })
     }
  
     atualizaPrecoMaxima = (event) => {
        this.setState({
           precoMaximo: event.target.value
        })
     }
  
     atualizaSortingParameter = (event) => {
        this.setState({
           sortingParameter: event.target.value
        })
     }
  
     atualizaOrder = (event) => {
        this.setState({
           order: event.target.value
        })
     }


    render () {
        return(
            <div>
                <div
                    query={this.state.query}
                    updateQuery={this.updateQuery}
                    atualizaPrecoMinimo={this.atualizaPrecoMinimo}
                    atualizaPrecoMaxima={this.atualizaPrecoMaxima}
                    atualizaSortingParameter={this.atualizaSortingParameter}
                    atualizaOrder={this.atualizaOrder}
                    precoMinimo={this.state.precoMinimo}
                    precoMaximo={this.state.precoMaximo}
                    sortingParameter={this.state.sortingParameter}
                    order={this.state.order}
                />
                <div>
                    {this.state.listaDeProdutos.filter(produto => {
                        return produto.name.toLowerCase().includes(this.state.query.toLowerCase()) ||
                            produto.description.toLowerCase().includes(this.state.query.toLowerCase())
                    })
                    .filter(produto => {
                        return this.state.precoMinimo === "" || produto.value >= this.state.precoMinimo
                    })
                    .filter(produto => {
                        return this.state.precoMaximo === "" || produto.value <= this.state.precoMaximo
                    })
                    .sort((produtoAtual, proximoProduto) => {
                        switch (this.state.sortingParameter) {
                            case "title":
                                return this.state.order * produtoAtual.name.localeCompare(proximoProduto.name)
                            case "dueDate":
                                return this.state.order * (new Date(produtoAtual.dueDate).getTime() - new Date(proximoProduto.dueDate).getTime())
                            default:
                                return this.state.order * (produtoAtual.value - proximoProduto.value)
                        }
                    })
                    .map(produto => {
                        return <div key={produto.id} produto={produto} />
                    })}
                </div>
                {/* <div>
                    <this.Produtos></this.Produtos>
                </div> */}
            </div>
        )
    }
}