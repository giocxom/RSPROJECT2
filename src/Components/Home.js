import { useContext, useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,FreeMode } from 'swiper';
import HEART from '../images/HEART.png'
import basket from '../images/basket.png'
import calendar from '../images/calendar.png'
import IDMAN from '../images/IDMAN.png'
import { Link, useParams } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Catalog from './Catalog';
import Clinics from './Clinics';
import Apothecas from './Aphotecas';
import Aplication from './Aplication';
import CartContext from './Contexts/cartContext';
import FavContext from './Contexts/favContext';
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";




export default function About(){
    const {t} = useTranslation();




    const[fetchedData2,setFetchedData2]=useState([]);
    const {list,setList}=useContext(CartContext);
    const {Fav,setFav} = useContext(FavContext);

     useEffect(()=>{
        fetch("https://giocxom.github.io/Fake-Api2/Information.json")
        .then((response)=>response.json())
        .then((data)=>setFetchedData2(data.Information));
    },[]);





    const[fetchedData,setFetchedData]=useState([]);
    
    useEffect(()=>{
        fetch("https://giocxom.github.io/Fake-Api/products.json")
        .then((response)=>response.json())
        .then((data)=>setFetchedData(data.Products));
    },[]);

    

    function addProduct(producti){
        const filteredList = list.filter((item2)=> item2.id === producti.id);
        if (filteredList.length === 0){
            producti.quantity = 1;
            setList([...list,producti]);
        } else{
            producti.quantity = producti.quantity + 1;
        }
    }
    function addFav(favourite){
        const favouriteList = Fav.filter((item2)=> item2.id === favourite.id);
        if (favouriteList.length === 0){
            favourite.quantity = 1;
            setFav([...Fav,favourite]);
        } else{
            favourite.quantity = favourite.quantity + 1;
        }
    }





    return(
        <section>
            <div>
                <div>
                <div className='TestDiv'>
            <h3>{t('Top products')}</h3>
            <Swiper
                            slidesPerView ={3}
                            spaceBetween={50}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="CatalogSwiper"
                          ><div className='grid'>
                {
                    fetchedData.map((item2)=>{
                        return(
                            

                            <SwiperSlide
                          className='SwiperTest'><div className='ProductBox' key={item2.id}>
                            
                                <img className='Like'  onClick={()=> addFav(item2)} src={HEART}/>
                                <img className='ProductBoxImg' src={item2.img}/>
                                <h1 key={item2.id}>{t('Type')} : {t(item2.title)}</h1>
                                <h2 key={item2.id}>{t('Price')}: {item2.price} {t('GEL')}</h2>
                                <div className='ProductBoxDiv'>
                                <Link className='HomeLink2' to={`${item2.id}`}>{t('Info')}</Link>
                                <button className='HomeLink2'  onClick={()=> addProduct(item2)}>{t('Add')}</button>
                                </div></div>
                                
                                </SwiperSlide>
                        )
                    })
                }
            </div></Swiper>
            </div>
                
                </div>















                
                <div className='AboutMainDiv'>
              <h2>{t('Top sale')}</h2>
                

              












            
            
            
            
            
            <Swiper
                            slidesPerView={3}
                            spaceBetween={50}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="AboutSwiper"
                          >
                          <div className='AboutGrid'>
                {
                    fetchedData2.map((item)=>{
                        return(
                            <SwiperSlide
                          className='AboutSlide'>
                            <div className='AboutBox' key={item.id}>
                                <Link className='HomeLink'  to={`${item.id}`}>{t('See more')}</Link>
                                <img className='AboutBoxImg' src={item.img}/>
                        
                                 <div className='TextBox'>
                                <h1 key={item.id}>{item.date}</h1>
                                <h2 key={item.id}> {t(item.annotation)}</h2>
                                
                                </div>
                                </div>
                                </SwiperSlide>
                        )
                    })
                }
                </div></Swiper>
                <Catalog/>
                <Aplication/>
            </div>
             
            </div>
        </section>
    )
}