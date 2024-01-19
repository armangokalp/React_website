import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from '../Header/Header';
import CssBaseline from '@mui/material/CssBaseline';
import customTheme from '../customTheme'

import './Who.css'
import Footer from '../Footer/Footer';
import { useScrollToTop } from '../blog/useScrollToTop';
import PersonCard from './PersonCard';
import SezenImg from "../Images/SezenImg.jpg"
import CaglaImg from "../Images/CaglaImg.jpg"
import ben from "../Images/ben.jpg"

const defaultTheme = createTheme();
const persons = [
    { name: 'Başar Baysal', image: 'https://pbs.twimg.com/profile_images/1687854148966883328/yXb4UhhZ_400x400.jpg', explanation: "Ekip Lideri" },
    { name: 'Ali Vehbi Güneysu', image: 'https://alivehbiguneysu.net/static/media/myPhoto.aec4a690d0b700cc2821.jpg', explanation: "Geliştirici" },
    { name: 'Arman Gökalp', image: ben, explanation: "Geliştirici" },
    { name: 'Çağla Vural', image: CaglaImg, explanation: "İçerik Sorumlusu" },
    { name: 'Sezen Kaya Sönmez', image: SezenImg, explanation: "İçerik Sorumlusu" },

]

const bizKimiz = "İklim değişikliği yüzyılımızın giderek çeşitlenen ekolojik sorunları içinde küresel boyutu ve yıkıcı etkileriyle öne çıkmaya başladı. İklim değişikliği; gıda güvenliğinden, yangınlar ya da seller gibi aşırı iklim olaylarına; su savaşları gibi azalan kaynaklar için silahlı çatışmalardan iklim temelli göç hareketlerine kadar birçok farklı güvenlik riski yaratma potansiyeline sahip. Bu tehditler hem devletleri, hem insanları, hem de gezegenimiz ve içerisinde barındırdığı eko-sistemi tehdit ediyor. Ülkemiz de iklim değişikliği etkilerini açısından yüksek riskli bölge olarak tanımlanan Doğu Akdeniz Havzası’nda bulunuyor ve iklim değişikliğini yaratacağı güvenlik tehditlerinden hiçbirisi bize uzak olan riskler değil. Bizler iklim değişikliğinin yaratacağı, hatta yaratmaya başladığı, bu yıkıcı riskler konusunda toplumun farkındalığını arttırmak için yola çıktık ve bu web sitesini oluşturduk. Temel amacımız son derece teknik ve akademik terimlerle dolu bir alan olan iklim değişikliği konusunu herkesin kolayca anlayacağı bir dille aktarıp bu konuda genel farkındalığı arttırabilmek. Büyük bir tehdit bizi bekliyor ama ne yazık ki bir çoğumuz bunun hakkında detaylıca bir bilgiye sahip değil. İşte biz de bunu dert ettik, tamamen apolitik bir motivasyonla bu konuda ne yapabiliriz diye düşünüp işe bu platform ile başlamaya karar verdik. Web sitemiz iklim değişikliğinin yaracağı güvenlik riskleri hakkında temel bir sınıflandırma ve her bir güvenlik riski ile ilgili genel bilgiler içiren metinleri bünyesinde barındırıyor. Orta vadede buna videolu anlatımları da eklemeyi hedefliyoruz. Ayrıca her an yeni gelişmelerin yaşandığı bu alanda güncel bilgilere ulaşılması amacıyla bölgesel ve küresel ölçekte konuya dair önemli platformlara ve güncel haberlere kolay erişiminin sağlanması da hedeflerimizden bir diğeridir. Bu bağlantılara ana sayfamızdan ulaşabilirsiniz. Uzun lafın kısası bizler iklim değişikliği ile dertlenen insanlar olarak bunu daha çok kişiye anlatalım ki beraber dertlenebilelim dedik :) Umarız başarılı oluruz… Önerileriniz için lütfen bize ulaşın."

const Who = () => {

    useScrollToTop();

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <div className="main-padding">
            <Header/>                
                <main>
                    <div className='who-header'>
                        <h1>Biz Kimiz?</h1>
                        <p>İklim değişikliği yüzyılımızın giderek çeşitlenen ekolojik sorunları içinde küresel boyutu ve yıkıcı etkileriyle öne çıkmaya başladı.</p>
                        <p>İklim değişikliği; gıda güvenliğinden, yangınlar ya da seller gibi aşırı iklim olaylarına; su savaşları gibi azalan kaynaklar için silahlı çatışmalardan iklim temelli göç hareketlerine kadar birçok farklı güvenlik riski yaratma potansiyeline sahip. Bu tehditler hem devletleri, hem insanları, hem de gezegenimiz ve içerisinde barındırdığı eko-sistemi tehdit ediyor.</p>
                        <p>Ülkemiz de iklim değişikliği etkilerini açısından yüksek riskli bölge olarak tanımlanan Doğu Akdeniz Havzası’nda bulunuyor ve iklim değişikliğini yaratacağı güvenlik tehditlerinden hiçbirisi bize uzak olan riskler değil.</p>
                        <p><b>Bizler iklim değişikliğinin yaratacağı, hatta yaratmaya başladığı, bu yıkıcı riskler konusunda toplumun farkındalığını arttırmak için yola çıktık ve bu web sitesini oluşturduk.</b> </p>
                        <p>Temel amacımız son derece teknik ve akademik terimlerle dolu bir alan olan iklim değişikliği konusunu herkesin kolayca anlayacağı bir dille aktarıp bu konuda genel farkındalığı arttırabilmek. Büyük bir tehdit bizi bekliyor ama ne yazık ki bir çoğumuz bunun hakkında detaylıca bir bilgiye sahip değil. İşte biz de bunu dert ettik, tamamen apolitik bir motivasyonla bu konuda ne yapabiliriz diye düşünüp işe bu platform ile başlamaya karar verdik.</p>
                        <p>Web sitemiz iklim değişikliğinin yaracağı güvenlik riskleri hakkında temel bir sınıflandırma ve her bir güvenlik riski ile ilgili genel bilgiler içiren metinleri bünyesinde barındırıyor. Orta vadede buna videolu anlatımları da eklemeyi hedefliyoruz. Ayrıca her an yeni gelişmelerin yaşandığı bu alanda güncel bilgilere ulaşılması amacıyla bölgesel ve küresel ölçekte konuya dair önemli platformlara ve güncel haberlere kolay erişiminin sağlanması da hedeflerimizden bir diğeridir. Bu bağlantılara ana sayfamızdan ulaşabilirsiniz. </p>
                        <p><b>Uzun lafın kısası bizler iklim değişikliği ile dertlenen insanlar olarak bunu daha çok kişiye anlatalım ki beraber dertlenebilelim dedik :) Umarız başarılı oluruz…</b></p>
                        <p>Önerileriniz için lütfen bize ulaşın.</p>
                    </div>
                    <div className='who-main-div'>
                        <div className='who-divider'/>
                        <h1 className='who-ekbimiz-title'>Ekibimiz</h1>
                        <div className='who-persons-container'>
                            <PersonCard person={persons[0]}/>
                        </div>
                        <div className='who-persons-container'>
                        {persons.map((person, index) =>
                            index !== 0 ? (
                                <PersonCard key={index} person={person} />
                            ) : null
                        )}
                        </div>
                        
                        <div className='who-divider'/>
                    
                    </div>
                </main>
            <Footer/>
            </div>
        </ThemeProvider>
    );
};

export default Who;
