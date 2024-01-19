import React, { useState, useEffect } from 'react';
import './Water.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header/Header';
import customTheme from '../customTheme'

import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../Footer/Footer';
import { useScrollToTop } from '../blog/useScrollToTop';

const defaultTheme = createTheme();


const Water = () => {

  useScrollToTop();

  const [openImage, setOpenImage] = useState(null);
  const [imageScale, setImageScale] = useState(1);

  const handleImageClick = (image) => {
      setOpenImage(image);
      setImageScale(1.7);
  };

  const handleCloseModal = () => {
      setOpenImage(null);
      setImageScale(1);
  };

  const [scrollingDown1, setScrollingDown1] = useState(false);
  const [scrollingDown2, setScrollingDown2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 35 && scrollPercentage < 95) {
        setScrollingDown1(true);
      } 
      else if (scrollPercentage > 95) {
        setScrollingDown2(true);
      } else {
        setScrollingDown1(false);
        setScrollingDown2(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

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
                <div className='water-divider'/>
        
                <div className='water-general-div'>
                    <p className="water-explain-p">
                    Küresel iklim değişikliği buzulların erimesi, kar erime düzeninin değişmesi ve yağış düzenindeki değişiklikler gibi etkileriyle hidrolojik sistemleri çeşitli risklerle karşı karşıya bırakır. Tutulan su miktarı ve su kalitesini olumsuz etkiler. Su, iklim değişikliğinin etkilerini tarım, enerji ve ulaştırma sektörlerindeki etkileriyle topluma doğrudan yansıtan bir aracıdır. Kuraklık su arzı ve kalitesini etkilerken seller can ve mal kaybı, yerinden etme gibi risklere yol açar. Bireyler ve toplumlar açısından temiz suya erişim eksikliği ve acil sağlık riskleri söz konusudur. Gezegenin tamamı ise su ekosistemlerinin etkilenmesi nedeni ile biyolojik çeşitlilikte azalma ve ekosistem sağlığında bozulma tehlikesiyle karşı karşıyadır.                    </p>
                </div>
                
                <div className='water-general-div'>
                    <div className='glass-continue'/>
                    <div className={`glass ${scrollingDown1 ? 'scrolling-down' : ''}`}>
                    </div>
                    <h1 className='glass-h1'>{scrollingDown1 ? 'Okumaya başlayarak suyun yarısını doldurdun!' : 'Boş bir bardak'}</h1>
                    <p className='glass-p'>Okumaya devam ederek su kaynaklarını koru!</p>    
                </div>

                <div className='water-general-div'>
                    <p className="water-explain-p">
                    Su güvenliği açısından tehditler oluşturan tüm bu koşullar bireyleri, devletleri ve ekosistemleri etkileyen birbirine bağlı çok yönlü riskler taşır. Azalan su kaynakları nedeniyle oluşan rekabet, çevresel bozulmalara ve su habitatlarının kaybına neden olurken, jeopolitik olarak su kıtlığı bireyler, topluluklar ve devletler arasında bir çatışma kaynağı haline gelebilir. Dolayısıyla tatlı su kaynaklarına erişim çabası gerilimin artmasına yol açabilir. Devlet düzeyinde sürdürülebilir su yöntemi stratejileri uygulanması ve su kıtlığı nedeniyle yaşanabilecek gerilimleri ele alma amacıyla stratejiler geliştirilmesi önemli mücadele unsurlarındandır.                    </p>
                </div>
                <div className='water-general-div'>
                 <img className='water-centered-img' src = "https://i.natgeofe.com/n/fcc3a9af-2d50-4bbf-8925-72e047a874ed/desertification-01_2x1.jpg"   onClick={() => handleImageClick("https://i.natgeofe.com/n/fcc3a9af-2d50-4bbf-8925-72e047a874ed/desertification-01_2x1.jpg")}/>
                </div>

                <div className='water-general-div'>
                    <p className="water-explain-p">
                    Sıcaklık artışı ve iklimin değişimi, kutup ve dağlık bölgelerde bulunan buzulların boyutu ve hacminde azalmalara neden olur. Buzulların erimesi, havzaların su mevcudiyetini ve kapasitesini etkiler. Böylece buralara bağlı yaşam sürdüren canlı ekosistemleri ve insan toplulukları etkilenir. Buzulların erimesi ile deniz seviyeleri yükselir, dolayısıyla şehirler ya da devletlerin kıyı bölgeleri için sular altında kalma riskleri oluşur. Yalnızca insanlar ve bağlı oldukları devletler için değil gezegene bağlı diğer canlı ekosistemleri de risk altındadır. Kutup ekosistemleri ve yaban hayatında değişen mevsimlik faaliyetler, besin zincirleri ve yaşam alanlarında bozulmalara yol açabilir. Devletler düzeyinde yapılacak müdahaleler, buzullarda gerçekleşen değişikliklerinin izlenmesi, burada bulunan ekosistemlerdeki etkilerin ele alınması, su yönetimine dair stratejilerin uygulanması, bağlı su kaynaklarında meydana gelen değişikliklerin ele alınması ve erimenin uzun vadeli etkilerinin planlanması gibi eylemleri içerir.                    </p>
                </div>
                <br/>
                <div className='water-general-div'>
                    <div className={`glass-continue ${scrollingDown2 ? 'scrolling-down' : ''}`}/>
                    <div className= "glass scrolling-down" >
                    </div>
                    <h1 className='glass-h1'>{scrollingDown2 ? 'Senin sayende artık tamamen dolu!' : 'Yarısı dolu bir bardak'}</h1>
                    <p className='glass-p'>Okumaya devam ederek su kaynaklarını koru!</p>    
                </div>



            </main>
        </div>
        {openImage && (
                <div className="modal" onClick={handleCloseModal}>
                    <img className="modal-content" src={openImage} style={{ transform: `scale(${imageScale})` }}  />
                </div>
            )}
        <Footer/>
    </ThemeProvider>
  );
};

export default Water;
