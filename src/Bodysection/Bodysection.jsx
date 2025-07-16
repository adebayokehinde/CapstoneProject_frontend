import Bodyimage from '../assets/Selection.png';
import style from './Bodysection.module.css';

function Bodysection(){
    return(
        <>
            <div>
                <img src={Bodyimage} alt='Selection' className={style.Image} />
            </div>
            <div className={style.text}>
                <strong>Your Trusted Partner in Global Logistic</strong>
            </div>
            <div className={style.text2}>
                <p>Streamline your shipment and conquer supply chain challenges with SwiftShip Logistics</p>
            </div>
        </>
    )
};
export default Bodysection;
