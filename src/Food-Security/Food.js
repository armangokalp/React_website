import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../blog/Header';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import './Food.css'
import Footer from '../blog/Footer';
import image6 from '../Images/image6.jpg';
import image7 from '../Images/image7.jpg';
import image5 from '../Images/image5.jpg';
import { sections } from '../sections';
const defaultTheme = createTheme();



const Food = () => {

    const [isEnlarged1, setIsEnlarged1] = useState(false);
    const [isEnlarged2, setIsEnlarged2] = useState(false);
    const [isEnlarged3, setIsEnlarged3] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        // You can adjust the scroll position threshold based on your needs
        if (scrollPosition > 250 && scrollPosition <800) {
            setIsEnlarged1(true);
            setIsEnlarged2(false);
            setIsEnlarged3(false);
        }
        else if (scrollPosition > 800 && scrollPosition <1200) {
            setIsEnlarged1(false);
            setIsEnlarged2(true);
            setIsEnlarged3(false);
        }
          else if (scrollPosition > 1200 && scrollPosition <1700) {
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
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <div>
                <Header title="Climate Security and Risks" sections={sections} />
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Eget velit aliquet sagittis id consectetur purus ut faucibus. Sed libero enim sed faucibus turpis in. 
                            </p>
                            <img className='food-img right' src='https://static.vecteezy.com/system/resources/previews/016/733/039/original/hand-drawn-fruit-basket-illustration-png.png'/>
                        </div>

                        <div className={`food-general-div ${isEnlarged2 ? 'enlarged' : ''}`}>
                            <div className='food-full-img' src='https://gfi.org/wp-content/uploads/2022/10/POL220137_Climate-Advisers-web-graphics_header-feature.jpg'/>                     </div>
                        <div className="divider" />

                        <div className={`food-general-div ${isEnlarged3 ? 'enlarged' : ''}`}>
                            <p className="food-explain-p right">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Eget velit aliquet sagittis id consectetur purus ut faucibus. Sed libero enim sed faucibus turpis in. 
                            </p>
                            <img className='food-img left' src='https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Sandwich_PNG_Clipart_Vector_Picture.png?m=1434276763'/>
                        </div>
                    </div>
                </main>
            </div>
            <Footer
                title="Climate Security and Risks"
                description="Arman Gökalp - Ali Vehbi Güneysu"
            />
        </ThemeProvider>
    )
}

export default Food;
