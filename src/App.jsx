import "./App.css";
import Dashboard from "./Components/Dropdown";
import Navigation from "./Navigation/MainStack"; // ✅ Single source of routes
import { BrowserRouter } from "react-router-dom";
import Nav from "./navigation/Nav";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Browse from "./page/Browse";
import Flash from "./page/Flash";
import Category from "./Components/Category";
import Info from "./page/Info";
import Hero from "./Components/Hero";
import Popular from "./Components/Popular";

function App() {
  const Main = true;

  return (
    <BrowserRouter>
      {Main ? (
        <>
          <Header />
          <Nav />
          <Hero />
          <Category />
          <Browse />
          <Flash />
          
        
          <Navigation />

          <Popular />
          <Info />
          <Footer />
        </>
      ) : (
        <Dashboard />
      )}
    </BrowserRouter>
  );
}

export default App;
