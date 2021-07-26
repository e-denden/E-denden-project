import Header from "../shared/Header";

import Item01 from "../../assets/calc/item01.png";
import Item02 from "../../assets/calc/item02.png";
import Item03 from "../../assets/calc/item03.png";

export default function CarcLoan() {
    return(
        <div className="w-full flex flex-col items-center">
        <Header/>
        <div 
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                width:"100%",
                height:"239px",
                background:"#f6f9ff"
            }}
        >
            <div
                style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"flex-start"
                }}
            >
                <img src={Item01} alt="img" />
                <img src={Item02} alt="img" />
            </div>
            
        </div>
        <img src={Item03} alt="img" className="calc-img"/>
    </div>
    );
}