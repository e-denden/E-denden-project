export default function moneyFormat( value ){
  let newValue = value;
  newValue = newValue.replace(/[^0-9]/g,'');   // 입력값이 숫자가 아니면 공백
  newValue = newValue.replace(/,/g,'');        // ,값 공백처리
  newValue = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return newValue;
}

export function offMoneyFormat( value ) {
  return Number(value.replace(/","/gi,""));
}