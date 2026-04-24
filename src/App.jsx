import React from 'react';
import Header from './components/Header';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const postData = {
    titulo: "Descobrindo as Praias do Nordeste",
    autor: "Felipe Alexandre Jagas",
    data: "06 de março de 2026",
    conteudo: [
      "O Nordeste brasileiro é famoso por suas praias paradisíacas, águas mornas e paisagens incríveis.",
      "Destinos como Jericoacoara, Porto de Galinhas e Maragogi são conhecidos por suas piscinas naturais."
    ],
    imagem: {
      src: "https://s2-g1.glbimg.com/uliu6Xk3zpGArxFhl8djfBpNbh4=/0x0:994x663/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/h/H/wkOmjmRLKpNbe4HQbwTg/jericoacoara-2a.jpg",
      alt: "Praia de Jericoacoara (CE)",
      legenda: "Vista de uma praia paradisíaca no Nordeste brasileiro."
    }
  };

  const linksRelacionados = [
    { texto: "Melhores praias do Nordeste", url: "https://www.melhoresdestinos.com.br/melhores-praias-do-nordeste.html" },
    { texto: "Guia de praias do Nordeste - Ponta Verde", url: "https://blog.hotelpontaverde.com.br/melhores-praias-do-nordeste/" },
    { texto: "Lista de praias do Nordeste - Hoteis.com", url: "https://www.hoteis.com/go/brasil/br-melhores-praias-do-nordeste" }
  ];

  return (
    <div className="container-layout">
      <Header title="Meu Blog de Viagens" />
      
      <main>
        <Article 
          titulo={postData.titulo}
          autor={postData.autor}
          data={postData.data}
          conteudo={postData.conteudo}
          imagem={postData.imagem}
        />
      </main>

      <Sidebar posts={linksRelacionados} />
      
      <Footer copyright="2026 - Todos os direitos reservados | Aula do Sandro" />
    </div>
  );
}

export default App;