import { useState } from "react";
import LoanList from "./widgets/LoanList";
import Step01 from "./widgets/Step01";
import Step02 from "./widgets/Step02";
import Step03 from "./widgets/Step03";
import Step04 from "./widgets/Step04";
import Step05 from "./widgets/Step05";


export default function CreditLoan() {
  
  const [step, setStep] = useState(1);
  const [finishedStep, setFinishedStep] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userGrade, setUserGrade] = useState(1);

  return(
  <div className="w-full min-h-screen flex flex-col justify-center items-center" style={{backgroundColor: "#f6f9ff"}}>
    <div className="w-full md:w-4/12 flex flex-col justify-center items-center text-2xl md:text-3xl color-blue font-noto mb-5 mt-10">
      <div className="font-kotra main-text-item">e-든든</div>
      <div className="color-dark-blue font-bold">대출 최저금리 찾기</div>
    </div>
    { step === 1 && <Step01 incrementStep={() => setStep(step+1)} /> }
    { step === 2 && <Step02 incrementStep={() => setStep(step+1)}/> }
    { step === 3 && <Step03 incrementStep={() => setStep(step+1)}/> }
    { 
      step === 4 && 
      <Step04 
        setIsFinished={() => { 
          setStep(0);
          setFinishedStep(true); 
        }} 
      /> 
    }
    { 
      finishedStep && 
      <Step05 
        setIsAuthenticated={() => {
          setFinishedStep(false);
          setIsAuthenticated(true);
        }}
        setUserGrade={setUserGrade}
      /> 
    }
    { isAuthenticated && <LoanList userGrade={userGrade}/> }
  </div>
  );
}