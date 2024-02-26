import {Route, Switch,Redirect} from 'react-router-dom'
import './App.css';
import SignUpForm from "./components/SignUpForm"
import Home  from './components/Home'

const App = () => (
   <Switch>
    <Route exact path="/signup" component={SignUpForm} />
    <Route exact path = "/" component = {Home} />
    <Redirect to = "/signup" />
   </Switch>
)

export default App;
