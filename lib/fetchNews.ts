import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // Fetch function with Next.js 13 caching...
  const res = await fetch(
    "https://steinfurt.stepzen.net/api/gangly-chicken/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: { revalidate: isDynamic ? 0 : 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDEASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  // console.log("LOADING NEW DATA FROM API fro category >>>", category, keywords);

  const newsResponse = await res.json();

  // Sort function by images vs not images  present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  // return res
  return news;
};

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=2a48c44b1a192dc100d2a5a35533b2fb"

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=2a48c44b1a192dc100d2a5a35533b2fb&countries=US%Cgb&limit=100&offset=0&sort=published_desc"
