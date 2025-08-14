import Bodyimage from '../assets/Selection.png';
import style from './Bodysection.module.css';
import { useNavigate } from 'react-router-dom';


function Bodysection(){
    const navigate = useNavigate();
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
            <div >
            <button className={style.Bookride} onClick={() => navigate('/map')}>
                 Book a Ride
            </button>
            </div>
        </>
    )
};
export default Bodysection;
