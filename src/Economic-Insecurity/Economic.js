import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import "./Economic.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../Footer/Footer';
import customTheme from '../customTheme';
import { sections } from '../sections';
import energyImage from '../Images/economic1.jpeg';
import imageA from '../Images/urban.jpeg';
import imageB from '../Images/rural.jpeg';
import { Line } from 'react-chartjs-2';
import 'chart.js';
import { useInView } from 'react-intersection-observer';
import { useScrollToTop } from '../blog/useScrollToTop';

const economicData = {
    labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    datasets: [
      {
        label: 'Global Economic Impact ($ in billions)',
        data: [40, 420, 156, 188, 67, 70, 617, 37, 410, 50, 55, 70, 37, 47, 40, 205, 45, 44],
        fill: true,
        borderWidth: 2,
        backgroundColor: 'rgb(75, 192, 192, 0.1)',
        borderColor: 'rgba(75, 192, 192, 0.8)',
        pointBackgroundColor: 'rgba(75,75,192,1)'
      },
    ],
  };

  

const Economic = () => {

    useScrollToTop();

    const [openImage, setOpenImage] = useState(null);
    const [imageScale, setImageScale] = useState(1);

    const handleImageClick = (image) => {
        setOpenImage(image);
        if (image == imageA) {
            setImageScale(1.3);
        }
        else {
            setImageScale(1.9);
        }
    };

    const handleCloseModal = () => {
        setOpenImage(null);
        setImageScale(1);
    };


    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        animations: {
            tension: {
              easing: 'linear',
              from: 1,
              to: 0,
              loop: false
            }
        },
        animation: {
            onComplete: () => {},
            delay: (context) => inView ? context.dataIndex * 300 + context.datasetIndex * 100 : 0,
        }
    
        
      };

      
    return (
        <ThemeProvider theme={customTheme}>
        <div className="main-padding">
            <CssBaseline />
            <Header activeSection={3}/>
            

            <main>
                <div className="economic-header-div">
                    <h1 className="economic-header-text">
                        Ekonomik Güvenlik ve Enerji Sorunları
                    </h1>
                </div>
                <div className="migration-divider"/>

                <div className="economic-section">
                    <div className="content-flex">
                        <div className="text-content">
                            <h3>Ekonomik Güvenliğe Giriş</h3>
                            <p className="conflict-explain-p-larger">
                            Küresel iklim değişikliği, bireyler, devletler ve genel olarak küresel ekonomi için yoğun ve derin ekonomik zorluklar ortaya çıkarır. Aşırı hava olaylarına bağlı olarak ekonomik kayıplar artar. İklim değişikliği dolaylı olarak üretim ve imalat sanayiler için de risklere neden olur. Tüketim unsurlarının çoğu fiziksel çevre tarafından şekillendiği için malların ve hizmetlerin kalitesi ve taleplerinde değişiklikler meydana gelmektedir. İnşaat sanayisi gibi endüstriler, oteller, restoranlar ve yiyecek fabrikaları gibi bozulabilir mal ve hizmetler ve turistik bölgeler gerçekleşen değişikliklerden etkilenir. Sigorta sektörü de riskleri paylaşırken, sel ve kuraklık gibi afetler nedeniyle finansal kayıpların telafisine ilişkin hasar ödemeleri ve dolayısıyla talep edilen sigorta primleri de artmaktadır. Bireyler ve topluluklar genel olarak altyapıların zarar görmesi ve ekonomik istikrarsızlık gibi risklerle karşı karşıyadır. Gezegenin tamamı için ise yaşanan ekonomik zorlukların ekosistemlerdeki bozulmalara katkıda bulunması muhtemeldir. Devletler düzeyinde tedarik zinciri ve altyapıdaki aksaklıkların ele alınması ve istikrarın sağlanması için ekonomik planlamaların yapılması gereklidir. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="economic-section">
                    <div className="text-content">
                        <h3>Kentsel ve Kırsal Alanlar</h3>
                        <p className="conflict-explain-p-larger">
                        Kentsel alanlar, dünya nüfusunun çoğunluğuna ev sahipliği yaparken, inşa edilen yapılar, altyapılar ve ekonomik faaliyetlerin çoğunluğu da bu bölgelerdedir. İklim değişikliği etkileri ile meydana gelen aşırı hava olayları ve bağlı afetler nüfus yoğunluğunun fazla olduğu kentlerde büyük yıkımlara yol açar. Nüfus fazlalığı nedeniyle tehlike ve stres kaynaklarının mekânsal olarak yoğunlaştığı kentsel alanların şartları, kırsal alanlardan gelen göçlerle daha da zorlaşmaktadır. Kırsalda yaşayan topluluklar geçim kaynakları bakımından tarıma dolayısıyla doğal kaynaklara oldukça bağımlıdır. Bu nedenle iklim değişikliği kaynaklı zorluklar bu şartlardaki toplulukları daha savunmasız kılarken, doğal çevrede meydana gelen olumsuz etkiler kırsaldan kente göçlere sebep olmaktadır. Temel neden aşırı sıcaklık ve seller gibi felaketlerin tarım ve tarım dışı gelirleri düşürmesi ve gıda ve su gibi fiziksel ihtiyaç yoksunluğunun giderilme çabasıdır. Devlet düzeyinde afet yönetimi ve planlaması, altyapı dayanıklılığının arttırılması, yerinden edilmiş nüfusların yönetimine yönelik stratejilerin geliştirilmesi ve gittikçe nüfusu yoğunlaşan kentlerin kapsamlı gelişim planlamalarının yapılması gibi müdahaleler gereklidir.                        </p>
                        <Grid container spacing={2} className="grid-container">
                            <Grid item xs={6}>
                                <img className="economic-image" src={imageA} onClick={() => handleImageClick(imageA)}/>
                            </Grid>
                            <Grid item xs={6}>
                                <img className="economic-image" src={imageB} onClick={() => handleImageClick(imageB)}/>
                            </Grid>
                        </Grid>
                        <h3>Geçim ve Yoksulluk</h3>
                        <p className="conflict-explain-p-larger">
                        İklim değişikliği nedeniyle meydana gelen afet ve tehlikeler, yoksulluk düzeyinde yaşayan bireyler ve topluluklar açısından halihazırda var olan geçim sıkıntısını daha da ağırlaştırmaktadır. Yoksul topluluklar bu tehlikelerden, geçim kaynakları, mahsul verimliliklerinde düşüşler, evlerinin tahrip edilmesi, artan gıda fiyatları, gıda ve su güvensizliği gibi unsurlar aracılığıyla etkilemektedir. Ayrıca aşırı yağışlar ve kasırgalar gibi ani etkilerle baş edebilme açısından yoksullar, zenginlere göre daha savunmasızdır. Devlet düzeyinde sosyo-ekonomik etkilerinin yönetilmesi, tüm bireylere yönelik adil acil müdahale yöntemlerinin geliştirilmesi, savunmasız ve dezavantajlı gruplara yönelik sosyal yardımlar ve iyileştirmeler gibi müdahaleler gereklidir.                        </p>
                    </div>
                </div>

                <div className="economic-section">
                    <div className="text-content">
                        <h3>Global Ekonomik Etki</h3>
                        <p className="conflict-explain-p-larger">
                        İklim değişikliğinin küresel ekonomi üzerindeki etkisi büyük bir öneme sahip bir konudur. Aşırı hava olayları, yükselen deniz seviyeleri ve değişen yağış desenleri gibi iklimle ilgili olaylar, dünya genelinde ekonomilere uzun vadeli etkileri olabilir. Bu bölümde, iklim değişikliğinin küresel ekonomi üzerindeki geniş kapsamlı etkilerini incelemekteyiz.                        </p>
                        <p className="conflict-explain-p-larger">
                        Azalan tarımsal üretkenlikten iklimle ilgili hastalıklara bağlı artan sağlık maliyetlerine kadar, iklim değişikliğinin ekonomik etkisi çok yönlüdür. Bu etkilerin bölgeler ve sektörler arasında nasıl değiştiğini inceliyor ve ekonomik kayıpları en aza indirmek için acil tedbirlerin gerekliliğini tartışıyoruz.
                        </p>
                        <div style={{ padding: '75px' }}>
                            {inView || <Line data={economicData} options={options} />}
                        </div>
                    </div>
                </div>

                <div className="economic-section">
                    <div className="content-flex">
                        <div className="text-content">
                            <h3>Enerji Güvenliği</h3>
                            <p className="conflict-explain-p-larger">
                            Enerji güvenliği, bir ülkenin ekonomik ve sosyal kalkınması için güvenilir ve uygun fiyatlı bir enerji arzının güvence altına alınmasıdır. Enerji güvenliği kısa ve uzun vadede etkileri bağlamında farklı şekiller de tanımlanmaktadır. Örneğin, kısa vadede, ülkelerin kısa vadeli ihtiyaçlarını karşılamaları için arz güvenliğini sağlamaları ile ilgilidir. Uzun vadede ise, ülkelerin yeterli enerji tedarik edebilmek için enerji altyapısına gerekli miktarda yatırım yapmaları ile ilgilidir. Günümüzde temel enerji kaynakları, özellikle gelişmekte olan ülkeler açısından ucuz enerji kaynağı sağlayan fosil yakıtlardan oluşmaktadır. Dolayısıyla, petrol ve doğal gaz gibi fosil yakıtlara erişim enerji güvenliğinde önemli bir mesele haline gelmektedir. Enerji, sadece devletler için önemli bir kaynak değildir. İnsanlar da enerji güvensizliğinden etkilenen bir aktör niteliğine sahiptirler. Özellikle, son yıllarda küresel ölçekte artan nüfus ile birlikte enerji talebinde de bir artış söz konusudur. Devletlerin enerji kaynağı olarak ucuz enerji gücü olan fosil yakıtlara başvurması, insanın ve devletin enerji ihtiyacını karşılıyor olsa da, diğer yandan günümüzde etkileri hızla artan iklim değişikliğine neden olmaktadır. Bir başka ifadeyle, enerji talebi hem enerji güvenliğini sağlamakta, hem de iklim değişikliğine de neden olmaktadır. Fosil yakıtların yakılması atmosfere karbondioksit (CO2) gibi sera gazları salarak sera etkisini yoğunlaştırır ve böylece küresel ısınmaya katkıda bulunur.                             </p>
                        </div>
                    </div>
                </div>

                <div className="economic-section">
                    <div className="content-flex">
                        <div className="text-content">
                            <p className="conflict-explain-p-larger">
                            Enerji ve iklim değişikliği arasındaki ilişki bununla sınırlı kalmamaktadır. Enerji talebini sağlayan fosil yakıtların neden olduğu sera gazı emisyonları iklim değişikliğine neden olarak çevreyi etkilemekte, bu da enerji sistemlerini etkilemektedir. İklim değişikliği, enerji sektörüne zorluklar ve kırılganlıklar getirerek enerji güvenliğine tehdit oluşturmaktadır. Örneğin, kasırga, sel ve fırtına gibi aşırı hava olayları, enerji altyapısına zarar vermekte, enerji tedarik zincirlerini bozmakta ve elektrik kesintilerine yol açmaktadır. Bu tip hava olaylarına karşı savunmasız olan enerji sistemleri, iklim değişikliğinden etkilenmekte ve bir enerji güvensizliğine neden olmaktadır. Öte yandan, aşırı sıcaklığın neden olduğu kuraklık su kıtlığına yol açmaktadır. Enerji santrallerinde soğutma veya petrol ve gaz endüstrisinde çıkarma gibi birçok enerji üretim sürecinde su tüketimi yoğundur. Dolayısıyla, su kıtlığı enerji üretim kapasitesini azaltabilmekte ve enerji güvensizliğini artırabilmektedir.                            </p>
                        </div>
                        <img src={energyImage} className="image-last" onClick={() => handleImageClick(energyImage)} />
                    </div>
                </div>

                <div className="economic-section">
                    <div className="content-flex">
                        <div className="text-content">
                            <p className="conflict-explain-p-larger">
                            İklim değişikliğinin enerji kaynakları üzerindeki olumsuz etkileri, uygun fiyatlı ve güvenilir enerjiye erişimin yetersizliğini neden olarak toplumlar arasındaki sosyal eşitsizlikleri daha da artırmaktadır. İklim değişikliği ile mücadele ve enerji güvenliğinin sağlanması için fosil yakıtlardan uzaklaşılması ve daha temiz, yenilenebilir enerji kaynaklarının benimsenmesini gerekmektedir. Güneş ve rüzgar gibi yenilenebilir enerji kaynaklarına geçiş, enerji kaynaklarını çeşitlendirerek enerji güvenliğini artırmaktadır. Bir başka ifadeyle, dirençli ve sürdürülebilir enerji sistemlerine yatırım yapmak, iklim değişikliği kaynaklı sorunlar karşısında enerji güvenliğini güçlendirmektedir.                            </p>
                        </div>
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

export default Economic;