import { Switch, Route } from "react-router";
import { Cart } from "../pages/Cart";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

export const Routes = () => {

    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/cart'>
                <Cart />
            </Route>
            <Route exact path='/login'> 
                <Login />
            </Route>
        </Switch>
    )
}