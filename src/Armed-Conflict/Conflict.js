import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./Conflict.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import customTheme from '../customTheme';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { sections } from '../sections';
import { useScrollToTop } from '../blog/useScrollToTop';
import image1 from "../Images/conflict0.jpeg";
import image2 from "../Images/conflict2.jpeg";



let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const conflictData = [
    { id: 1, lat: 48.3794, lng: 31.1656, title: "Ukraine Conflict", description: "Russo-Ukrainian War: A major conflict in Eastern Europe affecting the global geopolitical landscape." },
    { id: 2, lat: 34.8021, lng: 38.9968, title: "Conflict in Syria", description: "A multi-sided civil war with international involvement, leading to a major humanitarian crisis." },
    { id: 3, lat: 17.5707, lng: 3.9962, title: "Insurgency in the Maghreb", description: "Mali War: Armed conflicts in the Maghreb region, particularly affecting Mali with significant displacement of people." },
    { id: 4, lat: 23.6345, lng: 102.5528, title: "Mexican Drug War", description: "A conflict between government forces and various drug trafficking organizations, causing widespread violence." },
    { id: 5, lat: 9.145, lng: 40.4897, title: "Ethiopian Civil Conflict", description: "An ongoing conflict in Ethiopia with significant regional and ethnic implications." },
    { id: 6, lat: 12.8628, lng: 30.2176, title: "War in Sudan", description: "A series of conflicts in Sudan, including the Darfur genocide, leading to severe humanitarian issues." },
    { id: 7, lat: 4.5709, lng: 74.2973, title: "Colombian Conflict", description: "An armed conflict in Colombia, primarily involving government forces and guerrilla groups." },
    { id: 8, lat: 33.9391, lng: 67.7099, title: "Afghan Conflict", description: "Longstanding conflict in Afghanistan, involving various domestic and international actors." },
    { id: 9, lat: 5.1521, lng: 46.1996, title: "Somali Civil War", description: "Ongoing conflict in Somalia, involving government forces, regional players, and extremist groups." },
    { id: 10, lat: 4.0383, lng: 21.7587, title: "Conflict in the Congo", description: "Armed conflicts in the Democratic Republic of the Congo, particularly involving the Allied Democratic Forces." },
    { id: 11, lat: 9.082, lng: 8.6753, title: "Nigerian Conflicts", description: "Communal conflicts in Nigeria, often related to resources, religion, and ethnicity." },
    { id: 12, lat: 33.2232, lng: 43.6793, title: "Iraqi Conflict", description: "Ongoing conflict in Iraq, influenced by sectarian divisions and international interventions." },
    { id: 13, lat: 34.9526, lng: 72.3311, title: "Insurgency in Pakistan", description: "Insurgency in Khyber Pakhtunkhwa, Pakistan, involving various militant groups and government forces." }
];

const Conflict = () => {
    useScrollToTop();

    const [openImage, setOpenImage] = useState(null);
    const [imageScale, setImageScale] = useState(1);

    const handleImageClick = (image) => {
        setOpenImage(image);
        setImageScale(1.3);
    };

    const handleCloseModal = () => {
        setOpenImage(null);
        setImageScale(1);
    };

    return (
        <ThemeProvider theme={customTheme}>
        <div className="main-padding">
        <Header activeSection={5}/>
            
            <main>

                <div className="armed-intro-section">
                    <h1 className="section-title">
                        Azalan Kaynaklar Sonucu Silahlı Çatışma
                    </h1>
                </div>
                <div className="migration-divider"/>

                <div className="armed-causes-section">
                    <h3>İklim Değişikliğinin Silahlı Çatışmaya Etkisi</h3>
                    <p className="conflict-explain-p-larger">
                    İklim değişikliği doğrudan çatışmaya neden olmasa da, toplumlardaki mevcut kırılganlıkları ve stres faktörlerini artırarak bir tehdit çarpanı görevi görmektedir. Bir başka ifadeyle, iklim değişikliği genellikle çatışmanın temelini oluşturan eşitsizlikleri ve kırılganlıkları artırmakta ve birleştirmektedir. Deniz seviyesinin yükselmesi, arazi bozulması, kıyı erozyonu, aşırı sıcaklık gibi iklim değişikliğinin etkileri, tüm alanları yaşanmaz hale getirmekte, kırsal geçim kaynaklarının yaşanabilirliğini tehdit etmekte ve kaynaklar üzerindeki rekabeti teşvik etmektedir. Örneğin, yağış düzenindeki değişiklikler, kuraklık ve kıtlık bir toplumda halihazırda var olan mevcut gerilimleri artırmaktadır. Kıt kaynaklar için rekabet, özellikle bu kaynaklara erişimin hayatta kalmak için çok önemli olduğu bölgelerde gerilimleri artırmakta ve çatışmalara katkıda bulunmaktadır.                     </p>
                </div>
                <div className="section-image0" onClick={() => handleImageClick(image1)}> </div>

                <div className="armed-causes-section">
                    <h3>İklim Değişikliği ve Kaynak Çatışmalarının Yıkıcı Etkileri</h3>
                    <p className="conflict-explain-p-larger">
                    Aşırı hava olayları, seller ve sıcak hava dalgaları gibi iklimle ilgili olaylar tarımı etkileyerek ürün kıtlığına, gıda fiyatlarında artışa ve geçim kaynaklarının kaybına yol açmaktadır. Bu durum ekonomik istikrarsızlığa neden olmakta ve topluluklar kaynaklar için rekabet etmekte, ve böylece çatışma riskini artmaktadır. Dolayısıyla, iklimle ilgili stresler mevcut yönetişim sorunlarını daha da kötüleştirerek hükümetlerin temel hizmetleri sağlamasını, krizlere müdahale etmesini ve sosyal düzeni korumasını zorlaştırmaktadır. Düşük gelirli ülkeler, kırılgan ve istikrarsız siyasi ortamlarda üstesinden gelinmesi özellikle zor olan ekonomik şoklar, zorunlu göç ve siyasi kurumların bozulması riskiyle daha fazla karşı karşıyadır.  İklim değişikliği ve çatışma arasındaki ilişki karmaşık ve bağlama özgüdür, ancak iklim değişikliğinin gıda güvensizliğini, su kıtlığını ve kaynak rekabetini artırırken geçim kaynaklarını bozan ve göçü teşvik eden bir tehdit çarpanı olduğu bir gerçektir.                     </p>
                </div>
                <div className="section-image" onClick={() => handleImageClick(image2)}> </div>

                <div className="armed-causes-section">
                    <h3>Devam Eden Çatışmaların Küresel Haritası</h3>
                    <p className="conflict-explain-p-larger">
                        Aşağıdaki harita, iklim değişikliği tarafından daha da kötüleştirilen dünya genelindeki devam eden çatışmaları göstermektedir.
                    </p>
                    <MapContainer center={[30, 30]} zoom={3} style={{ height: '500px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {conflictData.map(conflict => (
                            <Marker 
                                key={conflict.id} 
                                position={[conflict.lat, conflict.lng]} 
                                icon={DefaultIcon}
                            >
                                <Popup>
                                    <h3>{conflict.title}</h3>
                                    <p>{conflict.description}</p>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
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

export default Conflict;


