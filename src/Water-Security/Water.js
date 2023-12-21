import React, { useState, useEffect } from 'react';
import './Water.css'; // You can create this file for your styles
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../blog/Header';
import customTheme from '../customTheme'

import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../blog/Footer';
import { sections } from '../sections';
const defaultTheme = createTheme();


const Water = () => {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is scrolling down
      const isScrollingDown = window.scrollY > 800;

      // Update the state accordingly
      setScrollingDown(isScrollingDown);
    };

    // Add event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once during component mount

  return (
    <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <div>
            <Header title="Climate Security and Risks" sections={sections} />

            <main>
                <div className="water-header-div">
                            <h1 className="water-header-text">
                            Su Güvencesizliği
                            </h1>
                </div>
                <div className='extreme-divider'/>
        
                <div className='water-general-div'>
                    <p className="water-explain-p">
                    Su güvensizliği, milyonlarca insanın hayatına dokunan bir küresel sorun olarak karşımıza çıkıyor. Bu sorun, su kıtlığından temiz içme suyuna erişim eksikliğine kadar bir dizi sorunu içerir. Dünya'nın birçok yerinde, topluluklar günlük olarak güvenli ve güvenilir su kaynakları bulma mücadelesi vermektedir. Bu kriz, sadece bireylerin refahını etkilemekle kalmaz, aynı zamanda bölge genelinde tehdit oluşturarak sınırlı su kaynakları üzerindeki çatışmaları tetikler.                    </p>
                </div>
                
                <div className='extreme-general-div'>
                    <div className='glass-continue'/>
                    <div className={`app ${scrollingDown ? 'scrolling-down' : ''}`}>
                    </div>
                    <h1 className='glass-h1'>{scrollingDown ? 'Senin sayende artık dolu!' : 'Boş bir bardak'}</h1>
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
                <br/>
                <br/>
                <div className='extreme-divider'/>


            </main>
        </div>
        <Footer
        title="Climate Security and Risks"
        description="Arman Gökalp - Ali Vehbi Güneysu"
        />
    </ThemeProvider>
  );
};

export default Water;
