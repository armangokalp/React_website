import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import customTheme from '../customTheme';
import "./dillemas.css"

const YourNewPage = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className='main-padding'>
        <Header />
        <CssBaseline />
        <main>
          <div className="page-container">
            <h1 className="page-title">İklim Güvenliği Sorunlarını Yönlendirmek: Sadece İklim Değişikliğini Güvenceye Alma Mümkün mü?</h1>
            <div className="page-subtitle">
              <h2>Üzerinde Durulan Sorunlar</h2>
              <p>Bugünkü küresel manzara, iklim değişikliğinin karanlık gölgesi tarafından kalıcı olarak şekillendirilmekte olup, gelecekteki bir endişeden anında ve her yerde karşılaşılan bir soruna evrilmektedir. Bu politika belgesi, iklim değişikliğinin güvenliğe yönlendirilmesi tarafından ortaya konulan ikilemin karmaşık boyutlarına inmektedir. Bu olgunluğun sunduğu çok yönlü tehditleri incelemekte, iklim değişikliğini bir güvenlik sorunu olarak çerçevelemenin potansiyel risklerini ve faydalarını sorgulamakta ve Rita Floyd'un iklim değişikliğini güvenlik tartışması içinde dengeli ve etik bilgilendirilmiş bir entegrasyonu savunurken ilham aldığı adil güvenceleştirme yaklaşımının niteliklerini incelemektedir.</p>
            </div>
            <div className="page-subtitle">
              <p>İklim değişikliği hızla dönüşümsel etkisini hızlandırırken, bu etkileri ele alma aciliyeti birincil hale gelmektedir. Yükselen sıcaklıklar, aşırı hava olayları ve ekosistemlere yönelik kökten değişiklikler gibi fenomenlerin hızlı yükselmesi, geleneksel güvenlik paradigmasının yeniden değerlendirilmesini gerektirir, yenilikçi ve uyumlu stratejiler talep eder.</p>
              <p>Üç Referans Nesnesi Tehdit Altında: İklim değişikliği, insan merkezli, ekosistem merkezli ve devlet merkezli perspektifleri içeren üç ayrı referans nesnesine tehdit olarak ortaya çıkar. İlk bakış, iklim değişikliğini insanlar ve insanların refahı için bir tehdit olarak görür. İkincisi, ekosistemlerin karmaşıklığına zarar verebilecek bir tehlike olarak algılar. Üçüncüsü ise iklim değişikliğini ulus-devletler için bir zorluk olarak çerçevelemektedir. Bu tartışma içinde iklim değişikliği varlığını bile sorgulayan iklim değişikliği skeptiklerinin bir kesimi bulunmaktadır. İklim değişikliğini güvenceye alanları sorgulayanlar da bulunmaktadır. Bu farklı bakış açıları yelpazesi, iklim değişikliği hikayesinin karmaşıklığını vurgular ve farklı önceliklerin iklim güvenliği konusundaki farklı algılara ve yaklaşımlara nasıl yol açtığını gösterir.</p>
            </div>
            <div className="page-content">
              <h3>İklim Güvenliği Sorunları:</h3>
              <p>İklim değişikliğinin etkilerinin farklılaştırılmış etkisi: Karmaşık Bir Kumaşı Açığa Çıkarma</p>
              <p>Planeta Dünya, insanlar ve ulus-devletler gibi referans nesnelerinin genel sınıflandırmasının ötesinde, iklim değişikliğinin etkisi, basit kategorizasyonları alt üst eden karmaşık bir kumaştır. "İnsanlar"ı tek tip bir referans nesnesi olarak düşünmek, toplumun farklı kesimlerinin iklim değişikliğini çok farklı şekillerde deneyimlediği ve algıladığı keskin gerçeği gizler. Örneğin, kentsel ve kırsal nüfuslar, farklı zorluklarla karşı karşıya gelirken, kırsal bölgeler, değiştirilmiş tarım modelleri ve su sıkıntısı tehditleriyle karşılaşabilirken, kentsel bölgeler iklim değişikliğinin diğer yönlerini önceliklendirebilirler. Ayrıca, kuşaklar arası farklar başka bir karmaşıklık katmanı ekler. Genç nesiller, miras alacakları çevresel sonuçlar konusunda son derece bilinçli oldukları için iklim değişikliğini genellikle acil ve varoluşsal bir kriz olarak görürler.</p>
            </div>
            <div className="page-content">
              <h3>Referans Nesnesi "Ulusal Devletler"e Genişletme, başka birçok farklılığın ortaya çıkmasına yol açar.</h3>
              <p>İklim değişikliği, farklı ülkeleri farklı şekillerde etkiler, mevcut coğrafi ve sosyo-ekonomik eşitsizlikleri vurgular. Örneğin, ada ülkeleri yükselen deniz seviyelerinin yaklaşan tehdidi ile karşı karşıyadır, bu da onları özellikle savunmasız kılar. Öte yandan, güçlü ekonomilere sahip ülkeler, uyum sağlama önlemlerini uygulamak için daha iyi donatılmış olabilirler, bu da iklim krizine karşı algılanan aciliyetlerinde ve yanıtlarında bir ayrışma yaratır. Bu algılanan farklılık ve savunmasızlık, bir tutarlı ve küresel olarak yankılanan bir güvenlik çerçevesi oluşturmaya çalışırken derin bir zorluk oluşturur. Farklı etkilere sahip olmasına rağmen kolektif eylem gerektiren yeni bir tehdit, uluslararası sistem ve kurallarının parçalanmış doğasını ve kurumsallaşmış normlarını zorlar.</p>
            </div>
            <div className="page-content">
              <p>Özünde, iklim değişikliği tarafından ortaya konulan tehditlerle başa çıkmakla kalmayıp, farklı etkilerinin nüanslı gerçeklerini de barındıran bir güvenlik çerçevesi oluşturma zorluğu, sadece bir politika zorluğu değil, aynı zamanda ahlaki bir zorunluluktur. Güvenceleme çabalarının sadece güçlü değil, aynı zamanda adil ve kapsayıcı bir yaklaşımla sağlandığından emin olur.</p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default YourNewPage;
