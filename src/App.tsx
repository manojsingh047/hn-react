import React, { useEffect, useState } from "react";
import { BrowserRouter, useLocation, useParams } from "react-router-dom";
import fetchAPI from "./api";
import Nav from "./components/nav";
import Pagination from "./components/pagination";

function App() {
  const [stories, setStories] = useState([]);
  const location = useLocation();

  console.log({location});
  
  useEffect(() => {
    async function getData(type: string) {
      const data = await fetchAPI(type);
      setStories(data);
    }
    getData(location.pathname.split('/').find(p => p.length > 0) || 'news');
  }, [location]);

  return (
    <>
      <Nav />
      <Pagination page={1} stories={stories} type={"new"} />
    </>
  );
}

export default App;
