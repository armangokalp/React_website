// import React from "react";
// import { Grid } from '@mui/material';
// import FeaturedPost from '../blog/FeaturedPost';
// import Header from '../blog/Header';
// import Footer from '../blog/Footer';
// import "./ArticlePage.css";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import customTheme from '../customTheme';
// import Container from '@mui/material/Container';
// import { sections } from '../sections';
// import { useParams } from 'react-router-dom';
// import image1 from '../Images/image1.jpg';

// const articles = [
//   {
//       id: '0',
//       title: "Navigating The Dilemmas of Climate Security",
//       author: "Author for article 0",
//       content: "Article content about navigating the dilemmas of climate security...",
//       content2: "",
//       images: "../Images/image0.jpg",
//   },
//   {
//       id: '1',
//       title: "Climate Securitization Ethics: Balancing Risks and Rights",
//       author: "Author for article 1",
//       content: "In the face of the growing climate crisis, the securitization of climate-related issues has become a pressing concern. While the concept of climate security aims to address the risks associated with climate change, it also raises important ethical questions. Balancing the imperative to protect against climate threats with the preservation of individual rights and freedoms is a complex challenge.",
//       content2: "The ethical dimensions of climate securitization require a delicate equilibrium. On one hand, it's crucial to recognize the urgency of climate risks and the need for collective action to safeguard our planet. On the other hand, it's equally vital to ensure that the securitization process respects human rights, avoids undue militarization, and remains accountable. Striking this balance is essential for the development of effective and ethically sound climate security strategies.",
//       images: image1,
//   },
//   {
//       id: '2',
//       title: "Water Wars: Global Crisis Unveiled",
//       author: "Author for article 2",
//       content: "Article content about sustainable practices...",
//       content2: "",
//       images: "../Images/image4.png",
//   },
//   // ... more articles
// ];


// const featuredPosts = [
//   {
//     title: 'Featured Post 1',
//     date: 'Date',
//     description:
//       'Description 1',
//     image: 'path_to_image1',
//     imageLabel: 'Image 1',
//   },
//   {
//     title: 'Featured Post 2',
//     date: 'Date',
//     description:
//       'Description 2',
//     image: 'path_to_image2',
//     imageLabel: 'Image 2',
//   },
//   {
//     title: 'Featured Post 3',
//     date: 'Date',
//     description:
//       'Description 3',
//     image: 'path_to_image1',
//     imageLabel: 'Image 3',
//   },
//   {
//     title: 'Featured Post 4',
//     date: 'Date',
//     description:
//       'Description 4',
//     image: 'path_to_image2',
//     imageLabel: 'Image 4',
//   },
  
// ];

// const ArticlePage = () => {

//   const { id } = useParams();
//   const articleId = String(id);
//   const article = articles.find(a => a.id === articleId);

//   if (!article) {
//     return <div>Article not found</div>;
//   }


//   return (
//     <ThemeProvider theme={customTheme}>
//       <Header title="Climate Security and Risks" sections={sections} />
//       <div className="article-padding">
//       <div className="back-color">

//         <div className="article-page">
//           <main className="article-content">
//             <h1 className="article-title">{article.title}</h1>
//             <p className="article-author">By {article.author}</p>
//             <div className="article-body">
//               <p>{article.content}</p>
//             </div>
//             <img src={article.images} alt="description_here"/>
//             <div className="article-body">
//               <p>{article.content}</p>
//             </div>
//             </main>
//           <Grid container spacing={2} sx={{ mt: 3 }}>
//               {featuredPosts.map((post, id) => (
//                   <FeaturedPost post={post} />
//               ))}
//             </Grid>          
//             <Footer
//               title="Climate Security and Risks"
//               description="Arman Gökalp - Ali Vehbi Güneysu"
//             />
//         </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default ArticlePage;
