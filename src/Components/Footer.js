import VISA from '../images/VISA.png'
import MASCARD from '../images/MASCARD.png'
import AMEX from '../images/AMEX.png'
import TESTCARD2 from '../images/TESTCARD2.png'
import AVERSY2 from '../images/AVERSY2.png'
import CHAT from '../images/CHAT.png'

import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";


export default function Footer(){
    const {t} = useTranslation();

    return(


        
        <footer className="FooterSec">
            <div className="FooterMainDiv">
                <div className='FooterImgDiv'>
                    <img className='AVERSY' src={AVERSY2}/>
                    <img className='CARDS' src={TESTCARD2}/>
                    
                </div>
                <div className='FooterTextDiv'>
                    <h2>{t('Company')}</h2>
                    <p>{t('About us')}</p>
                    <p>{t('News')}</p>
                    <p>{t('Aphotecas')}</p>
                    <p>{t('Clinics')}</p>
                </div>
                <div className='FooterTextDiv'>
                <h2>{t('Information')}</h2>
                    <p>{t('Bonus system')}</p>
                    <p>{t('Information base')}</p>
                    <p>{t('Prices')}</p>
                </div>
                <div className='FooterTextDiv'>
                <h2>{t('Help')}</h2>
                    <p> {t('Returns')}</p>
                    <p> {t('Order')}</p>
                    <p> {t('Order purchase')}</p>
                    <p>{t('Rules')}</p>
                </div>
                <div className='FooterLastDiv2'>
                    <div className='FooterLastDiv'>
                        <p>{t('ONLINE HELP')} </p>
                        <img src={CHAT}/>
                    </div>
                    <p>© 2020 {t('aversi,LTD.All rights reserved.')}</p>
                </div>
            </div>
        </footer>
    )
}