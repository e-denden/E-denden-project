import { Route, Switch } from "react-router-dom";
import CalcLoan from "./components/calcLoan/CalcLoan";
import CreditLoan from "./components/creditLoan/CreditLoan";
import Main from "./components/main/Main";


export default function App(){
    return (
    <div className="app-container">
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
        </Switch>
    </div>
    );
}