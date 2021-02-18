import Container from './component/content/container';
import Header from './component/header_menu/header';
import Menu from './component/header_menu/menu';
import './css/style_header_menu.css';
import './css/style_content_main.css';
import './css/style_contebt_tintuc.css';
import Footer from './component/footer/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <main>
      <Header />
      <Menu />
      <Container />
      <Footer />
    </main>
  );
}

export default App;
