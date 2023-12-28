const articles = [
    {
        id: '0',
        title: "Navigating The Dilemmas of Climate Security",
        author: "Author for article 0",
        content: "Article content about navigating the dilemmas of climate security...",
        images: "../Images/image0.jpg",
    },
    {
        id: '1',
        title: "Climate Securitization Ethics: Balancing Risks and Rights",
        author: "Author for article 1",
        content: "Article content about climate Securitization...",
        images: "../Images/image1.jpg",
    },
    {
        id: '2',
        title: "Water Wars: Global Crisis Unveiled",
        author: "Author for article 2",
        content: "Article content about sustainable practices...",
        images: "../Images/image4.png",
    },
    // ... more articles
  ];
  

  export const getArticleById = (articleId) => {
    return articles.find(article => article.id === articleId);
  };
  
  export default articles;
  