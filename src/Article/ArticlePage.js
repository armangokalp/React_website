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
  {
    title: 'Featured Post 3',
    date: 'Date',
    description:
      'Description 3',
    image: 'path_to_image1',
    imageLabel: 'Image 3',
  },
  {
    title: 'Featured Post 4',
    date: 'Date',
    description:
      'Description 4',
    image: 'path_to_image2',
    imageLabel: 'Image 4',
  },
  
];

const ArticlePage = () => {

  const { id } = useParams();
  const articleId = String(id);
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }


  return (
    <ThemeProvider theme={customTheme}>
      <Header title="Climate Security and Risks" sections={sections} />
      <div className="article-padding">
      <div className="back-color">

        <div className="article-page">
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
          <Grid container spacing={2} sx={{ mt: 3 }}>
              {featuredPosts.map((post, id) => (
                  <FeaturedPost post={post} />
              ))}
            </Grid>          
            <Footer
              title="Climate Security and Risks"
              description="Arman Gökalp - Ali Vehbi Güneysu"
            />
        </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ArticlePage;
