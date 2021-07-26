import { Link } from "react-router-dom";
import item0401Png from "../../../assets/main/item-04-01.png";
import item04Png from "../../../assets/main/item-04.png";
import item05Png from "../../../assets/main/item-05.png";

export default function Container02() {
    return (
    <>
    <div className="w-full hidden sm:flex justify-center items-center" style={{backgroundColor: "#f6f9ff", height: "766px"}}>
        <div className="flex flex-col items-center">
            <img src={item0401Png} alt="item-04-01-img" className="mb-3"/>
            <img src={item04Png} alt="item-04-img" className="mb-3"/>
            <Link className="center-box-image-03-item" to="/loan-interest-calculator">
                <img src={item05Png} alt="item-05-img" />
            </Link>
        </div>
    </div>
    <div className="w-full flex sm:hidden justify-center items-center" style={{backgroundColor: "#f6f9ff", height: "360px"}}>
        <div className="flex flex-col items-center">
            <img src={item0401Png} alt="item-04-01-img" className="mb-3 w-9/12"/>
            <img src={item04Png} alt="item-04-img" className="mb-3 w-9/12"/>
            <Link className="flex justify-center" to="/loan-interest-calculator">
                <img src={item05Png} alt="item-05-img" className="w-8/12"/>
            </Link>
        </div>
    </div>
    </>
    );
}