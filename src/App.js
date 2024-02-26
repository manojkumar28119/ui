import {Route, Switch,Redirect} from 'react-router-dom'
import './App.css';
import SignUpForm from "./components/SignUpForm"
import Home  from './components/Home'
import NotFound from "./components/NotFound"

const App = () => (
   <Switch>
    <Route exact path="/signup" component={SignUpForm} />
    <Route exact path = "/" component = {Home} />
    <Route path = "/not-found" component = {NotFound} />
    <Redirect to = "/not-found" />
   </Switch>
)

export default App;
