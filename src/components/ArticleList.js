import React from "react";

function ArticleList({ articles }) {
    return (
      <main>
        {articles.map((article) => (
          <article key={article.id} {...article} />
        ))}
      </main>
    );
  }
  export default ArticleList;