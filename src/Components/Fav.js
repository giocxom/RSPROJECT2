import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FavContext from "./Contexts/favContext"
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";
import HEART from '../images/HEART.png'

export default function Fav(){
    const {Fav, setFav} = useContext(FavContext);
    const {t} = useTranslation();
    
    return (
        <section className="FavSection">
        <div >
            
            {
                Fav.map((item2)=>{
                    return(
                        
                        <div className="FavMainDiv" key={item2.id}>
                            <div className="FavDiv">
                            <img src={HEART}/>
                            <img src={item2.img}/>
                            <h2>{t(item2.title)}</h2>
                            
                            </div>

                        </div>
                    )
                })
            }
            <div>
            <Link to='Buy'></Link>
        </div>
        </div>
        
        </section>
    )
        }