import AID from '../images/AID.png'
import PILL from '../images/PILL.png'
import LIPS from '../images/LIPS.png'
import BABY from '../images/BABY.png'
import EYE from '../images/EYE.png'
import SOAP from '../images/SOAP.png'
import GTOOL from '../images/GTOOL.png'
import LEAVE from '../images/LEAVE.png'
import OTHER from '../images/OTHER.png'
import VITAMIN from '../images/VITAMIN.png'

import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";






export default function Catalog(){

    const {t} = useTranslation();




    return(
        <section className="CataSection">
            <h3>{t('Catalog')}</h3>
            <div className="CataMainDiv">
                <div className="CataSecondaryDiv">
                    <img src={PILL}/>
                    <h6>{t('Aids')}</h6>
                    </div>
                <div className="CataSecondaryDiv">
                    <img src={LIPS}/>
                    <h6>{t('Beauty')}</h6>
                    </div>
                <div className="CataSecondaryDiv">
                    <img src={BABY}/>
                    <h6>{t('Children')}</h6>
                    </div>
                <div className="CataSecondaryDiv">
                    <img src={VITAMIN}/>
                    <h6>{t('Orthopedia')}</h6>
                    </div>
                <div className="CataSecondaryDiv">
                    <img src={EYE}/>
                    <h6>{t('Optics')}</h6>
                    </div>
                <div className="CataSecondaryDiv">
                    <img src={SOAP}/>
                    <h6>{t('Hygiene')}</h6>
                    </div>
                <div className="CataSecondaryDiv">
                    <img src={GTOOL}/>
                    <h6>{t('Dyagnostic')}</h6>
                    </div>
                <div className="CataSecondaryDiv">
                    <img src={AID}/>
                    <h6>{t('First aid')}</h6>
                    </div>
                <div className="CataSecondaryDiv">
                    <img src={LEAVE}/>
                    <h6>{t('Grass')}</h6>
                    </div>
                <div className="CataSecondaryDiv">
                    <img src={OTHER}/>
                    <h6>{t('Other')}...</h6>
                    </div>
                
            </div>
        </section>
    )
}