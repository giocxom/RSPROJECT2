import Logo from '../images/Logo.png'
import SEARCH from '../images/SEARCH.png'
import USER from '../images/USER.png'
import SEARCH2 from '../images/SEARCH2.png'
import USER2 from '../images/USER2.png'
import HEART from '../images/HEART.png'
import basket from '../images/basket.png'
import HEART2 from '../images/HEART2.png'
import basket2 from '../images/basket2.png'
import Bar from '../images/Bar.png'
import LANG from '../images/language.jpg'
import Doctor1 from '../images/Doctor1.jpg'
import Doctor2 from '../images/Doctor2.jpg'
import Doctor3 from '../images/Doctor3.jpg'
import Doctor4 from '../images/Doctor4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Apothecas from './Aphotecas'
import About from './About'
import Catalog from './Catalog'
import Home from './Home'
import { useContext, useRef, useState } from 'react'
import Aplication from './Aplication'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import Fav from './Fav'
import ThemeContext from './Contexts/ThemeContext'
import { useEffect} from 'react'
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";






export default function Header(){

  const [toggleMenu,setToggleMenu]=useState(false);
  const [screenWidth,setscreenWidth]=useState(window.innerWidth);
  

  const toggleNav = ()=>{
      setToggleMenu(!toggleMenu);
  }
  useEffect(()=>{
       const changeWidth=()=>{
          setscreenWidth(window.innerWidth)
  }
  window.addEventListener('resize', changeWidth)
},[])












    const {t} = useTranslation();
    const [language,setLanguage] = useState('en');
    useEffect(()=>{
      handleLanguageChange
      (language);
    },[language]);
  
    function handleLanguageChange(lng){
      i18n.changeLanguage(lng);
    }






    const [onBasket, setOnBasket]=useState(false);
    const [onLike, setLike]=useState(false)
    const ref = useRef(null);
    const {theme,setTheme}= useContext(ThemeContext);
    function changeTheme (){
        if(theme === 'light'){
          setTheme ('dark')
        } else {
          setTheme('light')
        }
      }
    
    const navigation =[
                'Catalog',
                'Clinics',
                'Aphotecas',
            
        ];
    
    
    
    return(
         
        <section className='HeaderSection'>
            
        <div className='HeaderMainDiv'>
            
      <button className='LANGBUT' onClick={()=> language === 'en'? setLanguage('ka') : setLanguage('en')}><img src={LANG}/></button>




            <div className='Logo'>
            <img className='Logo' src={Logo}/>
            <div className='SwitchThemeDiv2'>
                            
                            
                            <label class="SwitchTheme">
                              <input  onClick={changeTheme} type="checkbox"/>
                              <span class="SliderTheme"></span>
                            </label>
                            
                            
                            </div>
            </div>
            <div className='HeaderMainSectionDiv'> 
            <div className='SearchDiv'>
               <button className='Search' type='search' ><img src={SEARCH}/></button>
                <input className='SearchInput' type="search" id="HeaderSearch" placeholder={t('Drug search...')}/>
            </div>
               <img src={USER}/>
               <img onClick={()=> setLike(!onLike)} className={`BasketImg ${onLike &&'BasketActive'}`} src={HEART}/>
               <img onClick={()=> setOnBasket(!onBasket)} className={`BasketImg ${onBasket &&'BasketActive'}`} src={basket}/>
               <div className='SwitchThemeDiv'>
                            
                            
                            <label class="SwitchTheme">
                              <input  onClick={changeTheme} type="checkbox"/>
                              <span class="SliderTheme"></span>
                            </label>
                            
                            
                            </div>
                            
               {
                onBasket && (

                    <div className='BasketDiv'>
                           <Cart/>
                    </div>
                )
               }
               {
                onLike && (

                    <div className='BasketDiv2'>
                           <Fav/>
                    </div>
                )
               }
            </div>
            
        </div>
        <div className='HeaderMainDiv2'>
             <nav className='Nav'>
                <ul className='Ul'>
                <li   className='Li'>
                <button className='LiButton' onClick={toggleNav}><img src={Bar}/></button><Link to='/'>{t('Home')}
                    </Link>
                        
                        </li>
                    
                    {
                        navigation.map((li,index)=>{
                            return(
                                <li style={{
                                  backgroundColor: toggleMenu ? 'red' : '',
                                  padding: toggleMenu ? '10px 50px' : '', }}
                                 key={index}>{(toggleMenu || screenWidth > 1000) && (
                                  
                                    <Link to={`${li === 'Home' ? '/' : li}`}>{t(li)}</Link>
                                
                                    )} </li>
                           
                            )
                        })
                    }
                    
                 </ul>
             </nav>
              






             <div className='HeaderMainSectionDiv2'> 
            <div className='SearchDiv'>
               <button className='Search' type='search' ><img src={SEARCH}/></button>
                <input className='SearchInput' type="search" id="HeaderSearch" placeholder={t('Drug search...')}/>
            </div>
               <img src={USER2}/>
               <img onClick={()=> setLike(!onLike)} className={`BasketImg ${onLike &&'BasketActive'}`} src={HEART2}/>
               <img onClick={()=> setOnBasket(!onBasket)} className={`BasketImg ${onBasket &&'BasketActive'}`} src={basket2}/>
               <div className='SwitchThemeDiv'>
                            
                            
                            <label class="SwitchTheme">
                              <input  onClick={changeTheme} type="checkbox"/>
                              <span class="SliderTheme"></span>
                            </label>
                            
                            
                            </div>
               {
                onBasket && (

                    <div className='BasketDiv'>
                           <Cart/>
                    </div>
                )
               }
               {
                onLike && (

                    <div className='BasketDiv2'>
                           <Fav/>
                    </div>
                )
               }
            </div>







              
        </div>
        <div className='SwiperDiv'>
        <Swiper 
        pagination={{
            clickable: true,
          }}
        modules={[Pagination]}
        loop={true} 
        className="mySwiper">
        <SwiperSlide className='SwiperTest1'>
            <img src={Doctor1}/>
            <div className='InSwiperDiv1'>
            <p>{t('Create your own personal pharmacy shelf')}</p>
            <div className='H4Div'>
            <p>{t('Learn more')}...</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='SwiperTest2'>
            <img src={Doctor2}/>
            <div className='InSwiperDiv2'>
            <p>{t('Meet our doctors')}</p>
            <div className='H4Div'>
            <p>{t('Learn more')}...</p>
            </div>
            </div>
            </SwiperSlide>

        <SwiperSlide className='SwiperTest3'>
            <img src={Doctor3}/>
            <div className='InSwiperDiv3'>
            <p>{t('Buy with our bonus card and collect points')}</p>
            <div className='H4Div'>
            <p>{t('Learn more')}...</p>
            </div>
            </div>
            </SwiperSlide>

        <SwiperSlide className='SwiperTest4'>
            <img src={Doctor4}/>
            <div className='InSwiperDiv4'>
            <p>{t('Aversi by your side')}</p>
            <div className='H4Div'>
            <p>{t('Learn more')}...</p>
            </div>
            </div>
            </SwiperSlide>

      </Swiper>
        </div>
        
      
        </section>
    );
}