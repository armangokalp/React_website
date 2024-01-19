import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer';
import "./Migration.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header/Header';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from "../Footer/Footer";
import customTheme from '../customTheme'
import { sections } from '../sections';

import migrationImage from '../Images/migration.jpeg';
import Image4 from '../Images/image4.png';
import { useScrollToTop } from '../blog/useScrollToTop';

const defaultTheme = createTheme();


const migrationData = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Number of Climate Migrants Worldwide (in millions)',
      data: [22.1, 19.1, 19.2, 24.4, 18.6, 17.5, 25.3, 31.7, 23.7, 32.6, 0],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }],
    options: {
        maintainAspectRatio: false,
        responsive: true,
    }
  };


const Migration = () => {

    useScrollToTop();

    const [chartVisible, setChartVisible] = useState(false);
    const { ref, inView } = useInView({
        delay: 200,
        threshold: 0.8
    });

    useEffect(() => {
        if (inView) {
            setChartVisible(true);
        }
    }, [inView]);

    return (

        <ThemeProvider theme={customTheme}>
            <div className="main-padding">
                <CssBaseline />
                <Header activeSection={4}/>
                

                <main>
                    <div className="migration-header-div">
                            <h1 className="migration-header-text">
                                İklim Değişikliği Kaynaklı Göç
                            </h1>
                    </div>
                    <div className="migration-divider"/>

                    <div className="migration-text0">
                        <h3>İklim Değişikliği Kaynaklı Göçün Karmaşıklığı</h3>
                        <p className="migration-explain-p">
                        İklim değişikliğinin etkileri hızla artarken, bunun sonuçları insan göçünün kalıplarını ve dinamiklerini yeniden şekillendirmektedir. Aşırı sıcaklıklar tarımsal geçim kaynaklarını tehdit etmekte, deniz suyu seviyesinin yükselmesi yaşam alanlarını yok etmekte, kuraklık suya ve gıdaya erişilebilirliği zorlaştırmaktadır. İnsanların yaşam alanlarının ve temel geçim kaynaklarının doğrudan etkilenmesi, toplumları farklı bölgelerde yeni yaşam alanı arayışlarına yönlendirmektedir. Bunların bazıları ülke içerisinde yer değiştirmeden ibaretken, küçük ada devletleri gibi ülkelerinin sular altında kalması tehlikesiyle karşı karşıya olan toplumlar ise, farklı ülkelere göç etmek zorunda kalmaktadır. Dolayısıyla, iklim değişikliği dünya genelinde mevcut eşitsizlikleri ve güvensizlikleri artırdıkça, temel meselelerden birisi ise giderek öngörülemez hale gelen insan hareketliliğidir.                     </p>
                        <p className="migration-explain-p">
                        Çevresel ve iklimsel faktörler, genellikle ekonomik, sosyal, siyasi ve demografik unsurlarla birlikte hareket eden hem itici hem de çekici faktörlerdir. Bu bağlamda, iklim değişikliğinin olumsuz etkileri nedeniyle evini veya bölgesini terk etmek zorunda kalan kişilere iklim mültecisi denilmektedir. Halihazırda, çevre ve iklim göçmenlerinin uluslararası kabul görmüş yasal bir tanımı ve korunmalarını düzenleyen tek bir özel yasal araç bulunmamaktadır. İklim değişikliği kaynaklı göç, insan güvenliğini doğrudan etkileyen acil ve temel bir sorundur. Bu nedenle iklim mültecileri, çatışma ve ekonomik istikrarsızlıktan sağlık riskleri ve sosyal kırılganlığa kadar bir dizi tehditle karşı karşıyadır. 
                        </p>
                    </div>
                    <div>
                    </div>

                    <div className="migration-content">
                        <div className="migration-text">
                        <h3>Gerçek Hayattan Hikayeler</h3>
                        <p className="migration-explain-p">
                            İklim nedenli göç, küresel bir olgu olsa da, bu sorunu etkilenen bireyler ve toplulukların gerçek hikayelerini paylaşarak insancıllaştırmak önemlidir. Bu hikayeler, iklim göçmenlerinin kişisel deneyimlerini, karşılaştıkları zorlukları ve dirençlerini vurgular. Bazı gerçek hikayeler şunları içerir:
                        </p>
                        </div>
                        <div className="migration-image"></div>
                    </div>
                    <div className="migration-real-stories">
                    <div className="migration-text-center">
                    <ul>
                    <li><strong>Pasifik Adaları Ülkeleri:</strong> Tuvalu ve Kiribati gibi alçak bölgelere sahip Pasifik adaları ülkelerinin sakinleri, deniz seviyesinin yükselmesi tehdidi ile karşı karşıya, bu da Yeni Zelanda gibi ülkelere planlı göçlere yol açmaktadır.</li>
                    <li><strong>Afrika Sahel Bölgesi:</strong> Afrika'nın Sahel bölgesindeki topluluklar, kuraklık ve çölleşme ile başa çıkmakta olup, insanları verimli arazi ve su kaynakları arayışında göç etmeye zorlamaktadır.</li>
                    <li><strong>Bangladeş:</strong> Bangladeş'in sahil bölgeleri sık sık sel ve kasırgalara maruz kalmaktadır, bu da genellikle şehir merkezlerine göç eden milyonlarca insanın yerinden edilmesine neden olmaktadır.</li>
                    <li><strong> Yerli Topluluklar:</strong> Kuzey Amerika'daki yerli gruplar, örneğin Kanada'daki İnuitler, iklim değişikliği nedeniyle geleneksel av alanlarını kaybetmektedir, bu da göçle başa çıkmada zorluklara yol açmaktadır.</li>
                    </ul>
                    </div>
                    </div>
                    <div className="migration-divider-thin"/>

                    <div className="migration-text-chart">
                    <div className="migration-statistics">

                        <div className="chart-container" ref={ref}>
                        <div className="migration-text-chart">
                            <h2>Dünya Geneli Göç İstatistikleri</h2>
                        </div>
                        <div className="migration-divider-blank"/>
                            {chartVisible && (
                                <Bar data={migrationData} />
                            )}
                        </div>
                    </div>
                </div>
                </main>
            </div>
            <Footer/>
        </ThemeProvider>
    );
};

export default Migration;
