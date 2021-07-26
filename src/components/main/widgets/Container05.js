export default function Container05() {
    return (
    <div className="w-full flex flex-col justify-center items-center" style={{ height: "416px" }}>
        <div className="font-noto color-blue text-sm md:text-xl leading-5 md:leading-9 px-5 md:px-0">
            <span className="font-bold">유의사항</span>
            <p>
                대출모집인 포털사이트, 저축은행중앙회에서 신원확인 가능합니다. 
                (<a href="http://www.loanconsultant.or.kr/" className="url" target="_blank" rel="noreferrer">http://www.loanconsultant.or.kr/</a>)
            </p>
            <p>이든파이낸셜 은 일부 제휴 기관들로부터 금융상품 정보를 제공받아 전달하고 있습니다.</p>
            <p>이든파이낸셜 에서 대출 가능 한도와 금리 확인을 위해 진행하는 신용 정보 조회는 신용점수에 영향을 주지 않습니다.</p>
            <p>이든파이낸셜 은 온라인 대출모집법인으로서 금융상품계약 체결 권한이 없습니다. </p>
            <p>여신심사를 통한 대출실행 결정은 금융사가 하며, 금융사에서 약정 후 대출을 실제로 받을 경우 신용점수가 하락할 수 있습니다.</p>
            <p>이든파이낸셜 은 대출 진행과 관련해 고객에게 별도 수수료를 요구하지 않습니다.</p>
            <p>금융사에서 지급하는 대출 모집 수수료율 기준은 각 금융사의 홈페이지에서 확인할 수 있습니다.</p>
        </div>
        <div className="w-8/12 mt-10" style={{borderBottom: "2px solid #003da7"}}></div>
    </div>
    );
}