import { Route, Switch } from "react-router-dom";
import CalcLoan from "./components/calcLoan/CalcLoan";
import Main from "./components/main/Main";


export default function App(){
    return (
    <div className="app-container">
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/loan-interest-calculator">
                <CalcLoan />
            </Route>
        </Switch>
    </div>
    );
}