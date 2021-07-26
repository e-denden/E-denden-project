import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomText from "../../../assets/creditLoan/bottom.png";
import FilterImg from "../../../assets/creditLoan/filter.svg";
import { interestRateSort, limitSort } from "../../../_reducer/modules/loanListReducer";
import FilterModal from "./FilterModal";

export default function LoanList( userGrade ) {

  const loanObjState = useSelector(state => state.loanListReducer);
  const filterState = useSelector(state => state.loanListFilterReducer);
  const dispatch = useDispatch();
  
  const [isOpened, setIsOpened] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await getApi();
    dispatch({ type: "SET_LOANS_STATE", payload: {...loanObjState, total: data.length, loans: interestRateSort(data) }});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getApi = async () => {
    let data = await import("../../../temp/data2.json");
    return data.default[`No${userGrade.userGrade}stGrade`];
  }

  const interestRateSortHandler = async () => {
    const data = loanObjState.loans;
    const sortData = interestRateSort(data);
    dispatch({ type:"SET_LOANS_STATE", payload: {...loanObjState, sortType:"INTEREST_RATE", total: sortData.length, loans: sortData} });
  } 
  const limitSortHandler = async () => {
    const data = loanObjState.loans;
    const sortData = limitSort(data);
    dispatch({type:"SET_LOANS_STATE", payload: {...loanObjState, sortType:"LIMIT" , total: sortData.length, loans: sortData } });
  } 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const data = await getApi();
    const sortData = loanObjState.sortType === "INTEREST_RATE" ? interestRateSort(data) : limitSort(data);
    const filterData = sortData.filter(item => {
      if(
        ( filterState.minInterestRate <= item.interestRate && item.interestRate <= filterState.maxInterestRate )
        &&  
        ( filterState.minMaxLimit <= item.maxLimit && item.maxLimit <= filterState.maxMaxLimit )
      ){
        return item;
      }
      return null;
    });

    dispatch({type:"SET_LOANS_STATE", payload: {...loanObjState, sortType: loanObjState.sortType , total: filterData.length, loans: filterData } });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState]);

  return(
  <div className="loan-step-container flex flex-col justify-center items-center mb-10">
      <FilterModal 
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
      <div className="w-full font-noto text-xl md:text-2xl font-bold md:px-14 py-5 px-5 md:py-14">
          <p>김지원님을 위한</p>
          <p>대출 조건을 받았습니다.</p>
      </div>
      <div className="list-container w-full">
          <div className="header-container">
              <div className="left-box">
                  검색결과 <span style={{color:"#4c95f7"}}>
                    { loanObjState.total }
                  </span>개
              </div>
              <div className="right-box flex justify-center items-center">
                  <span
                      onClick={()=> setIsOpened(true)}
                  >
                      <img src={FilterImg} alt="filter img"/>
                  </span>
                  <span
                      className="mr-3"
                      onClick={interestRateSortHandler}
                      style={{
                          color:loanObjState.sortType === "INTEREST_RATE" ? "#4c95f7" : "#191919"
                      }}
                  >
                      금리순
                  </span>
                  <span
                      onClick={limitSortHandler}
                      style={{
                          color:loanObjState.sortType=== "LIMIT" ? "#4c95f7" : "#191919"
                      }}
                  >
                      한도순
                  </span>
              </div>
          </div>
          <div className="body-container">
          {
            loanObjState.loans.map((item) => {
              return(
                <React.Fragment key={item.id}>
                    <div  className="loan-card">
                        <div className="p-absolute">
                            <i className="fas fa-chevron-right cursor-pointer"
                            ></i>
                        </div>
                        <div className="title-box font-noto">
                            <main>{item.bankName}</main>
                            <sub>{item.bankDesc}</sub>
                        </div>
                        <br/>
                        <div className="body-box font-noto">
                            <div className="body-box-item">
                                <span className="title">연 예상 금리</span>
                                <span className="content">
                                    { item.interestRate } %
                                </span>
                            </div>
                            <div className="body-box-item">
                                <span className="title">최대 한도</span>
                                <span className="content">
                                    { item.maxLimitText } 원
                                </span>
                            </div>
                        </div>
                    </div>
                    <br/>
                </React.Fragment>
              )
            })
          }
          </div>
          <br/>
          <div className="bottom-container">
              <img src={BottomText} alt="text"/>
          </div>
          <br/>
      </div>
  </div>
  );
}