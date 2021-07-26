const loanObjState = {
  total: 0,
  sortType: "INTEREST_RATE", // or LIMIT 
  loans: [
    {
      id: 1,
      bankName: "",
      bankDesc: "",
      interestRate: 0,
      maxLimit: 0,
      maxLimitText: "",
      primerate:"",
      earlyredemptionfee:"",
      platformfee: "0",
      stampduty: "0"
    },
  ]
};

const SET_LOANS_STATE = "SET_LOANS_STATE";

export default function loanListReducer(state=loanObjState, action){
  switch( action.type ) {
    case SET_LOANS_STATE :
        return action.payload;
    default : 
        return state;
  }
}

export function interestRateSort(array){
  let newArray = array;
  let temp = {};
  for(let i = 0; i < newArray.length; i ++) {
    for(let j = 0; j < newArray.length; j++){
      if(Number(newArray[i].interestRate) < Number(newArray[j].interestRate)) {
        temp = newArray[j];
        newArray[j] = newArray[i];
        newArray[i] = temp;
      }else if(
        newArray[i].id !== newArray[j].id && 
        Number(newArray[i].interestRate) === Number(newArray[j].interestRate)
      ){
        if(newArray[i].maxLimit > newArray[j].maxLimit){
          temp = newArray[j];
          newArray[j] = newArray[i];
          newArray[i] = temp;
        }
      }
    }
  }
  return newArray;
}

export function limitSort(array){
  let newArray = array;
  let temp = {};
  for(let i = 0; i < newArray.length; i ++) {
    for(let j = 0; j < newArray.length; j++){
      if(Number(newArray[i].maxLimit) > Number(newArray[j].maxLimit)) {
        temp = newArray[j];
        newArray[j] = newArray[i];
        newArray[i] = temp;
      }else if(
        newArray[i].id !== newArray[j].id && 
        Number(newArray[i].maxLimit) === Number(newArray[j].maxLimit)
      ){
        if(newArray[i].interestRate < newArray[j].interestRate){
          temp = newArray[j];
          newArray[j] = newArray[i];
          newArray[i] = temp;
        }
      }
    }
  }
  return newArray;
}