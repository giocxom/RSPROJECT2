import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "./Contexts/cartContext"
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

export default function Cart(){
    const {list, setList} = useContext(CartContext);
    const {t} = useTranslation();
    
    return (
        <section className="CartSection">
        <div className="Cart123">
            
            {
                list.map((item2)=>{
                    const pasi= item2.price * item2.quantity;
                    return(
                        
                        <div className="CartMainDiv" key={item2.id}>
                            <div className="CartDiv">
                            <img src={item2.img}/>
                            <h2>{t(item2.title)}</h2>
                            <h2>{t('Price')}: {pasi} {t('GEL')}</h2>
                            <div className="CartSumDiv">
                            <button onClick={''}>+</button>
                            <h2>{item2.quantity}</h2>
                            <button>-</button>
                            </div>
                            
                            </div>

                        </div>
                    )
                })
            }
            <div>
            <Link to='Buy'></Link>
            <div>
                
            </div>
        </div>
        </div>
        
        </section>
    )
}