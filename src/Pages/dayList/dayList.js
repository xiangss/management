import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './style.scss'
import Scroll from '../common/scroll/scroll'



class register extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);
        
        let props = this.props
        let data = props.datalist
        return(
            <div className="dayList">
                <span className='iconfont icon-caidan' onClick={this.homeAction.bind(this,props)}></span>
                <span className='data'>{props.nowTime.week}</span>
                <span className='iconfont icon-taiyang-copy'></span>
                <span className='data2 '>{props.nowTime.month} {props.nowTime.day} 2019</span>
                <span className='wendu'>32</span>
                <span className='area'>San Francisco</span>

                <div className='add ' onClick={props.addlist.bind(this,props)}><span className='iconfont icon-icon-test1'></span></div>

                <Scroll className='bs'>
                    <ul>
                        {
                            data.map((item,index)=>(
                                <li key={index}>
                                    <span className='time'>{item.time1}</span>
                                    <span className='time2'>{item.time2}</span>
                                    <span className='text'>{item.data}</span>
                                </li>
                            ))
                        }
                    </ul>
                </Scroll>
            </div>
        )
    }
    homeAction(props){
        console.log(props.datalist.length);
        
        props.history.push({
            pathname:'/home',
            state:{
                count:props.datalist.length
            }
        })
    }
}



const mapStateToProps = (state)=>({
    datalist : state.list.datalist,
    nowTime : state.list.nowTime
})

const mapDispatchToProps = (dispatch) =>({
    addlist(props){
        console.log(1);
        props.history.push('/addList')
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(register)
