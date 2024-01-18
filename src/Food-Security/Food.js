import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Food.css";
import Header from '../Header/Header';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import customTheme from '../customTheme'

import './Food.css'
import Footer from '../Footer/Footer';
import image6 from '../Images/image6.jpg';
import image5 from '../Images/image5.jpg';
import { sections } from '../sections';
import { useScrollToTop } from '../blog/useScrollToTop';

const defaultTheme = createTheme();



const Food = () => {

    useScrollToTop();

    const [isEnlarged1, setIsEnlarged1] = useState(false);
    const [isEnlarged2, setIsEnlarged2] = useState(false);
    const [isEnlarged3, setIsEnlarged3] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        // You can adjust the scroll position threshold based on your needs
        if (scrollPosition > 250 && scrollPosition < 800) {
            setIsEnlarged1(true);
            setIsEnlarged2(false);
            setIsEnlarged3(false);
        }
        else if (scrollPosition > 1000 && scrollPosition <1400) {
            setIsEnlarged1(false);
            setIsEnlarged2(true);
            setIsEnlarged3(false);
        }
          else if (scrollPosition > 1600 && scrollPosition <2100) {
            setIsEnlarged1(false);
            setIsEnlarged2(false);
            setIsEnlarged3(true);
        }
         else {
            setIsEnlarged1(false);
            setIsEnlarged2(false);
            setIsEnlarged3(false);
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
            <Header activeSection= {1}/>
                
                <main>
                    <div className="main-div">
                        <div className="food-header-div">
                        <div className="food-text-div">

                                <h1 className="food-header-text">
                                    Gıda Güvenliği
                                </h1>
                        </div>
                        </div>
                        <div className="extreme-divider" />
                        <div className={`food-general-div ${isEnlarged1 ? 'enlarged' : ''}`}>
                            <p className="food-explain-p left">
                            Bireyler tarafından sağlıklı bir yaşamın devamlılığı için güvenli, yeterli ve besleyici gıdalara her zaman erişilebilmesi gıdalarının güvende olduğunu gösterir. Küresel iklim değişikliği gıda üretim sürecini dolayısıyla gıda güvenliğini etkilemektedir. Bu süreç tarımsal sistemlerin iklim değişikliği nedenli bozulmasını ve yetiştirme koşullarının değişimini içerir. Sıcaklık artışları, yağış düzeninde meydana gelen değişimler ve aşırı hava olaylarının şiddeti, yoğunluğu ve sıklığının artışı verimin düşmesine, mahsul kıtlığına, mahsullerde zarar ve hastalıkların artışına yol açabilmektedir. İklim şartlarında gerçekleşen değişimlerin olumsuz etkileri olumlu etkilere göre daha fazladır. Gıda güvenliği mahsullerin toplanması, hasat edilmesi depolanması, işlenmesi, taşınması ve atıkların yok edilmesini de içeren tüm bu süreçler ve altyapıların sağlanmasıyla ilişkilidir. Küresel iklimde meydana gelen değişiklikler ise bu sürecin tamamında olumsuz etkiler oluşturma riskine sahiptir.                           
                            </p>
                            <img className='food-img right' src='https://static.vecteezy.com/system/resources/previews/016/733/039/original/hand-drawn-fruit-basket-illustration-png.png'/>
                        </div>

                        <div className={`food-general-div ${isEnlarged2 ? 'enlarged' : ''}`}>
                            <div className='food-full-img' src='https://gfi.org/wp-content/uploads/2022/10/POL220137_Climate-Advisers-web-graphics_header-feature.jpg'/>                     </div>
                        <div className="divider" />

                        <div className={`food-general-div ${isEnlarged3 ? 'enlarged' : ''}`}>
                            <p className="food-explain-p right">
                            Bireyler açısından bakıldığında özellikle tarıma bağlı hassas topluluklar, geleneksel gıda kaynaklarının iklime bağlı koşullarla güvenilmez hale gelmesiyle artan açlık ve yetersiz beslenme riskleriyle karşı karşıyadır. Bu durum, kentlerin de beslenmelerini tarıma bağlı kırsallardan sağladığı düşünüldüğünde toplumların tamamı için zamanla riskler oluşturabilecektir. Kısacası insan refahı etkilenecektir. İnsan faaliyetleri, aşırı hava olayları ve gerçekleşen yangın, sel ve fırtına gibi felaketlerin yol açtığı biyolojik çeşitlilik kaybı ise gezegenin tamamı için tehditlere neden olmaktadır. Ekosistemler arasında bulunan hassas denge bozulduğunda birey, toplum ve gezegen sağlığı arasındaki birbirine bağlı ilişkiler de bozulma riski taşımaktadır. Devletler düzeyinde gıda tedarikinin sağlanması, kıtlığın önlenmesi ve değişen iklime adaptasyon için sürdürülebilir tarım uygulamalarının hayata geçirilmesi gibi müdahaleler gereklidir.                             </p>
                            <img className='food-img left' src='https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Sandwich_PNG_Clipart_Vector_Picture.png?m=1434276763'/>
                        </div>
                    </div>
                </main>
            <Footer/>

            </div>
        </ThemeProvider>
    );
};

export default Food;
