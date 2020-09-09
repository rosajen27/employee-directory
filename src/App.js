import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <Card 
      name="Michael Scott" 
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1V0Ei9ijyx_UvXlim104fAHaHa%26pid%3DApi&f=1" 
      position="Regional Manager"
      location="Scranton, PA"
      phonenumber="(123) 123-4567" 
      email="mscott@email.com"

      />
      <Footer />
    </div>
  );
}

export default App;
