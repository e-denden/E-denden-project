import item11Png from "../../../assets/main/item-11.png";
import item12Png from "../../../assets/main/item-12.png";

export default function Container04() {
    return (
    <div className="w-full flex justify-center items-center" style={{backgroundColor:"#4c95f7", height: "499px"}}>
        <div className="flex flex-col items-center">
            <span className="font-noto text-white font-bold text-3xl sm:text-6xl">e-든든 고객센터</span>
            <div className="flex justify-center items-center">
                <img src={item11Png} alt="item-11-img" className="w-2/12 sm:w-auto"/>
                <img src={item12Png} alt="item-11-img" className="w-9/12 sm:w-auto"/>
            </div>
            <span className="font-noto text-white px-16 sm:px-0 text-lg sm:text-4xl">국가공인 자격을 취득한 전문대출 상담사가 상담해드립니다.</span>
        </div>
    </div>
    );
}