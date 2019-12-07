import React, { Component, lazy, Suspense } from 'react'
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Loading from './components/Loading/Loading'
// import Header from './components/Header/Header'


const addList = lazy(()=>import('./Pages/addList/addList'));
// const NotFind = lazy(()=>import('./pages/common/notFind/notFind'));
const dayList = lazy(()=>import('./Pages/dayList/dayList'));
const login = lazy(()=>import('./Pages/login/login'));
const register = lazy(()=>import('./Pages/register/register'));
const setting = lazy(()=>import('./Pages/setting/settings'));
const start = lazy(()=>import('./Pages/start/start'));
const home = lazy(()=>import('./Pages/home/home'));
const area = lazy(()=>import('./Pages/area/area'));
const logout = lazy(()=>import('./Pages/logout/logout'));


class App extends Component {
  
  render(props){
    // let location = useLocation();
    // console.log(location);
    return(
    <Router>
      <Suspense fallback={<Loading/>}>

        <Switch>

        <Route path="/" exact render={()=>{
          return <Redirect to="/login"/>
        }}/>

        <Route path="/login" component={login}/>
        <Route path="/addList" component={addList}/>
        <Route path="/dayList" component={dayList}/>
        <Route path="/register" component={register}/>
        <Route path="/setting" component={setting}/>
        <Route path="/start" component={start}/>
        <Route path="/home" component={home}/>
        <Route path="/area" component={area}/>
        <Route path="/logout" component={logout}/>

        {/* <Route component={NotFind}/> */}

        </Switch>
      </Suspense>
    </Router>
    )
  }
}


export default App;