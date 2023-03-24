import NewsLIst from "@/app/NewsLIst";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import React from "react";

type Props = {
  params: { category: Category };
};

const Category = async ({ params: { category } }: Props) => {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsLIst news={news} />
    </div>
  );
};

export const generateStaticParams = async () => {
  return categories.map((item) => ({ category: item }));
};

export default Category;
