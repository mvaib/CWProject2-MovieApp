import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Component/Header/Header'
import HomePages from './Component/Homes/HomePages'
import Footer from './Component/Footer/Footer'
import Series from './Component/Series/Series'
import Login from './Component/Loging/Login'
import CreateAccount from './Component/CreateAccount/CreateAccount'

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePages}/>
          <Route exact path='/series' component={Series}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/createaccount' component={CreateAccount}></Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App
