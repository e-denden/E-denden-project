import Header from "../shared/Header";
import Container01 from "./widgets/Container01";
import Container02 from "./widgets/Container02";
import Container03 from "./widgets/Container03";
import Container04 from "./widgets/Container04";
import Container05 from "./widgets/Container05";
import Container06 from "./widgets/Container06";
import Container07 from "./widgets/Container07";

export default function Main(){
    return(
    <div className="main-page-container">
        <Header/>
        <Container01 />
        <Container02 />
        <Container03 />
        <Container04 />
        <Container05 />
        <Container06 />
        <Container07 />
    </div>
    );
}