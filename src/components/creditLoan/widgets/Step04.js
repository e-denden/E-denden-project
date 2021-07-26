import { useState } from "react";
import RoundFillCheck from "../../../assets/creditLoan/round-fill-check.png";
import RoundNoneCheck from "../../../assets/creditLoan/round-none-check.png";
import FillCheck from "../../../assets/creditLoan/fill-check.png";
import NoneCheck from "../../../assets/creditLoan/none-check.png";
import Modal from "./Modal";
import { changeUserInfoHandler } from "../../../_reducer/modules/userInfoReducer";
import { useDispatch, useSelector } from "react-redux";

export default function Step04({ setIsFinished, setUserGrade }) {

  const userInfoState = useSelector( state => state.userInfoReducer );
  const dispatch = useDispatch();

  const changeEventHandler = event =>
    changeUserInfoHandler(event, dispatch, userInfoState);

  const clickNextEvent = () => {
    if( !writedCertifiedNumber ){
      alert("인증번호를 입력해주세요!");
      return false;
    }
    userInfoState.annualIncome = Number(userInfoState.annualIncome.replace(/","/gi,"")+"0000");
    if(userInfoState.annualIncome > 35000000) setUserGrade(1);
    if(userInfoState.annualIncome <= 35000000) setUserGrade(3);
    if(userInfoState.annualIncome <= 28000000) setUserGrade(5);
    if(userInfoState.annualIncome <= 21000000) setUserGrade(7);
    if(userInfoState.annualIncome <= 14000000) setUserGrade(9);
    setIsFinished();
  }

  const [ agreed, setAgreed ] = useState(false);
  const [ isCertified, setIsCertified ] = useState(false);
  const [ writedCertifiedNumber, setWritedCertifiedNumber ] = useState(false);

  
  const [toggle, setToggle] = useState(false);


  return(
  <div className="loan-step-container flex flex-col justify-center items-center px-5 md:px-14 py-5 md:py-14 mb-10">
      <Modal isOpened={toggle} setIsOpened={setToggle} />
      <div className="w-full font-noto text-xl md:text-2xl font-bold">
          <p>고객님께 딱 맞는 최저금리를</p>
          <p>받기 위해 정보가 필요해요</p>
      </div>
      <br/>
      <div className="w-full font-noto text-xl md:text-lg font-base">
          <p>고객님께 딱 맞는 최저금리를</p>
          <p>받기 위해 정보가 필요해요</p>
      </div>
      <br/>
      <br/>
      <div className="w-full loan-hope-cost-container">
          <p className="font-noto font-bold text-xl">이름</p>
          <div className="input-box">
              <input placeholder="이름 입력" className="font-noto"
                  value={userInfoState.name}
                  name="name"
                  onChange={changeEventHandler}
              />
          </div>
      </div>
      <br/>
      <br/>
      <div className="w-full loan-hope-cost-container">
          <p className="font-noto font-bold text-xl">주민등록번호</p>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div className="input-box">
                  <input placeholder="주민번호 입력" className="font-noto"
                      value={userInfoState.RRNFront}
                      name="RRNFront"
                      onChange={changeEventHandler}
                      maxLength="6"
                  />
              </div>
              <span style={{fontSize:"20px",margin:"0px 20px"}}>ㅡ</span>
              <div className="input-box">
                  <input className="font-noto font-bold text-xl"
                      value={userInfoState.RRNBack}
                      name="RRNBack"
                      type="password"
                      onChange={changeEventHandler}
                      maxLength="7"
                  />
              </div>
          </div>
      </div>
      <br/>
      <br/>
      <div className="w-full loan-hope-cost-container">
          <p className="font-noto font-bold text-xl">휴대폰번호('-'없이 입력)</p>
          <div className="input-box">
              <input placeholder="'-'없이 입력" className="font-noto"
                  value={userInfoState.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventHandler}
                  maxLength="11"
              />
          </div>
      </div>
      <br/>
      <br/>
      <div className="w-full">
          <p className="font-noto font-bold text-xl mb-3">통신사</p>
          <div className="w-full grid grid-cols-3 gap-3">
              <div className="check-box">
                  <input id="check-group-3-1" type="radio" name="newsAgency" defaultChecked
                      onClick={changeEventHandler}
                      value="SKT"
                  />
                  <label htmlFor="check-group-3-1">SKT</label>
              </div>
              <div className="check-box">
                  <input id="check-group-3-2" type="radio" name="newsAgency" 
                      onClick={changeEventHandler}
                      value="KT"
                  />
                  <label htmlFor="check-group-3-2">KT</label>
              </div>
              <div className="check-box">
                  <input id="check-group-3-3" type="radio" name="newsAgency"
                      onClick={changeEventHandler}
                      value="LGU+"
                  />
                  <label htmlFor="check-group-3-3">LGU+</label>
              </div>
              <div className="check-box">
                  <input id="check-group-3-4" type="radio" name="newsAgency" 
                      onClick={changeEventHandler}
                      value="SKT 알뜰폰"
                  />
                  <label htmlFor="check-group-3-4">SKT 알뜰폰</label>
              </div>
              <div className="check-box">
                  <input id="check-group-3-5" type="radio" name="newsAgency" 
                      onClick={changeEventHandler}
                      value="KT 알뜰폰"
                  />
                  <label htmlFor="check-group-3-5">KT 알뜰폰</label>
              </div>
              <div className="check-box">
                  <input id="check-group-3-6" type="radio" name="newsAgency" 
                      onClick={changeEventHandler}
                      value="LGU+ 알뜰폰"
                  />
                  <label htmlFor="check-group-3-6">LGU+ 알뜰폰</label>
              </div>
          </div>
      </div>
      <br/>
      <br/>
      <div className="agree-button-box" onClick={() => setAgreed(!agreed)}>
          <img src={ agreed ? RoundFillCheck : RoundNoneCheck} alt="check img"/>
          <span className="font-noto">필수 약관 전체 동의</span>
      </div>
      <br/>
      <div className="agree-group-container w-full">
          <div className="agree-group-box">
              <div className="flex items-center">
                  <img src={ agreed ? FillCheck : NoneCheck} alt="check img"/>
                  <span className="font-noto">필수 항목 모두 동의(필수)</span>
              </div>
              <button onClick={() => {}}>
                  <i className="fas fa-chevron-right"></i>
              </button>
          </div>
          <div className="agree-group-box">
              <div className="flex items-center">
                  <img src={ agreed ? FillCheck : NoneCheck} alt="check img"/>
                  <span className="font-noto">금융기관 필수 항목 모두 동의(필수)</span>
              </div>
              <button onClick={() => {}}>
                  <i className="fas fa-chevron-right"></i>
              </button>
          </div>
          <div className="agree-group-box">
              <div className="flex items-center">
                  <img src={ agreed ? FillCheck : NoneCheck} alt="check img"/>
                  <span className="font-noto">본인확인 필수 항목 모두 동의(필수)</span>
              </div>
              <button onClick={() => {}}>
                  <i className="fas fa-chevron-right"></i>
              </button>
          </div>
          <div className="agree-group-box">
              <div className="flex items-center">
                  <img src={ agreed ? FillCheck : NoneCheck} alt="check img"/>
                  <span className="font-noto">서비스 이용 안내 수신 동의(필수)</span>
              </div>
              <button onClick={() => {}}>
                  <i className="fas fa-chevron-right"></i>
              </button>
          </div>
          <div className="agree-group-box">
              <div className="flex items-center">
                  <img src={ agreed ? FillCheck : NoneCheck} alt="check img"/>
                  <span className="font-noto">개인정보 수집 제공 이용 동의서(필수)</span>
              </div>
              <button onClick={() => {setToggle(true)}}>
                  <i className="fas fa-chevron-right"></i>
              </button>
          </div>
      </div>
      <br/>
      <br/>
      {/* <br/> */}
      <div className="nomal-button-box font-noto"
          onClick={() => {
              if( !agreed ){
                  alert("필수 약관 전체 동의 해주세요.");
                  return false;
              }

              setIsCertified(true);
          }}
          style={{
              background: agreed? "#4c95f7":"#ffffff",
              border: agreed? "none": "1px solid #a9a9a9",
              color: agreed? "white":"#191919"
          }}
      >
          인증번호 받기
      </div>
      <br/>
      <br/>
      <div className="loan-hope-cost-container"
          style={{
              display:isCertified?"block":"none"
          }}
      >
          <p className="font-noto">인증번호</p>
          <div 
              style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center"
              }}
          >
              <div className="input-box" 
                  style={{marginRight:"20px"}}
              >
                  <input 
                      placeholder="6자리 입력" 
                      className="font-noto"
                      onChange={(e) => {
                          const value = e.target.value;
                          if(value.length === 6){
                              setWritedCertifiedNumber(true);
                          }else{
                              setWritedCertifiedNumber(false);
                          }
                      }}
                      maxLength="6"
                  />
                  <span 
                      className="font-noto" 
                      style={{color:"#4c95f7"}}
                  >
                      03:00
                  </span>
              </div>
              <div 
                  onClick={() => {
                      alert("인증번호 재요청!(나중에 API 호출로 기능 변경)");
                  }}
                  className="font-noto"
                  style={{
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center",
                      width:"200px",
                      height:"50px",
                      border:"1px solid #a9a9a9",
                      borderRadius:"5px",
                      textAlign:"center",
                      color:"#a9a9a9",
                      cursor:"pointer",
                      marginTop:"5px"
                  }}
              >
                  인증번호<br/>재요청
              </div>
          </div>
          <span to="/"
              onClick={() => {
                  alert(`'스팸차단서비스'로 인증번호 수신이 어려울 수 있습니다.\n기기 내 수신차단 목록에서 SMS 인증 발신 번호\n(00-000-000)를 제외해주세요.\n`);
              }}
              className="font-noto"
              style={{
                  cursor:"pointer",
                  color:"#4c95f7",
                  borderBottom:"1px solid #4c95f7",
                  lineHeight:"3.0"
              }}
          >인증번호가 오지 않나요?</span>
      </div>
      <div className="nomal-button-box font-noto"
          onClick={clickNextEvent}
          style={{
              display: isCertified? "flex":"none",
              background: writedCertifiedNumber? "#4c95f7":"#ffffff",
              border: writedCertifiedNumber? "none": "1px solid #a9a9a9",
              color: writedCertifiedNumber? "white":"#191919",
              marginTop:35
          }}
      >
          완료
      </div>
      <br/>
  </div>
  );
}