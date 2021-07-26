
export default function Modal({isOpened, setIsOpened}) {
    

    return(
    <div className={`${isOpened?"":"hidden"} fixed left-0 top-0 w-full h-screen flex justify-center items-center bg-opacity-80 bg-gray-400 font-noto`}>
        <div className="loan-step-container p-8 flex flex-col items-center">
            <div className="w-full pl-2 font-bold text-3xl mb-5">개인정보 수집 제공 이용 동의서</div>
            <div className="text-lg mb-5">
              대출상담 업무와 관련하여 개인정보를 수집 이용하거나 제2자에게 
              제공하고자 하는 경우에는 「개인정보 보호법」 제15조 제1항 제1
              호 제17조 제1항 제1호, 제24조 제1항 제1호 제24조의2, 「신용정
              보의 이용 및 보호에 관한 법률」 제15조 제2항, 제32조 제1항, 제
              33조 및 제34조에 따라 본인의 동의가 필요합니다. 이 에 본인은 대
              출상담 업무와 관련하여 아래와 같이 개인정보 수집 이용에 동의합
              니다. 
            </div>
            <ul className="text-lg mb-5">
                <li>1. 수집 이용에 관한 사항 </li>
                <li>① 수집 이용 목적 - 대출상담 등  </li>
                <li>② 수집 이용 할 항목 - 성명, 연락처   </li>
                <li>③ 보유 이용 기간 - 수집 이용 동의일로부터 수집 이용 목적을 달성 할 때까지</li>
                <li>④ 동의를 거부할 권리 및 동의를 거부할 경 우의 불이익<br/>
                - 귀하는 동의를 거부할 권리가 있으나, 이에 동의가 없을 경우 
                    대출상담 신청 등이 불가능할 수 있음을 알려 드립니다.</li>
            </ul>
            <button className="w-9/12 bg-blue-400 text-white py-4 text-2xl rounded-lg"
                onClick={() => setIsOpened(false)}
            >확인</button>
        </div>
    </div>
    ); 
}