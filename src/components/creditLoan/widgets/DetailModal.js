export default function DetailModal({detailOpen, setDetailOpen, item, userGrade}) {

    return(
    <div className={`${detailOpen?"":"hidden"} z-20 fixed left-0 top-0 w-full h-screen flex justify-center items-center font-noto`}
        style={{backgroundColor:"#f6f9ff"}}
    >
        <div className="loan-step-container px-16 py-16 md:py-10 flex flex-col items-center">
            <div  className="loan-card">
                <div className="title-box font-noto">
                    <main>{item.bankName}</main>
                    <sub>{item.bankDesc}</sub>
                </div>
                <br/>
                <div className="body-box font-noto">
                    <div className="body-box-item">
                        <span className="title">연 예상 금리</span>
                        <span className="content">
                            { item[`${userGrade.userGrade}stGrade`].expectationRate } %
                        </span>
                    </div>
                    <div className="body-box-item">
                        <span className="title">최대 한도</span>
                        <span className="content">
                            { item[`${userGrade.userGrade}stGrade`].maxLimitText } 원
                        </span>
                    </div>
                </div>
            </div>
            <br/>
            <p className="w-full text-xl font-bold">우대금리</p>
            <div className="w-full flex border-b border-blue-300 pb-3">
                <div className="w-full text-right text-3xl font-bold pr-5" placeholder="0" 
                    name="minExpectationRate"
                >{item[`${userGrade.userGrade}stGrade`].primerate}</div>
                {/* <span className="text-3xl font-bold w-16">없음</span> */}
            </div>
            <br/>
            <br/>
            <p className="w-full text-xl font-bold">중도상환 수수료</p>
            <div className="w-full flex border-b border-blue-300 pb-3">
                <div className="w-full text-right text-3xl pr-5" placeholder="0" 
                    name="minExpectationRate"
                >{item[`${userGrade.userGrade}stGrade`].earlyredemptionfee}</div>
                <span className="text-3xl font-bold">%</span>
            </div>
            <br/>
            <br/>
            <p className="w-full text-xl font-bold">플랫폼 수수료</p>
            <div className="w-full flex border-b border-blue-300 pb-3">
                <div className="w-full text-right text-3xl pr-5" placeholder="0" 
                    name="minExpectationRate"
                >{item[`${userGrade.userGrade}stGrade`].platformfee}</div>
                <span className="text-3xl font-bold">%</span>
            </div>
            <br/>
            <br/>
            <p className="w-full text-xl font-bold">인지세</p>
            <div className="w-full flex border-b border-blue-300 pb-3">
                <div className="w-full text-right text-3xl pr-5" placeholder="0" 
                    name="minExpectationRate"
                >{item[`${userGrade.userGrade}stGrade`].stampduty}</div>
                <span className="text-3xl font-bold">%</span>
            </div>
            <br/>
            <br/>
            <button className="w-9/12 bg-blue-400 text-white py-4 text-2xl rounded-lg"
                onClick={() => setDetailOpen(false)}
            >확인</button>
        </div>
    </div>
    ); 
}