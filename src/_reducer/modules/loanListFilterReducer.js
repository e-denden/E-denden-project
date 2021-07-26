const filterState = {
  minInterestRate: 0,
  maxInterestRate: 100,
  minMaxLimit: 0,
  maxMaxLimit: 1000000000,
  minRepaymentPeriod: 0,
  maxRepaymentPeriod: 0
};

const SET_FILTER = "SET_FILTER";

export default function loanListFilterReducer(state=filterState, action){
  switch( action.type ) {
    case SET_FILTER :
        return action.payload;
    default : 
        return state;
  }
}