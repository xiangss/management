import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './style.scss'
import pic1 from '../../assess/pic2.png'

class login extends Component{
    constructor(props){
        super(props)

    }
    render(){
        let props = this.props
        console.log(props);
        
        return(
            <div className='login page'>
                <img src={pic1} alt=""/>
                <span className='iconfont icon-wenhao'></span>
                <div className='username'>
                    <span className='iconfont icon-yonghu'></span>
                    <input type="text"  placeholder='Username' ref='username'/>
                </div>
                <div className='password'>
                    <span className='iconfont icon-mima'></span>
                    <input type="type" placeholder='Password' ref='password'/>
                </div>

                <div className='btn' onClick={this.login.bind(this,props)} ><span>Sign in</span></div>

                <span className='signup'  ><Link to='/register'>Sign up</Link></span>
            </div>
        )
    }
    login(props){
       const username = this.refs.username.value;
       const password = this.refs.password.value; 
       const userlist = props.userlist
       userlist.forEach(item=>{
           if(item.username == username && item.password == password){
               props.history.push('/start')
               return
           }
        //    alert('账号或密码错误！')
        
       })
        
    }

}

const mapStateToProps = (state)=>({
    userlist:state.list.userlist
})

const mapDispatchToProps = (dispatch) =>({
    
})


export default connect(mapStateToProps,mapDispatchToProps)(login)
