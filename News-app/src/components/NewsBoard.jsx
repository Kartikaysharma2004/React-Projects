import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "5364dcfea1394d109b752e96abf3fd29";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles.filter(article => article.title && article.description && article.urlToImage));
        } else {
          throw new Error('No articles found');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();
  }, [category]); // Re-fetch news when category changes

  return (
    <>
       <div className="mt-3">
  <h1 className="text-center fw-medium fs-3 d-flex align-items-center justify-content-center">
    Latest <span className="badge bg-danger fw-medium ms-2">News</span>
  </h1>
</div>

      {error ? (
        <div className="text-center text-danger">Error: {error}</div>
      ) : (
        <div className="news-grid">
          {articles.length > 0 ? (
            articles.map((news, index) => (
              <NewsItems
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            ))
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
      )}
    </>
  );
};

export default NewsBoard;
