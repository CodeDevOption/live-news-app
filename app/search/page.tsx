import fetchNews from "@/lib/fetchNews";
import React from "react";
import NewsLIst from "../NewsLIst";

type Props = {
  searchParams?: { term: string };
};

const Page = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Search Results for ${searchParams?.term}</h1>
      <NewsLIst news={news} />
    </div>
  );
};

export default Page;
