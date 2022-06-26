import React, { useEffect, useState } from "react";
import { BrowserRouter, useLocation, useParams } from "react-router-dom";
import fetchAPI from "./api";
import Nav from "./components/nav";
import Pagination from "./components/pagination";

function App() {
  const [stories, setStories] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/").find((p) => p.length > 0) || "news";

  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page") || "1";  

  console.log({ location, queryParams });

  useEffect(() => {
    async function getData(type: string, page: string) {
      const data = await fetchAPI(type, page);
      setStories(data);
    }
    getData(path, page);
  }, [path, page]);


  return (
    <>
      <Nav />
      <Pagination page={parseInt(page)} stories={stories} type={path} />
    </>
  );
}

export default App;
