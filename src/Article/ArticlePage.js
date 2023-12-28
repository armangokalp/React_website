import React from "react";
import Header from '../blog/Header';
import Footer from '../blog/Footer';
import "./ArticlePage.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import customTheme from '../customTheme';
import Container from '@mui/material/Container';
import { sections } from '../sections';



// Example data for the article
const articleData = {
  title: "Article Title",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  // Add more article properties as needed
};


const ArticlePage = () => {
  return (
          <ThemeProvider theme={customTheme}>
            <Container maxWidth="lg">
            <div className="article-page">
            <Header title="Climate Security and Risks" sections={sections} />
      <main className="article-content">
        <h1 className="article-title">Title of the Article</h1>
        <p className="article-author">By Author Name</p>
        <div className="article-body">
          {/* Article content goes here */}
          <p>Article text...</p>
          {/* You can add images, videos, etc. */}
        </div>
      </main>
      <Footer />
    </div>
    </Container>
    </ThemeProvider>
  );
};

export default ArticlePage;
