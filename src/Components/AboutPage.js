import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

export default function AboutPage(){
    const [info2,setInfo2] = useState([]);
    let params2 = useParams();
    const {t} = useTranslation();
    
    
    
    useEffect(()=>{
        fetch("https://giocxom.github.io/Fake-Api/products.json")
        .then((response)=> response.json())
        .then((data)=>setInfo2(data.Products));
    },[]);
   
   
    const [info,setInfo] = useState([]);
    let params = useParams();
    
    
    
    useEffect(()=>{
        fetch("https://giocxom.github.io/Fake-Api2/Information.json")
        .then((response)=> response.json())
        .then((data)=>setInfo(data.Information));
    },[]);
    
    
    
    return(
        <section className="AboutDivSec">
            <div>
             {
                info.filter(item => item.id == params.id).map(product =>{
                        return(
                            <div className="ProductDiv">
                            <img src={product.img}/>
                            <h2>{t(product.annotation)}</h2>
                            </div>
                        )
                    }
                )
             }
             </div>
             <div>
             {
                info2.filter(item => item.id == params2.id).map(product2 =>{
                        return(
                            <div className="Product2Div">
                            <img src={product2.img}/>
                            <div className="Product2Div2">
                            <h2> {t('Type')} : {t(product2.title)}</h2>
                            <p>{t('Price')} : {product2.price} {t('GEL')}</p>
                            <h3> {t('Annotation')} : {t(product2.annotation)}</h3>
                            </div>
                            </div>

                        )
                    }
                )
             }
             </div>
        </section>
    )
}