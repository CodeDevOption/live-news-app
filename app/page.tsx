import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import React from "react";
import NewsLIst from "./NewsLIst";

type Props = {};

async function HomePage({}: Props) {
  // retch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  // console.log(news);
  return (
    <div>
      {/* NewsList news */}
      <NewsLIst news={news} />
    </div>
  );
}

export default HomePage;
