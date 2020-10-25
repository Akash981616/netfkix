import React from "react";
import Navlogo from "./Navlogo";
import "./App.css";
import requests from "./Request";
import Banner from "./Banner";
import Row from "./Row";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navlogo></Navlogo>
      <Banner />
      <Row
        tittle="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow isLargeTittle
      />
      <Row tittle="TredingNow" fetchUrl={requests.fetchTrending} />
      <Row tittle="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row tittle="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row tittle="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row tittle="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row tittle="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row tittle="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
