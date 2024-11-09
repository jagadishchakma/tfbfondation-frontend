import { useEffect, useState } from "react";
import NewsBox from "../components/bodhidhara/NewsBox";
import NewsInputBox from "../components/bodhidhara/NewsInputBox";

const Bodhidhara = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/bodhidhara/news/');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.log(error)
      }
    }
    getNews();
  }, [])

  console.log(news);
  return (
    <>
      <NewsInputBox />
      {
        news && news.map((item, index) => <NewsBox news={item} key={index}/>)
      }
    </>
  );
};

export default Bodhidhara;