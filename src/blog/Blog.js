import * as React from 'react';
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
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import image0 from '../Images/image0.jpg';
import image1 from '../Images/image1.jpg';
//import image2 from '../Images/image2.jpg';
import image4 from '../Images/image4.png';



const sections = [
  { title: 'Extreme Climate Events', url: '/Extreme' },
  { title: 'Food Insecurity', url: '#' },
  { title: 'Water Insecurity', url: '#' },
  { title: 'Economic Insecurity', url: '#' },
  { title: 'Desertification', url: '#' },
  { title: 'Climate Induced Migration', url: '#' },
  { title: 'Armed Conflict', url: '#' },
];

const mainFeaturedPost = {
  title: 'Navigating The Dilemmas of Climate Security',
  description:
    "Climate change manifests as a threat to three distinct referent objects, encapsulating anthropocentric, eco-centric, and state-centric perspectives.",
  image: image0,
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Climate Securitization Ethics: Balancing Risks and Rights',
    date: 'Nov 12',
    description:
      'A provocative look at the ethical crossroads of safeguarding our planet while protecting individual freedoms.',
    image: image1,
    imageLabel: 'Image Text',
  },
  {
    title: 'Water Wars: Global Crisis Unveiled',
    date: 'Nov 11',
    description:
      'The worlds escalating water crisis and the conflicts it fuels in this concise examination of a pressing global issue',
    image: image4,
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'This website delves into the complexities and dilemmas surrounding the climate security, a phenomenon that has transformed from a future concern to an immediate global challenge.',
  Articles: [
    { title: 'Climate Security Challenges', url: '#' },
    { title: 'Nation-States and Climate Change', url: '#' },
    { title: 'Ecosystems in Peril: Climate Impact', url: '#' },
    { title: 'Human Security and Climate Crisis', url: '#' },
    { title: 'Water Wars: Scarce Resources', url: '#' },
    { title: 'Food Security Amidst Climate Change', url: '#' },
    { title: 'Migration Crisis: Climates Role', url: '#' },
    { title: 'Economic Instability and Climate', url: '#' },
    { title: 'Health Risks in Changing Climates', url: '#' },
    { title: 'Ethical Climate Security Solutions', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Climate Security and Risks" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="What is Climate Security" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              Articles={sidebar.Articles}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Climate Security and Risks"
        description="Arman Gökalp - Ali Vehbi Güneysu"
      />
    </ThemeProvider>
  );
}
