import ArrowButton from "../../../assets/creditLoan/arrow-button.png";
import { useDispatch, useSelector } from "react-redux";
import { changeUserInfoHandler } from "../../../_reducer/modules/userInfoReducer";

export default function Step03({ incrementStep }) {

  const userInfoState = useSelector( state => state.userInfoReducer );
  const dispatch = useDispatch();

  const inputEvent = event => 
    changeUserInfoHandler(event, dispatch, userInfoState);

  const clickNextEvent = () => 
    incrementStep();
  
  return(
  <div className="loan-step-container flex flex-col justify-center items-start px-5 md:px-14 py-5 md:py-14 mb-10">
      <div className="font-noto text-xl md:text-2xl font-bold">
          <p>고객님의 추가 정보를</p>
          <p>알려주세요</p>
      </div>
      <br/>
      <br/>
      <div className="w-full">
          <p className="font-noto font-bold text-xl mb-3">직장명</p>
          <div className="input-box">
              <input placeholder="직장명 입력" className="font-noto"
                  value={userInfoState.companyName}
                  name="companyName"
                  onChange={inputEvent}
              />
          </div>
      </div>
      <br/>
      <br/>
      <div className="w-full">
          <p className="font-noto font-bold text-xl mb-3">현 직장 입사일</p>
          <div style={{display:"flex",justifyContent:"space-between"}}>
              <div className="input-box" style={{marginRight:"60px"}}>
                  <input placeholder="연도(YYYY)" className="font-noto"
                      value={userInfoState.companyJoinDateYear}
                      name="companyJoinDateYear"
                      onChange={inputEvent}
                  />
              </div>
              <div className="input-box">
                  <input placeholder="월(MM)" className="font-noto"
                      value={userInfoState.companyJoinDateMonth}
                      name="companyJoinDateMonth"
                      onChange={inputEvent}
                  />
              </div>
          </div>
      </div>
      <br/>
      <br/>
      <div className="w-full">
          <p className="font-noto font-bold text-xl mb-3">소유 차량 번호</p>
          <div className="input-box">
              <input placeholder="예시: 123가1234" className="font-noto"
                  value={userInfoState.theCarNumber}
                  name="theCarNumber"
                  onChange={inputEvent}
              />
          </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="w-full">
          <div className="next-button-box" onClick={clickNextEvent}>
              <span className="font-noto" >다음</span>
              <img src={ArrowButton} alt="arrow-button-img"/>
          </div>
      </div>
  </div>
  );
}