import React, { useState, useEffect } from 'react';
import './Water.css'; // You can create this file for your styles
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header/Header';
import customTheme from '../customTheme'

import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../Footer/Footer';
import { sections } from '../sections';
import { useScrollToTop } from '../blog/useScrollToTop';

const defaultTheme = createTheme();


const Water = () => {

  useScrollToTop();

  const [scrollingDown1, setScrollingDown1] = useState(false);
  const [scrollingDown2, setScrollingDown2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate scroll position as a percentage
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 40 && scrollPercentage < 95) {
        // Apply styles when the scroll position exceeds 25%
        setScrollingDown1(true);
      } 
      else if (scrollPercentage > 95) {
        // Apply styles when the scroll position exceeds 70%
        setScrollingDown2(true);
      } else {
        // Reset styles when below the specified percentages
        setScrollingDown1(false);
        setScrollingDown2(false);
      }
    };

    // Add event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <div className="main-padding">
        <Header activeSection={2}/>
            

            <main>
                <div className="water-header-div">
                            <h1 className="water-header-text">
                            Su Güvenliği
                            </h1>
                </div>
                <div className='extreme-divider'/>
        
                <div className='water-general-div'>
                    <p className="water-explain-p">
                    Su güvensizliği, milyonlarca insanın hayatına dokunan bir küresel sorun olarak karşımıza çıkıyor. Bu sorun, su kıtlığından temiz içme suyuna erişim eksikliğine kadar bir dizi sorunu içerir. Dünya'nın birçok yerinde, topluluklar günlük olarak güvenli ve güvenilir su kaynakları bulma mücadelesi vermektedir. Bu kriz, sadece bireylerin refahını etkilemekle kalmaz, aynı zamanda bölge genelinde tehdit oluşturarak sınırlı su kaynakları üzerindeki çatışmaları tetikler.                    </p>
                </div>
                
                <div className='extreme-general-div'>
                    <div className='glass-continue'/>
                    <div className={`glass ${scrollingDown1 ? 'scrolling-down' : ''}`}>
                    </div>
                    <h1 className='glass-h1'>{scrollingDown1 ? 'Okumaya başlayarak suyun yarısını doldurdun!' : 'Boş bir bardak'}</h1>
                    <p className='glass-p'>Okumaya devam ederek su kaynaklarını koru!</p>    
                </div>

                <div className='water-general-div'>
                    <p className="water-explain-p">
                    Su güvensizliğinin en ürkütücü yönlerinden biri, hijyen ve kamu sağlığı üzerindeki etkisidir. Temiz suya yetersiz erişimin olduğu bölgelerde, sıklıkla su kaynaklarının kirlenmesi sonucu su kaynaklı hastalıkların yayılması yaşanır. Kirli su kaynakları, kolera ve dizanteri gibi hastalıkların yayılmasına neden olur ve bu durum özellikle çocuklar ve yaşlılar gibi savunmasız nüfusu olumsuz etkiler.                    </p>
                </div>
                <div className='extreme-general-div'>
                 <img className='water-centered-img' src = "https://i.natgeofe.com/n/fcc3a9af-2d50-4bbf-8925-72e047a874ed/desertification-01_2x1.jpg"/>
                </div>

                <div className='water-general-div'>
                    <p className="water-explain-p">
                    Su güvensizliği, sadece yerel bir sorun değildir; aynı zamanda jeopolitik gerilimler ve çatışmalara yol açma potansiyeline sahiptir. Tatlı su kaynakları daha da azalırken, ülkeler kendilerini "su savaşları" içinde bulabilirler. Bu, hayatta kalma meselesi olmanın ötesinde, hem insanların acı çekmesi hem de uluslararası ilişkiler açısından uzun vadeli sonuçlara yol açabilir. Su güvensizliğiyle başa çıkmak, sadece hayatta kalmak değil, aynı zamanda küresel istikrar ve sürdürülebilirlik için temel bir adımdır.                    </p>
                </div>
                <br/>
                <div className='extreme-general-div'>
                    <div className={`glass-continue ${scrollingDown2 ? 'scrolling-down' : ''}`}/>
                    <div className= "glass scrolling-down" >
                    </div>
                    <h1 className='glass-h1'>{scrollingDown2 ? 'Senin sayende artık tamamen dolu!' : 'Yarısı dolu bir bardak'}</h1>
                    <p className='glass-p'>Okumaya devam ederek su kaynaklarını koru!</p>    
                </div>



            </main>
        <Footer/>

        </div>

    </ThemeProvider>
  );
};

export default Water;
