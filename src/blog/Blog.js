import CssBaseline from '@mui/material/CssBaseline';
import { /*createTheme*/ ThemeProvider } from '@mui/material/styles';
import Header from '../Header/Header';
import MainFeaturedPost from './MainFeaturedPost';
import customTheme from '../customTheme'
import Footer from '../Footer/Footer';
import image0 from '../Images/image0.jpg';
import Gallery from './Galleries/Gallery';
import './Blog.css'
import { useNavigate } from 'react-router-dom';
import "../Article/ArticlePage.css"
import { sabitLinkler,dinamikLinkler } from './Linkler';




const mainFeaturedPost = {
  title: 'İklim Güvenliği Sorunlarını Yönlendirmek',
  description:
    'İklim değişikliği, antroposentrik, ekosentrik ve devlet-merkezli perspektifleri kapsayan üç ayrı referans nesnesine tehdit olarak ortaya çıkar.',
  image: image0,
  imageText: 'main image description',
  linkText: 'Okumaya devam et',
};





export default function Blog() {

  const navigate = useNavigate();

  const handleRowClick = (path) => {
      navigate(path);
  };


  return (
    <ThemeProvider theme={customTheme}>
      <div>


      <div className='main-padding'>
            <Header/>
      <CssBaseline />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <div className='galleries-div'>
              <Gallery galleryData={sabitLinkler} seconds = {0}/>
              <Gallery galleryData={dinamikLinkler} seconds = {4} noImage={true}/>
          </div>
        <br/>
        <br/>

          <table class="climate-table">
            <thead>
                <tr>
                    <th>İklim Değişikliği Tehditleri</th>
                    <th>Birey/İnsan</th>
                    <th>Devlet</th>
                    <th>Gezegen/Ekosistem</th>
                </tr>
            </thead>
            <tbody>
                <tr onClick={() => handleRowClick('/Extreme')}>
                    <td><a to="/Extreme" className="no-underline">Aşırı Hava Olayları</a></td>
                    <td>Can ve mal kayıpları</td>
                    <td>Afet Yönetimi, Altyapı Hasarı</td>
                    <td>Ekosistemde Gerçekleşen Dönüşümler, Habitat Kaybı</td>
                </tr>
                <tr onClick={() => handleRowClick('/Food')}>
                    <td><a to="/Food" className="no-underline">Gıda Güvenliği</a></td>
                    <td>Açlık, Yetersiz Beslenme, Gıda Tedarik Zincirlerinin Bozulması, Fiyatlarda İstikrarsızlık</td>
                    <td>Gıda Tedariğinin Sağlanması, Kıtlığa İlişkin Önlemler, Ekonomik Güvenlik</td>
                    <td>Mahsul Zamanları ve Verimliliklerinde Değişiklikler, Biyoçeşitliliğin Azalması</td>
                </tr>
                <tr onClick={() => handleRowClick('/Water')}>
                    <td>Su Güvenliği</td>
                    <td>Su Kıtlığı, Temiz Suya Erişimde Zorluklar, İnsan sağlığına Yönelik Olumsuz Etkiler</td>
                    <td>Tatlı Su Kaynakları Üzerindeki Jeopolitik Gerilimler</td>
                    <td>Değişen Su Mevcudiyeti, Su Ekosistemleri Üzerinde Etkiler</td>
                </tr>
                <tr onClick={() => handleRowClick('/Economic')}>
                    <td>Ekonomik Güvenlik</td>
                    <td>Artan Yoksulluk, Ekonomik İstikrarsızlık</td>
                    <td>Ekonomik Planlama İhtiyacı, Tedarik Zinciri Aksaklıklarını Yönetme, Enerji Politikalarının Uyarlanması</td>
                    <td>Ekonomik Sektörleri Etkileyen Ekosistemlerde Bozulmalar</td>
                </tr>
                <tr onClick={() => handleRowClick('/Economic')}>
                    <td>Enerji Güvenliği</td>
                    <td>Güvenli Enerji Arzında Eşitsizlikler ve Sorunlar</td>
                    <td>Enerjiye İlişkin Zorluklar, Enerji Verimliliğinin Sağlanması, Çevre Dostu Teknolojiye Dönüşüm Gerekliliği</td>
                    <td></td>
                </tr>
                <tr onClick={() => handleRowClick('/Migration')}>
                    <td>İklim Göçü</td>
                    <td>Kitlesel Göç, Kültürel Bozulmalar</td>
                    <td>Yerinden Edilmiş Nüfusun Yönetilmesi, Kültürel Etkiler, Toplumsal</td>
                    <td>Değişen Göç Modelleri, Nüfus Hareketlerine Bağlı Olarak Ekosistemde </td>
                </tr>
                <tr onClick={() => handleRowClick('/Conflict')}>
                    <td>Silahlı Çatışma</td>
                    <td>Uluslararası/Ülke içi Yerinden Edilme, Sivil Ölümü, Silahlı Çatışmalardan Kaynaklanan Acılar</td>
                    <td>Kaynaklar Üzerinde Jeopolitik Gerilimler, Silahlı Çatışmalar</td>
                    <td>Silahlı Çatışmalar Nedeniyle Ekosistemde Bozulmaların Artması</td>
                </tr>
            </tbody>
          </table>
        </main>
        <br/>
        <br/>
        <br/>

      </div>
      <Footer/>

      </div>
      
    </ThemeProvider>
  );
}
