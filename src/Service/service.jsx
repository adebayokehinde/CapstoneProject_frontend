import style from './service.module.css';
import express from '../assets/express.png';
import customs from '../assets/customs.png';
import time from '../assets/time.png';

function Service() {
    return (
        <div>
        <div className={style.serviceContainer}>
            <div className={style.first}>
                <img src={express} alt="express"/>
                <h2>Express Delivery</h2>
                <p>Fast and reliable delivery for urgent shipments across the globe</p>            
            </div>
            <div className={style.second}>
                <img src={customs} alt="custom"/>
                <h2>Customs Clearance</h2>
                <p>Hassle-free custom processing for international shipping.</p>
            </div>
            <div className={style.third}>
                <img src={time} alt="time"/>
                <h2>Real-time Track</h2>
                <p>Monitor your shipments with precision.</p>
            </div>
        </div>
        
        </div>

    )
};
export default Service;