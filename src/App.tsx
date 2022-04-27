import React, { useEffect, useState } from "react";
import "./App.css";
import { Article, RootObject } from "./news.interface";
import Cards from "./components/Card";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [arrayData, setArrayData] = useState<Article[]>([]);

  const getData = async () =>
    axios
      .get<RootObject>(
        `https://newsapi.org/v2/top-headlines?country=it&category=general&apiKey=b107b4e62552467291711323bc5b4f42`
      )
      .then((response) => {
        const { articles } = response.data;
        setArrayData(articles);
      });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Navbar />
    <div className="row justify-content-around align-items-center">
      {arrayData.map((item) => (
        <Cards item={item} />
      ))}
    </div>
    </>
  );
}

export default App;
