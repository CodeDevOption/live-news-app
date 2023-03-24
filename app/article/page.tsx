import { notFound } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";

type Props = {
  searchParams?: Article;
};

const page = ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }
  if (searchParams?.image === "null") {
    searchParams.image = null;
  }
  const article: Article = searchParams;
  return (
    <article className="pt-5">
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {" "}
        {article.image && (
          <>
            <img
              src={article?.image}
              alt={article?.title}
              className="h-56 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-t-lg shadow-md"
            />
          </>
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold pl-4">
              By: {article.author !== "null" ? article.author : "Unknown"}
            </h2>
            <h2 className="font-bold pl-4">Source: {article.source}</h2>
            <p className="pl-4">{article.published_at}</p>
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default page;
