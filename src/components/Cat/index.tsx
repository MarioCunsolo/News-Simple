import React, { useEffect, useState } from "react";
import { Article, RootObject } from "../../news.interface";
import Cards from "../Card";
import axios from "axios";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Navbar from "../Navbar";

 interface ParamTypes {
  cat : string;
} 

function Cat() {
  
  const [arrayData, setArrayData] = useState<Article[]>([]);
  const { cat } = useParams<ParamTypes>()

  const getData = async () =>
    axios
      .get<RootObject>(
        `https://newsapi.org/v2/top-headlines?country=it&category=${cat}&apiKey=b107b4e62552467291711323bc5b4f42`
      )
      .then((response) => {
        const { articles } = response.data;
        setArrayData(articles);
      });

  useEffect(() => {
    getData();
  }, [cat]);

  return (
    <>
    <Navbar/>
      <div className="row justify-content-around align-items-center">
        {arrayData.map((item) => (
          <Cards item={item} />
        ))}
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/technology"></Route>
          <Route path="/business"></Route>
          <Route path="/sports"></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Cat;
