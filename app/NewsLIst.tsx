import React from "react";
import Article from "./Article";

type Props = {
  news: NewsResponse;
};

const NewsLIst = ({ news }: Props) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {/* Article */}
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
};

export default NewsLIst;
