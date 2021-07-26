import { useDispatch, useSelector } from "react-redux";
import ArrowButton from "../../../assets/creditLoan/arrow-button.png";
import { changeUserInfoHandler } from "../../../_reducer/modules/userInfoReducer";

export default function Step01({ incrementStep }) {

  const userInfoState = useSelector( state => state.userInfoReducer );
  const dispatch = useDispatch();

  const changeEventHandler = event => 
    changeUserInfoHandler(event, dispatch, userInfoState);

  const clickNextEvent = () => {
    if(!userInfoState.loanHopeCost) 
      return alert("대출 희망 금액을 입력해주세요!");
    incrementStep();
  }

  return(
  <div className="loan-step-container flex flex-col justify-center items-start px-5 md:px-14 py-5 md:py-14 mb-10">
      <div className="font-noto text-xl md:text-2xl font-bold">
          <p>대출 목적과</p>
          <p>대출 희망 금액을 알려주세요</p>
      </div>
      <div className="w-full mt-10">
          <p className="font-noto font-bold text-xl mb-3">대출 목적</p>
          <div className="w-full grid grid-cols-3 gap-3">
              <div className="flex justify-center items-center rounded-lg cursor-pointer">
                  <input id="1" type="radio" name="loanPurpose" value="생활비" defaultChecked
                      className="hidden"
                      onClick={changeEventHandler}
                  />
                  <label htmlFor="1">생활비</label>
              </div>
              <div className="flex justify-center items-center rounded-lg cursor-pointer">
                  <input id="4" type="radio" name="loanPurpose" value="자동차구입"
                      className="hidden"
                      onClick={changeEventHandler}
                  />
                  <label htmlFor="4">자동차구입</label>
              </div>
              <div className="flex justify-center items-center rounded-lg cursor-pointer">
                  <input id="5" type="radio" name="loanPurpose" value="투자" 
                      className="hidden"
                      onClick={changeEventHandler}
                  />
                  <label htmlFor="5">투자</label>
              </div>
              <div className="flex justify-center items-center rounded-lg cursor-pointer">
                  <input id="6" type="radio" name="loanPurpose" value="대환대출" 
                      className="hidden"
                      onClick={changeEventHandler}
                  />
                  <label htmlFor="6">대환대출</label>
              </div>
              <div className="flex justify-center items-center rounded-lg cursor-pointer">
                  <input id="7" type="radio" name="loanPurpose" value="사업자금" 
                      className="hidden"
                      onClick={changeEventHandler}
                  />
                  <label htmlFor="7">사업자금</label>
              </div>
              <div className="flex justify-center items-center rounded-lg cursor-pointer">
                  <input id="8" type="radio" name="loanPurpose" value="기타" 
                      className="hidden"
                      onClick={changeEventHandler}
                  />
                  <label htmlFor="8">기타</label>
              </div>
          </div>
      </div>
      <div className="w-full mt-10">
          <p className="font-noto font-bold text-xl mb-3">대출 희망 금액</p>
          <div className="input-box">
              <input placeholder="대출 희망 금액 입력" className="font-noto"
                  step="any"
                  name="loanHopeCost"
                  value={userInfoState.loanHopeCost === 0 ? "" : userInfoState.loanHopeCost}
                  onChange={changeEventHandler}
                  maxLength="6"
              />
              <span className="font-noto">만원</span>
          </div>
      </div>
      <div className="w-full mt-12 next-button-box" onClick={clickNextEvent}>
          <span className="font-noto">다음</span>
          <img src={ArrowButton} alt="arrow-button-img"/>
      </div>
  </div>
  );
}