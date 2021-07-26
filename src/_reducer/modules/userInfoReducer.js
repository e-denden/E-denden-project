import moneyFormat from "../../utils/moneyFormat";


const userInfoState = {
  loanPurpose: "생활비", // 대출 목적
  loanHopeCost: 0, // 대출 희망 금액
  annualIncome: 0, // 연간 소득
  incomeDivision: "급여소득자 4대보험 가입", // 소득 구분
  employmentForm: "정규직", // 고용형태
  formOfHomeOwnership: "자가", // 주거 소유 형태
  companyName: "", // 직장명
  companyJoinDateYear: "", // 현 직장 입사일 (년)
  companyJoinDateMonth: "", // 현 직장 입사일 (월)
  theCarNumber: "", // 소유 차량 번호
  name: "", // 고객 이름
  RRNFront: "", // 고객 주민등록번호(앞)
  RRNBack: "", // 고객 주민등록번호(뒤)
  phoneNumber: "", // 고객 휴대폰 번호
  newsAgency: "SKT" // 고객 휴대폰 통신사
};


const SET_INFO_STATE = "SET_INFO_STATE";

export default function userInfoReducer(state=userInfoState, action){
  switch( action.type ) {
      case SET_INFO_STATE :
          return action.payload;
      default : 
          return state;
  }
}


export function changeUserInfoHandler(event, dispatch, state){
  const value = event.target.value;
  const name = event.target.name;

  switch(name){
    case "loanPurpose":
      dispatch({ type: SET_INFO_STATE, payload: {...state, loanPurpose: value}  });
      break;
    case "loanHopeCost":
      dispatch({ type: SET_INFO_STATE, payload: {...state, loanHopeCost: moneyFormat(value)}  });
      break;
    case "annualIncome":
      dispatch({ type: SET_INFO_STATE, payload: {...state, annualIncome: moneyFormat(value)}  });
      break;
    case "incomeDivision": 
      dispatch({ type: SET_INFO_STATE, payload: {...state, incomeDivision: value}});
      break;
    case "employmentForm":
      dispatch({ type: SET_INFO_STATE, payload: {...state, employmentForm: value}});
      break;
    case "formOfHomeOwnership":
      dispatch({ type: SET_INFO_STATE, payload: {...state, formOfHomeOwnership: value}});
      break;
    case "companyName": 
      dispatch({ type: SET_INFO_STATE, payload: {...state, companyName: value}});
      break;
    case "companyJoinDateYear": 
      dispatch({ type: SET_INFO_STATE, payload: {...state, companyJoinDateYear: value}});
      break;
    case "companyJoinDateMonth": 
      dispatch({ type: SET_INFO_STATE, payload: {...state, companyJoinDateMonth: value}});
      break;
    case "theCarNumber": 
      dispatch({ type: SET_INFO_STATE, payload: {...state, theCarNumber: value}});
      break;
    case "name": 
      dispatch({ type: SET_INFO_STATE, payload: {...state, name: value}});
      break;
    case "RRNFront": 
      dispatch({ type: SET_INFO_STATE, payload: {...state, RRNFront: value}});
      break;
    case "RRNBack": 
      dispatch({ type: SET_INFO_STATE, payload: {...state, RRNBack: value}});
      break;
    case "phoneNumber": 
      dispatch({ type: SET_INFO_STATE, payload: {...state, phoneNumber: value}});
      break;
    case "newsAgency": 
      dispatch({ type: SET_INFO_STATE, payload: {...state, newsAgency: value}});
      break;
    default : return userInfoState;
  }
}