import React from 'react';
import Logo from './Components/Logo.jsx';
import styled from 'styled-components';
import LogoCarrinho from './Components/LogoCarrinho.jsx';
import WraperProdutos from './Components/TesteProdutos.jsx';
import FiltroProdutos from './Components/Filtro.jsx';


const CabecalhoWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  justify-content: space-around; 
  align-items: baseline;
`

const HomeWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`
const FooterWrap = styled.div`

`

function App() {
  return (
    <div className="App">
      <CabecalhoWrap>
        <Logo />
        <LogoCarrinho />
      </CabecalhoWrap>
      <HomeWrap>
        <FiltroProdutos />
        <WraperProdutos />

      </HomeWrap>    
      <FooterWrap>
      </FooterWrap>

    </div>
  );
}

export default App;
