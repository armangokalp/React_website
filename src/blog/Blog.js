import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import customTheme from '../customTheme'
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {post1,post2,post3} from "./blog-posts";
import image0 from '../Images/image0.jpg';
import image1 from '../Images/image1.jpg';
import { sections } from '../sections';
//import image2 from '../Images/image2.jpg';
import image4 from '../Images/image4.png';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom';
import { getArticleById } from '../Article/ArticlesData';
import "./Gallery.css"
import Gallery from './Gallery';




const mainFeaturedPost = {
  title: 'Navigating The Dilemmas of Climate Security',
  description:
    "Climate change manifests as a threat to three distinct referent objects, encapsulating anthropocentric, eco-centric, and state-centric perspectives.",
  image: image0,
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const galleryData = [
  {
    title: 'Climate Securitization Ethics: Balancing Risks and Rights',
    explanation:
      'A provocative look at the ethical crossroads of safeguarding our planet while protecting individual freedoms.',
    imageSrc: "https://www.afro.who.int/sites/default/files/2023-05/SHUTTERSTOCK%20Credit%20-%20Vegetation%20contrast.jpg",
  },
  {
    title: 'Water Wars: Global Crisis Unveiled',
    explanation:
      'The worlds escalating water crisis and the conflicts it fuels in this concise examination of a pressing global issue',
    imageSrc: "https://www.afro.who.int/sites/default/files/2023-05/SHUTTERSTOCK%20Credit%20-%20Vegetation%20contrast.jpg",
  },
  {
    title: 'Water Wars:',
    explanation:
      'The worlds escalating water crisis and the conflicts it fuels in this concise examination of a pressing global issue',
    imageSrc: "https://www.afro.who.int/sites/default/files/2023-05/SHUTTERSTOCK%20Credit%20-%20Vegetation%20contrast.jpg",
  },
  {
    title: 'Crisis Unveiled',
    explanation:
      'The worlds escalating water crisis and the conflicts it fuels in this concise examination of a pressing global issue',
    imageSrc: "https://www.afro.who.int/sites/default/files/2023-05/SHUTTERSTOCK%20Credit%20-%20Vegetation%20contrast.jpg",
  },
];

const posts = [post1, post2, post3];
console.log(posts)

const sidebar = {
  title: 'About',
  description:
    'This website delves into the complexities and dilemmas surrounding the climate security, a phenomenon that has transformed from a future concern to an immediate global challenge.',
  Articles: [
    { title: 'Climate Security Challenges', url: '/Article/3' },
    { title: 'Nation-States and Climate Change', url: '/Article/4' },
    { title: 'Ecosystems in Peril: Climate Impact', url: '/Article/5' },
    { title: 'Human Security and Climate Crisis', url: '/Article/6' },
    { title: 'Water Wars: Scarce Resources', url: '/Article/7' },
    { title: 'Food Security Amidst Climate Change', url: '/Article/8' },
    { title: 'Migration Crisis: Climates Role', url: '/Article/9' },
    { title: 'Economic Instability and Climate', url: '/Article/10' },
    { title: 'Health Risks in Changing Climates', url: '/Article/11' },
    { title: 'Ethical Climate Security Solutions', url: '/Article/12' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

{/*const defaultTheme = createTheme();*/}

export default function Blog() {

  return (
    <ThemeProvider theme={customTheme}>
      <div>
      <Header title="Climate Security and Risks" sections={sections} />
      <CssBaseline />

      {/*<Container maxWidth="lg"> */}
      <div className='main-padding'>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <div className='galleries-div'>
              <Gallery galleryData={galleryData} seconds = {5}/>
              <Gallery galleryData={galleryData} seconds = {3}/>
          </div>
          
          <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main title="More about Climate Security" posts= {posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              Articles={sidebar.Articles}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </div>
      {/*</Container> */}
      </div>
      <Footer
        title="Climate Security and Risks"
        description="Arman Gökalp - Ali Vehbi Güneysu"
      />
    </ThemeProvider>
  );
}
