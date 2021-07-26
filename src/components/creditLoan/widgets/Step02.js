import { useDispatch, useSelector } from "react-redux";
import ArrowButton from "../../../assets/creditLoan/arrow-button.png";
import { changeUserInfoHandler } from "../../../_reducer/modules/userInfoReducer";

export default function Step02({ incrementStep }) {

  const userInfoState = useSelector( state => state.userInfoReducer );
  const dispatch = useDispatch();
  
  const changeEventHandler = event => 
    changeUserInfoHandler(event, dispatch, userInfoState);

  const clickNextEvent = () => {
    if(!userInfoState.annualIncome) 
      return alert("연소득(세전) 값을 입력해주세요.");
    incrementStep();
  }

  return(
  <div className="loan-step-container flex flex-col justify-center items-start px-5 md:px-14 py-5 md:py-14 mb-10">
      <div className="font-noto text-xl md:text-2xl font-bold">
          <p>고객님의 추가 정보를</p>
          <p>알려주세요</p>
      </div>
      <br/>
      <br/>
      <div className="font-noto font-bold text-xl mb-3">
          <p className="font-noto">연소득(세전)</p>
          <div className="input-box">
              <input placeholder="연소득(세전) 입력" className="font-noto"
                  name="annualIncome"
                  value={userInfoState.annualIncome === 0 ? "" : userInfoState.annualIncome}
                  onChange={changeEventHandler}
                  maxLength="6"
              />
              <span className="font-noto">만원</span>
          </div>
      </div>
      <br/>
      <br/>
      <div className="w-full">
          <p className="font-noto font-bold text-xl mb-3">소득구분</p>
          <div className="w-full grid grid-cols-3 gap-3">
              <div className="check-box">
                  <input id="check-group-1-1" type="radio" name="incomeDivision" defaultChecked
                      onClick={changeEventHandler}
                      value="급여소득자 4대보험 가입"
                  />
                  <label htmlFor="check-group-1-1">급여소득자<br/>4대보험 가입</label>
              </div>
              <div className="check-box">
                  <input id="check-group-1-2" type="radio" name="incomeDivision"
                      onClick={changeEventHandler}
                      value="급여소득자 4대보험 미가입"
                  />
                  <label htmlFor="check-group-1-2">급여소득자<br/>4대보험 미가입</label>
              </div>
              <div className="check-box">
                  <input id="check-group-1-3" type="radio" name="incomeDivision" 
                      onClick={changeEventHandler}
                      value="개인사업자"
                  />
                  <label htmlFor="check-group-1-3">개인사업자</label>
              </div>
              <div className="check-box">
                  <input id="check-group-1-4" type="radio" name="incomeDivision"
                      onClick={changeEventHandler}
                      value="프리랜서"
                  />
                  <label htmlFor="check-group-1-4">프리랜서</label>
              </div>
              <div className="check-box">
                  <input id="check-group-1-5" type="radio" name="incomeDivision" 
                      onClick={changeEventHandler}
                      value="기타소득자"
                  />
                  <label htmlFor="check-group-1-5">기타소득자</label>
              </div>
          </div>
      </div>
      <br/>
      <br/>
      <div className="w-full">
          <p className="font-noto font-bold text-xl mb-3">고용형태</p>
          <div className="w-full grid grid-cols-3 gap-3">
              <div className="check-box">
                  <input id="check-group-2-1" type="radio" name="employmentForm" defaultChecked
                      onClick={changeEventHandler}
                      value="정규직"
                  />
                  <label htmlFor="check-group-2-1">정규직</label>
              </div>
              <div className="check-box">
                  <input id="check-group-2-2" type="radio" name="employmentForm" 
                      onClick={changeEventHandler}
                      value="계약직"
                  />
                  <label htmlFor="check-group-2-2">계약직</label>
              </div>
              <div className="check-box">
                  <input id="check-group-2-3" type="radio" name="employmentForm" 
                      onClick={changeEventHandler}
                      value="기타"
                  />
                  <label htmlFor="check-group-2-3">기타</label>
              </div>
          </div>
      </div>
      <br/>
      <br/>
      <div className="w-full">
          <p className="font-noto font-bold text-xl mb-3">주거 소유 형태</p>
          <div className="w-full grid grid-cols-3 gap-3">
              <div className="check-box">
                  <input id="check-group-3-1" type="radio" name="formOfHomeOwnership" defaultChecked
                      onClick={changeEventHandler}
                      value="자가"
                  />
                  <label htmlFor="check-group-3-1">자가</label>
              </div>
              <div className="check-box">
                  <input id="check-group-3-2" type="radio" name="formOfHomeOwnership" 
                      onClick={changeEventHandler}
                      value="배우자소유"
                  />
                  <label htmlFor="check-group-3-2">배우자소유</label>
              </div>
              <div className="check-box">
                  <input id="check-group-3-3" type="radio" name="formOfHomeOwnership" 
                      onClick={changeEventHandler}
                      value="기타가족소유"
                  />
                  <label htmlFor="check-group-3-3">기타가족소유</label>
              </div>
              <div className="check-box">
                  <input id="check-group-3-4" type="radio" name="formOfHomeOwnership" 
                      onClick={changeEventHandler}
                      value="전월세"
                  />
                  <label htmlFor="check-group-3-4">전월세</label>
              </div>
          </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="w-full">
          <div className="w-full next-button-box" onClick={clickNextEvent}>
              <span className="font-noto">다음</span>
              <img src={ArrowButton} alt="arrow-button-img"/>
          </div>
      </div>
  </div>
  );
}