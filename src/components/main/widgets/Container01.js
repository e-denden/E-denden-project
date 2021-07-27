import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import item01Png from "../../../assets/main/item-01.png";
import item02Png from "../../../assets/main/item-02.png";
import item03Png from "../../../assets/main/item-03.png";
import item00Png from "../../../assets/main/update/item00.png";
import item001Png from "../../../assets/main/update/item01.png";
import item002Png from "../../../assets/main/update/item02.png";
import item003Png from "../../../assets/main/update/item03.png";

export default function Container01() {

    const [slide, setSlide] = useState(1);

    useEffect(() => {
        let slide1, slide2;
        let TIME = 3000;
        
        if(slide < 4) {
            if(slide === 1) TIME = 2000;

            slide1 = setTimeout(() => {
                setSlide(slide+1);
            }, TIME);
        }
        else 
            slide2 = setTimeout(() => {
                setSlide(1);
            }, 1000);
        
        return () => {
            clearTimeout(slide1);
            clearTimeout(slide2);
        }
    },[slide]);

    let marginTop = "0px";
    let transition = ".5s";
    if( slide === 1) {
        transition = "none";
    }
    if( slide === 2) {
        marginTop ="-147px";
    }
    else if( slide === 3 ) {
        marginTop = "-294px";
    }
    else if( slide === 4 ) {
        marginTop = "-441px";
        //transition = "none";
    }
    const styles = { 
        marginTop: marginTop,
        transition: transition
    }
    
    return (
    <>
    <div className="relative w-full h-screen flex justify-center items-center">
        {/* 상담대표전화
        <div className="absolute right-3 sm:right-32 md:right-60 top-5">
            <div className="flex flex-col items-end">
                <img src={item01Png} alt="Counseling Phone img" className="w-8/12 md:w-auto"/>
                <span className="font-noto font-medium color-blue text-sm md:text-base">국가공인 자격을 취득한 전문대출 상담사가 상담해드립니다.</span>
            </div>
        </div> */}
        <div className="flex flex-col items-center">
            <img src={item02Png} alt="item-02-img" className="w-8/12 sm:w-auto"/>
            <div className="relative hidden sm:flex justify-end overflow-hidden" style={{width: "550px"}}>
                <div className="absolute left-0"
                    style={styles}
                >
                    <img src={item001Png} alt="item-03-img" className="img"/> 
                    <img src={item002Png} alt="item-03-img" className="img"/> 
                    <img src={item003Png} alt="item-03-img" className="img"/> 
                    <img src={item001Png} alt="item-03-img" className="img"/> 
                </div>
                <img src={item00Png} alt="item-03-img"/>
            </div>
            <img src={item03Png} alt="item-03-img" className="sm:hidden w-9/12"/>
            <Link to="/credit-loan" className="border px-8 sm:px-16 py-4 sm:py-7 rounded-2xl sm:rounded-3xl" style={{backgroundColor: "#003da7"}}>
                <span className="text-sm sm:text-3xl font-noto text-white">신용대출 한도 간편조회</span>
                <i className="fas fa-chevron-right text-white text-3xl ml-5"></i>
            </Link>
            <span className="font-noto font-medium text-sm sm:text-xl color-blue mt-1 sm:mt-3">대출조건 조회 시 신용 등급에 영향이 없습니다.</span>
        </div>
    </div>
    </>
    );
}