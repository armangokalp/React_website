import React, { useState } from "react";
import "./Extreme.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header/Header';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../Footer/Footer';
import customTheme from '../customTheme'

import fire from '../Images/forestFire.jpg';
import extremeImage from '../Images/extreme.jpg';
import flood from '../Images/image2.jpg';
import desertification from '../Images/desertification.png';
import heatwaves from "../Images/heatwaves.jpg"
import drought from "../Images/drought.jpeg"
import hurricane from "../Images/hurricane.webp"
import landslide from "../Images/landslide.jpeg"
import rain from "../Images/rain.webp"
import { sections } from "../sections";
import { useScrollToTop } from '../blog/useScrollToTop';

const defaultTheme = createTheme();

const Extreme = () =>{

    useScrollToTop();

    const [openImage, setOpenImage] = useState(null);
    const [imageScale, setImageScale] = useState(1);

    const handleImageClick = (image) => {
        setOpenImage(image);
            setImageScale(1.5);
    };

    const handleCloseModal = () => {
        setOpenImage(null);
        setImageScale(1);
    };
    
    return(
        <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <div className="main-padding">
        <Header activeSection= {0}/>
        <main>
            <div className="main-div">
                <div className="extreme-header-div">
                    <div className="extreme-h-div">
                        <h1 className="extreme-header-text">
                        Aşırı Hava Olayları ve İklim Değişikliği: Tehlike ve Sonuçları
                        </h1>
                    </div>
                </div>
                <div className="extreme-divider"/>
                <div className="extreme-general-div">
                    <p className="extreme-explain-p">
                    İklim değişikliği, aşırı sıcaklıklar ve aşırı yağışlar gibi hava olaylarını oluşturarak kuraklık, yangın, sel ve benzeri afetlerin sıklık, yoğunluk ve şiddetinin arttırmasına neden olur. Tüm bunlar bireyler, devletler ve gezegenin kendisi için doğrudan tehlikeler ve riskler oluşturur.
                    </p>
                    <p className="extreme-explain-p">
                    Sıcak hava dalgaları, aşırı yağışlar ve dolu yağışı, seller, orman yangınları, kuraklık, kasırgalar, hortumlar, siklonlar, toprak kaymaları, çölleşme.
                    </p>
                </div>
                <div className="extreme-divider-thin"/>

                <div className="extreme-general-div">
                    <h1 className="extreme-explain-h1">
                    Sıcak Hava Dalgaları
                    </h1>
                    <p className="extreme-explain-p">
                    Küresel sıcaklıkların artışı ile birlikte sıcak hava dalgalarının meydana gelişi de daha sık, daha yoğun ve daha şiddetli olmaktadır. Dolayısıyla uzun süren aşırı sıcak dönemler, insan sağlığı için doğrudan bir tehdit oluşturur. Sıcaklığa bağlı olarak hastalıklar ve ölümler meydana gelir. Özellikle çocuklar, yaşlılar ve kronik hastalıkları bulunanlar daha fazla risk altındadır. Bununla beraber soğutma ihtiyacını karşılayamayan ve barınma ihtiyaçları bakımından daha korunaksız bölgelerde yaşayan yoksul kesimler gibi dezavantajlı nüfuslar da artan risklere karşı daha hassastır. Gezegenin bütününde ise aşırı sıcaklıklar bitki ve hayvan türlerini etkiler. Yeni şartlara uyum konusunda zorlanan türler açısından uzun dönemde azalma ya da yok olma gibi tehlikeler oluşabilir. Dolayısıyla biyolojik çeşitlilik tehdit altındadır. Devletler düzeyinde altyapı çalışmaları, müdahale planları, enerji talebine ilişkin yönetim stratejileri ve dezavantajlı gruplara yönelik sosyal yardımlar ve iyileştirmeler gibi eylemler gereklidir.                     </p>
                    <img
                            className="extreme-impacts-img-1"
                            src={heatwaves}
                            onClick={() => handleImageClick(heatwaves)}
                    />
                </div>

                <div className="extreme-general-div">
                    <h1 className="extreme-explain-h1">
                    Aşırı Yağışlar ve Dolu Yağışı
                    </h1>
                    <p className="extreme-explain-p">
                    İklimde meydana gelen değişimler daha yoğun, daha sık ve daha şiddetli yağmur ve dolu yağışlarına neden olur. Aşırı yağışlar, seller, toprak kaymaları vb. felaketlere yol açarak altyapılara zarar verir. Ayrıca mahsuller için risk oluşturarak tarım sektörünü de olumsuz etkiler. Bireyler ve toplumlar can ve mal kaybı, maddi hasar, yerinden edilme, altyapı ve ulaşımda aksamalar gibi risklerle gıda güvenliği ve ekonomik güvenlik açısından tehdit altındadır. Devletler düzeyinde altyapıların iyileştirilmesi ve daha dayanıklı hale getirilmesi, etkili afet yönetimi, arazi kullanımlarına yönelik planlamalar gibi müdahaleler gereklidir.                    </p>
                    <img
                            className="extreme-impacts-img-1"
                            src={rain}
                            onClick={() => handleImageClick(rain)}
                    />
                </div>

                <div className="extreme-general-div">
                    <h1 className="extreme-explain-h1">
                    Seller
                    </h1>
                    <p className="extreme-explain-p">
                    Buzulların erimesi ve aşırı yağışlar, su seviyelerinin yükselmesine ve daha yoğun, daha sık ve daha şiddetli su baskınlarına neden olmaktadır. Böylece sellerin oluşumunun ve etkisinin yoğunlaşması bireyler ve toplumlar için özellikle altyapı sorunları nedeniyle acil tehditler oluşturmaktadır. Can ve mal kayıpları ve yerinden edilme gibi birey ve toplumları tehdit eden bu risklerin dışında habitatın değişmesi, ekosistemlerin bozulması ve biyolojik çeşitliliğin azalması gibi gezegensel riskler de bulunmaktadır. Devletler düzeyinde seller ile meydana gelen acil sorunlarla ilgilenilmesi, etkili afet yönetimi, altyapı eksiklikleri ile ilişkili uzun vadeli dayanıklılık planlaması ve sürdürülebilir kalkınma stratejilerinin oluşturulması ve uygulanması gibi müdahaleler gereklidir.                     </p>
                    <img
                            className="extreme-impacts-img-1"
                            src={flood}
                            onClick={() => handleImageClick(flood)}
                    />
                </div>

                <div className="extreme-general-div">
                    <h1 className="extreme-explain-h1">
                    Orman Yangınları
                    </h1>
                    <p className="extreme-explain-p">
                    Aşırı sıcaklıklar ve yağış düzeninin değişimi kuru koşulların oluşumuna neden olarak orman yangınlarının sıklaşmasına yoğunlaşmasına ve şiddetlenmesine yol açar. Bireyler ve topluluklar orman yangınları nedeniyle evlerinin tahribi, yerinden edilme, can ve mal kayıpları ve hava kalitesinin kötüleşmesi gibi risklerle doğrudan tehditler altındadır. Bitki ve hayvanlar açısından da habitat kaybı gibi riskler öne çıkarken gezegensel ölçekte ekolojik dengede bozulmalar meydana gelmektedir. Devletler düzeyinde acil müdahale yöntemlerinin geliştirilmesi, uzun vadede etkili yangın azaltma ve önleme planlamalarının yapılması, orman yönetimi stratejileri ve sürdürülebilir arazi uygulamalarının geliştirilmesini içeren müdahaleler gereklidir.                    </p>
                    <img
                            className="extreme-impacts-img-1"
                            src={fire}
                            onClick={() => handleImageClick(fire)}
                    />
                </div>   

                <div className="extreme-general-div">
                    <h1 className="extreme-explain-h1">
                    Kuraklık
                    </h1>
                    <p className="extreme-explain-p">
                    Aşırı sıcaklıklar ve yağış düzeninde meydana gelen değişiklikler buharlaşmayı arttırırken şiddetli ve uzun süreli kuraklıklara neden olur. Kuraklık su mevcudiyetini etkileyerek su kıtlığına yol açar. Dolayısıyla gezegendeki tüm türler bu durumdan etkilenirken ekosistemler de zarar görür. Tarımda ciddi etkiler yaratarak gıda güvensizliği oluşturur. Bu durum aynı zamanda ekonomik istikrarsızlıkları da tetikler. Bireyler, topluluklar ve gezegenin kendisi açısından bağlantılı sorunlara neden olan kuraklığa yönelik devletler düzeyinde su yönetimi stratejilerinin geliştirilmesi ve sürdürülebilir tarım uygulamalarına yönelik teşviklerin arttırılması gibi müdahaleler gereklidir.                    </p>
                    <img
                            className="extreme-impacts-img-1"
                            src={drought}
                            onClick={() => handleImageClick(drought)}
                    />
                </div>         

                <div className="extreme-general-div">
                    <h1 className="extreme-explain-h1">
                    Kasırgalar, Hortumlar ve Siklonlar
                    </h1>
                    <p className="extreme-explain-p">
                    Küresel sıcaklık artışlarına bağlı olarak değişen iklim modelleri nedeniyle rüzgar olaylarının, gök gürültülü ve tropikal fırtınaların, hortumların, kasırga ve siklonların şiddeti, yoğunluğu ve sıklığı artmaktadır. Tüm bu şiddetli aşırı hava olayları bireyler ve toplumlar açısından can ve mal kayıpları, nüfusun yerinden edilmesi, altyapı hasarları, elektrik kesintileri ve ulaşımda aksaklıklar gibi tehditler oluşturur. Ayrıca kıyı taşkınlarını da şiddetlendirirken kıyı erozyonu, habitat kaybı ve ekosistemlerde bozulmalar gibi tehditlerle insanlar, diğer türler ve bütünüyle ekosistemler için hayati risklere neden olur. Devletler düzeyinde erken uyarı sistemlerinin geliştirilmesi, altyapı dayanıklılığının arttırılması, kıyı korunmasına yönelik önlemlerin alınması, etkili afet yönetimi ve planlaması gibi müdahaleler gereklidir.                </p>
                    <img
                            className="extreme-impacts-img-1"
                            src={hurricane}
                            onClick={() => handleImageClick(hurricane)}
                    />
                </div>     

                <div className="extreme-general-div">
                    <h1 className="extreme-explain-h1">
                    Toprak Kaymaları
                    </h1>
                    <p className="extreme-explain-p">
                    İklim değişikliği nedeniyle sıklığı artan, şiddetlenen ve yoğunlaşan aşırı yağışlar, dağlık ve tepelik bölgelerde heyelan riskini arttırmaktadır. Doygun hale gelen toprak ve yamaçlarda oluşan dengesizleşmeyle oluşan heyelanlar, bireyler ve toplumlar açısından can ve mal kayıpları ve altyapı hasarları gibi tehditlere neden olurlar. Aynı zamanda ağaçlar ve diğer bitkilerin yerinden sökülmesi gibi etkileriyle ekosistemlere yönelik risklere de yol açarlar. Devletler düzeyinde yamaçların stabilize edilmesi amacıyla önlemler alınması, erken uyarı sistemlerinin geliştirilmesi ve arazi kullanım planlaması gibi müdahaleler gerekir.                    </p>
                    <img
                            className="extreme-impacts-img-1"
                            src={landslide}
                            onClick={() => handleImageClick(landslide)}
                    />
                </div>

                <div className="extreme-general-div">
                    <h1 className="extreme-explain-h1">
                    Çölleşme
                    </h1>
                    <p className="extreme-explain-p">
                    İklim değişikliği bir arazi tahribatı olan çölleşme sürecini hızlandırmaktadır. Bu doğrultuda daha önceki zamanlarda ekilebilir olan araziler çöl benzeri koşullara dönüşür. Sıcaklıkların artışı, yağış düzenlerinde değişimler ve sürdürülebilir olmayan yöntemlerle arazi kullanımları toprağın bozulmasına yol açarak arazi verimliliğinin azalmasına neden olur. Çölleşme bireyler ve topluluklar açısından yerinden edilme, ekilebilir arazilerin yok olması ve geçim kaynaklarının kaybı gibi tehditlere yol açmaktadır. Gezegenin bütünüyle ilişkili olarak da ekosistemlerde bozulmalar, verimli arazi kayıpları ve çevresel riskler karşısında kırılganlıkların artması gibi riskleri oluşturmaktadır. Devletler düzeyinde çölleşme ile mücadele kapsamında arazi yönetimi stratejilerinin geliştirilmesi, çölleşmenin sosyo-ekonomik etkilerinin yönetilmesi, bozulan arazilerin eski haline getirilmesi, arazi kullanımında sürdürülebilir uygulamaların teşvik edilmesi ve daha fazla çölleşmenin önlenmesini içeren küresel müdahaleler gerekir.                    </p>
                    <img
                            className="extreme-impacts-img-1"
                            src={desertification}
                            onClick={() => handleImageClick(desertification)}
                            imageScale = {0.5}
                            style={{ marginBottom: '5%' }}
                    />
                </div>   
            </div>
            </main>
            </div>

    <Footer/>
    {openImage && (
        <div className="modal" onClick={handleCloseModal}>
            <img className="modal-content" src={openImage} style={{ transform: `scale(${imageScale})` }}  />
        </div>
    )}
    </ThemeProvider>
    )
}

export default Extreme;