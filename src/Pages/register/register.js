import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import './style.scss'

// let obj = {
//     username:'',
//     email:'',
//     password:'',
//     birthday:''
// }

class register extends Component{
    constructor(props){
        super(props)
        // console.log(props);
    }
    render(){
        // console.log(this.props);
        let props = this.props
        return(
            <div className='register page'>
                <span className='iconfont icon-flow' onClick={this.back.bind(this,props)}></span>

                <h1 className='new'>New Account</h1>

                <div className='paizhao'><span className='iconfont icon-zhaoxiangji'></span></div>

                <div className='username'>
                    <span className='iconfont icon-yonghu'></span>
                    <input type="text"  placeholder='Username' onChange={props.username}/>
                </div>
                <div className='email'>
                    <span className='iconfont icon-youxiang'></span>
                    <input type="text"  placeholder='email' onChange={props.email}/>
                </div>
                <div className='password'>
                    <span className='iconfont icon-mima'></span>
                    <input type="text"  placeholder='password' onChange={props.password}/>
                </div>
                <div className='birthday'>
                    <span className='iconfont icon-shengri'></span>
                    <input type="text"  placeholder='birthday' onChange={props.birthday}/>
                </div>

                <div className='btn' onClick={props.registerAction.bind(this,props)}><span>Sign in</span></div>
            </div>
        )
    }
    back(props){
        console.log(props);
        props.history.goBack();
    }
}



const mapStateToProps = (state)=>({
    register:state.list.register,
    userlist:state.list.userlist
})

const mapDispatchToProps = (dispatch) =>({
    username(ev){
        dispatch({
            type:'username',
            value:ev.target.value
        })
    },
    email(ev){
        dispatch({
            type:'email',
            value:ev.target.value
        })
    },
    password(ev){
        dispatch({
            type:'password',
            value:ev.target.value
        })
    },
    birthday(ev){
        dispatch({
            type:'birthday',
            value:ev.target.value
        })
    },
    registerAction(props){
        dispatch({
            type:'adduser'
        })
        props.history.goBack();
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(register)
