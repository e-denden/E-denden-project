import { useState } from "react";
import { useDispatch } from "react-redux";
import moneyFormat from "../../../utils/moneyFormat";

export default function FilterModal({isOpened, setIsOpened}) {

  const [filterInput, setFilterInput] = useState({
    minInterestRate: 0,
    maxInterestRate: 0,
    minMaxLimit: 0,
    maxMaxLimit: 0,
    minRepaymentPeriod: 0,
    maxRepaymentPeriod: 0
  });

  const dispatch = useDispatch();

  const inputChange = ( e ) => {
      let value = e.target.value;
      const name = e.target.name;

      if(name === "minInterestRate") 
        setFilterInput({...filterInput, minInterestRate: Number(value)});
      if(name === "maxInterestRate") 
        setFilterInput({...filterInput, maxInterestRate: Number(value)});
      if(name === "minMaxLimit") 
        setFilterInput({...filterInput, minMaxLimit: moneyFormat(value)});
      if(name === "maxMaxLimit") 
        setFilterInput({...filterInput, maxMaxLimit: moneyFormat(value)});
      if(name === "minRepaymentPeriod") 
        setFilterInput({...filterInput, minRepaymentPeriod: value});
      if(name === "maxRepaymentPeriod") 
        setFilterInput({...filterInput, maxRepaymentPeriod: value});
  }
  
  const comfirmButtonClick = () => {
    let minMaxLimit = Number(String(filterInput.minMaxLimit).replace(",",""));
    let maxMaxLimit = Number(String(filterInput.maxMaxLimit).replace(",",""));
    dispatch({ 
      type: "SET_FILTER", 
      payload: {
        minInterestRate: filterInput.minInterestRate,
        maxInterestRate: !filterInput.maxInterestRate ? 100 : filterInput.maxInterestRate,
        minMaxLimit: minMaxLimit*10000,
        maxMaxLimit: !maxMaxLimit ? 1000000000 : maxMaxLimit*10000,
        minRepaymentPeriod: 0,
        maxRepaymentPeriod: 0
      }
    });
    setIsOpened(false);
  }

  const removeFilter = () => {
    setFilterInput({
      ...filterInput,
      minInterestRate: 0,
      maxInterestRate: 0,
      minMaxLimit: 0,
      maxMaxLimit: 0,
      minRepaymentPeriod: 0,
      maxRepaymentPeriod: 0
    });
    dispatch({ 
      type: "SET_FILTER", 
      payload: {
        minInterestRate: 0,
        maxInterestRate: 100,
        minMaxLimit: 0,
        maxMaxLimit: 1000000000,
        minRepaymentPeriod: 0,
        maxRepaymentPeriod: 0
      }
    });
    setIsOpened(false);
  }

  return(
  <div className={`${isOpened?"":"hidden"} z-10 fixed left-0 top-0 w-full h-screen flex justify-center items-center bg-opacity-80 bg-gray-400 font-noto`}>
      <div className="loan-step-container p-16 flex flex-col items-center">
          <div className="w-full pl-2 font-bold text-3xl">필터를 통해 알아보세요!</div>
          <br/>
          <br/>
          <p className="w-full text-xl font-bold mb-3">이율</p>
          <div className="w-full flex justify-center items-center ">
              <div className="flex border-b border-blue-300 pb-3">
                  <input className="input border-0 w-full text-right text-3xl pr-5" 
                      name="minInterestRate"
                      value={filterInput.minInterestRate === 0 ? "" : filterInput.minInterestRate}
                      onChange={inputChange}
                      maxLength="2"
                  />
                  <span className="text-3xl font-bold">%</span>
              </div>
              <div className="mx-5">ㅡ</div>
              <div className="flex border-b border-blue-300 pb-3">
                  <input className="input border-0 w-full text-right text-3xl pr-5"
                          name="maxInterestRate"
                          value={filterInput.maxInterestRate === 0 ? "" : filterInput.maxInterestRate}
                          onChange={inputChange}
                          maxLength="2"
                  />
                  <span className="text-3xl font-bold">%</span>
              </div>
          </div>
          <br/>
          <br/>
          <p className="w-full text-xl font-bold mb-3">대출한도</p>
          <div className="w-full flex justify-center items-center">
              <div className="flex border-b border-blue-300 pb-3">
                  <input className="input border-0 w-full text-right text-3xl pr-5"
                      name="minMaxLimit"
                      value={filterInput.minMaxLimit === 0 ? "": filterInput.minMaxLimit}
                      onChange={inputChange}
                      maxLength="6"
                  />
                  <span className="text-3xl w-20 font-bold">만원</span>
              </div>
              <div className="mx-5">ㅡ</div>
              <div className="flex border-b border-blue-300 pb-3">
                  <input className="input border-0 w-full text-right text-3xl pr-5"
                      name="maxMaxLimit"
                      value={filterInput.maxMaxLimit === 0 ? "": filterInput.maxMaxLimit}
                      onChange={inputChange}
                      maxLength="6"
                  />
                  <span className="text-3xl w-20 font-bold">만원</span>
              </div>
          </div>
          <br/>
          <br/>
          {/* <p className="w-full text-xl font-bold mb-3">상환기간</p>
          <div className="w-full flex justify-center items-center">
              <div className="flex border-b border-blue-300 pb-3">
                  <input className="input border-0 w-full text-right text-3xl pr-5"
                      name="minRepaymentPeriod"
                      value={filterInput.minRepaymentPeriod === 0 ? "":filterInput.minRepaymentPeriod}
                      onChange={inputChange}
                      maxLength="3"
                  />
                  <span className="text-3xl w-20 font-bold">개월</span>
              </div>
              <div className="mx-5">ㅡ</div>
              <div className="flex border-b border-blue-300 pb-3">
                  <input className="input border-0 w-full text-right text-3xl pr-5"
                      name="maxRepaymentPeriod"
                      value={filterInput.maxRepaymentPeriod === 0 ? "":filterInput.maxRepaymentPeriod}
                      onChange={inputChange}
                      maxLength="3"
                  />
                  <span className="text-3xl w-20 font-bold">개월</span>
              </div>
          </div>
          <br/>
          <br/> */}

          <button className="w-9/12 bg-blue-400 text-white py-4 text-2xl rounded-lg"
              onClick={comfirmButtonClick}
          >
            확인
          </button>
          <br/>
          <button className="w-9/12 bg-white text-blue-400 py-4 text-xl rounded-lg"
              onClick={removeFilter}
          >
            필터 초기화
          </button>
      </div>
  </div>
  ); 
}