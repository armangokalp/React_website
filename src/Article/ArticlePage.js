import React from "react";
import { Grid } from '@mui/material';
import FeaturedPost from '../blog/FeaturedPost';
import Header from '../blog/Header';
import Footer from '../blog/Footer';
import "./ArticlePage.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import customTheme from '../customTheme';
import Container from '@mui/material/Container';
import { sections } from '../sections';
import { useParams } from 'react-router-dom';

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


const featuredPosts = [
  {
    title: 'Featured Post 1',
    date: 'Date',
    description:
      'Description 1',
    image: 'path_to_image1',
    imageLabel: 'Image 1',
  },
  {
    title: 'Featured Post 2',
    date: 'Date',
    description:
      'Description 2',
    image: 'path_to_image2',
    imageLabel: 'Image 2',
  },
];

const ArticlePage = () => {

  const { articleId } = useParams();
  const article = articles[1];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="lg">
        <div className="article-page">
          <Header title="Climate Security and Risks" sections={sections} />
          <main className="article-content">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-author">By {article.author}</p>
            <div className="article-body">
              <p>{article.content}</p>
            </div>
            <img src={article.image} alt="description_here" />
            <div className="article-body">
              <p>{article.content}</p>
            </div>
            </main>
            <Grid container spacing={4}>
              {featuredPosts.map((post, id) => (
                <Grid item xs={12} md={6} key={post.title}>
                  <FeaturedPost post={post} />
                </Grid>
              ))}
            </Grid>          
          <Footer />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default ArticlePage;
