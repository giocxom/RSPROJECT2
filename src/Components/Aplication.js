import PHONE from '../images/PHONE.png'
import AVERSY from '../images/AVERSY.png'
import APPLE from '../images/APPLE.png'
import GOOGLE from '../images/GOOGLE.png'
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";




export default function Aplication(){
    const {t} = useTranslation();

    return(
        <section className='AplicationSection'>
            <div className='AplicationMainDiv' >
            <div className='AplicationPhoneDiv'>
                <img className='IMG1' src={PHONE}/>
                <img className='IMG2' src={AVERSY}/>
            </div>
            <div className='AplicationTextDiv'>
                <h2>{t('Download Aversy mobile App')}</h2>
                <ul className='UL'>
                    <li><p>{t('Order from home')}</p></li>
                    <li><p>{t('See the whole catalog')}</p></li>
                    <li><p>{t('Check your points on Aversy card')}</p></li>
                    <li><p>{t('See Aversys near you')}</p></li>
                </ul>
                <div className='DownloadDiv'>
                    <img src={GOOGLE}/>
                    <img src={APPLE}/>
                </div>
            </div>
            </div>
        </section>
    )
}