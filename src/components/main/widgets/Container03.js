import item06Png from "../../../assets/main/item-06.png";
import item07Png from "../../../assets/main/item-07.png";
import item08Png from "../../../assets/main/item-08.png";
import item09Png from "../../../assets/main/item-09.png";
import item10Png from "../../../assets/main/item-10.png";

export default function Container03() {
    return (
    <div className="w-full flex justify-center items-center" style={{height: "675px"}}>
        <div className="flex flex-col">
            <div className="mb-2 sm:mb-12 pl-10 sm:pl-5">
                <img src={item06Png} alt="item-06-img" className="w-7/12 sm:w-auto"/>
            </div>
            <div className="flex justify-center items-center">
                <img src={item07Png} alt="item-07-img" className="w-3/12 mr-4 sm:mr-0 md:w-auto"/>
                <img src={item10Png} alt="item-10-img" className="hidden sm:block mx-3"/>
                <img src={item08Png} alt="item-08-img" className="w-3/12 mr-4 sm:mr-0 md:w-auto"/>
                <img src={item10Png} alt="item-10-img" className="hidden sm:block mx-3"/>
                <img src={item09Png} alt="item-09-img" className="w-3/12 md:w-auto"/>
            </div>
        </div>

    </div>
    );
}