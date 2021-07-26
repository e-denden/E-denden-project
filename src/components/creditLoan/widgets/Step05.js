import { useEffect, useState } from "react";

export default function Step05({ setIsAuthenticated }) {

    const [ counter, setCounter ] = useState(0);

    useEffect(()=>{
        let timeout1, timeout2;
        if(counter < 100) {
          timeout1 = setTimeout(() => {
              setCounter(counter+10);
          }, 100);
        }else {
          timeout2 = setTimeout(() => {
              setIsAuthenticated();
          }, 100);
        }
        return () => {
          clearTimeout(timeout1);
          clearTimeout(timeout2);
        }
    },[counter, setIsAuthenticated]);


    return(
    <div className="loan-step-container flex flex-col justify-center items-start px-5 md:px-14 py-5 md:py-14 mb-10">
      <div className="w-full font-noto text-xl md:text-2xl font-bold">
          <p>39개 금융사에서 김지원님의</p>
          <p>대출조건을 받아오고 있어요</p>
      </div>
      <br/>
      <div className="w-full font-noto text-xl md:text-lg font-base">
          <p>안심하세요! 안전한 진행을 위해</p>
          <p>고객님 본인임을 확인하기 위한 절차입니다.</p>
      </div>
      <br/>
      <br/>
      <br/>
      <p className="w-full font-noto text-xl md:text-xl font-bold">{ counter }% 진행중...</p>
      <br/>
      <div className="round-box font-noto">
          수빈저축은행
      </div>
      <br/>
      <div className="round-box font-noto">
          미모캐피탈
      </div>
      <br/>
      <div className="round-box font-noto">
        하랑저축은행
      </div>
    </div>
    );
}