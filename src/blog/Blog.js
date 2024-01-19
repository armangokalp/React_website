import CssBaseline from '@mui/material/CssBaseline';
import { /*createTheme*/ ThemeProvider } from '@mui/material/styles';
import Header from '../Header/Header';
import MainFeaturedPost from './MainFeaturedPost';
import customTheme from '../customTheme'
import Footer from '../Footer/Footer';
import image0 from '../Images/image0.jpg';
import "./Gallery.css"
import Gallery from './Gallery';
import './Blog.css'
import { useNavigate } from 'react-router-dom';
import "../Article/ArticlePage.css"
import { sabitLinkler } from './Linkler';




const mainFeaturedPost = {
  title: 'Navigating The Dilemmas of Climate Security',
  description:
    "Climate change manifests as a threat to three distinct referent objects, encapsulating anthropocentric, eco-centric, and state-centric perspectives.",
  image: image0,
  imageText: 'main image description',
  linkText: 'Continue reading…',
};


const dinamikLinkler = [
  {
    title: 'UNDP',
    explanation:
      "İklim güvenliği ve riskleri hakkında araştırma yapan UNDP'ye göz atın.",
    imageSrc: "https://partnership.who.int/images/librariesprovider14/default-album/undp_logo.tmb-1200v.png?Culture=en&sfvrsn=906a1236_2",
    link: "https://www.undp.org/",
  },
  {
    title: 'Water Wars: Global Crisis Unveiled',
    explanation:
      'The worlds escalating water crisis and the conflicts it fuels in this concise examination of a pressing global issue',
    imageSrc: "https://www.afro.who.int/sites/default/files/2023-05/SHUTTERSTOCK%20Credit%20-%20Vegetation%20contrast.jpg",
    link: "https://www.undp.org/",

  },
  {
    title: 'Water Wars:',
    explanation:
      'The worlds escalating water crisis and the conflicts it fuels in this concise examination of a pressing global issue',
    imageSrc: "https://www.afro.who.int/sites/default/files/2023-05/SHUTTERSTOCK%20Credit%20-%20Vegetation%20contrast.jpg",
    link: "https://www.undp.org/",

  },
  {
    title: 'Crisis Unveiled',
    explanation:
      'The worlds escalating water crisis and the conflicts it fuels in this concise examination of a pressing global issue',
    imageSrc: "https://www.afro.who.int/sites/default/files/2023-05/SHUTTERSTOCK%20Credit%20-%20Vegetation%20contrast.jpg",
    link: "https://www.undp.org/",

  },
];


export default function Blog() {

  const navigate = useNavigate();

  const handleRowClick = (path) => {
      navigate(path);
  };


  return (
    <ThemeProvider theme={customTheme}>
      <div>


      {/*<Container maxWidth="lg"> */}
      <div className='main-padding'>
            {/* <Header title="Climate Security and Risks" sections={sections} /> */}
            <Header/>
      <CssBaseline />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <div className='galleries-div'>
              <Gallery galleryData={sabitLinkler} seconds = {0}/>
              <Gallery galleryData={dinamikLinkler} seconds = {3}/>
          </div>
        <br/>
        <br/>

          <table class="climate-table">
            <thead>
                <tr>
                    <th>Climate Change Threats</th>
                    <th>Human Beings</th>
                    <th>State</th>
                    <th>Planet/Ecosystem</th>
                </tr>
            </thead>
            <tbody>
                <tr onClick={() => handleRowClick('/Conflict')}>
                    <td><a to="/Conflict" className="no-underline">Armed Conflict</a></td>
                    <td>Internal/international displacement, death of civilians, sufferings from armed conflict</td>
                    <td>Geopolitical tensions over resources, armed conflict</td>
                    <td>Further Ecosystem disruptions due to armed conflict</td>
                </tr>
                <tr onClick={() => handleRowClick('/Migration')}>
                    <td><a to="/Migration" className="no-underline">Climate Induced Migration</a></td>
                    <td>Sufferings of people who migrate, cultural disruptions</td>
                    <td>Managing displaced populations, cultural impacts/societal security, border security</td>
                    <td>Ecosystem shifts and disruptions based on population moves</td>
                </tr>
                <tr onClick={() => handleRowClick('/Food')}>
                    <td>Food Security</td>
                    <td>Hunger, malnutrition</td>
                    <td>Ensuring food supplies, addressing shortages, economic security</td>
                    <td>Changes in crop patterns, impact on biodiversity</td>
                </tr>
                <tr onClick={() => handleRowClick('/Water')}>
                    <td>Water Security</td>
                    <td>Water scarcity, lack of access to clean water, challenges related to sanitation and sanitary issues</td>
                    <td>Geopolitical tensions over freshwater resources - water wars</td>
                    <td>Impact on aquatic ecosystems</td>
                </tr>
                <tr onClick={() => handleRowClick('/Extreme')}>
                    <td>Extreme Climate Events</td>
                    <td>Loss of lives, loss of goods</td>
                    <td>Disaster management, infrastructure damage</td>
                    <td>Ecosystem transformations, habitat loss</td>
                </tr>
                <tr onClick={() => handleRowClick('/Economic')}>
                    <td>Threats to Economy</td>
                    <td>Increased poverty, economic instability</td>
                    <td>Economic planning, managing supply chain disruptions</td>
                    <td></td>
                </tr>
                <tr onClick={() => handleRowClick('/Water')}>
                    <td>Desertification</td>
                    <td>Displacement, loss of arable land, livelihoods</td>
                    <td>Implementing land management, combating desertification</td>
                    <td>Ecosystem changes, loss of productive land</td>
                </tr>
            </tbody>
          </table>
        </main>
        <br/>
        <br/>
        <br/>
      <Footer/>

      </div>
      </div>
      
    </ThemeProvider>
  );
}
