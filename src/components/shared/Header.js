import { Link } from "react-router-dom";
import LogoPng from "../../assets/logo.png";

export default function Header() {
    return (
    <header className="w-full h-12 border-b flex justify-center">
        <div className="w-full sm:w-10/12 md:w-6/12 flex justify-between md:justify-start items-center">
            <figure className="ml-5 md:ml-0"
                style={{ marginRight: "100px"}}
            >
                <Link to="/" className="logo-item">
                    <img src={LogoPng} alt="logo" />
                </Link>
            </figure>
            <ul className="flex font-noto text-sm md:text-base font-medium">
                <li className="mr-11">
                    <Link className="font-noto" to="/credit-loan">신용대출</Link>
                </li>
                <li className="menu-item mr-5 md:mr-0">
                    <Link className="font-noto" to="/loan-interest-calculator">대출이자계산기</Link>
                </li>
            </ul>
        </div>
    </header>
    )
}