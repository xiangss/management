import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './style.scss'

const title = [
    {id:1,title:'Lists',icon:'icon-yonghu',path:'/dayList'},
    {id:2,title:'addList',icon:'icon-icon-test1',path:'/addList'},
    {id:3,title:'start',icon:'icon-taiyang-copy',path:'/start'},
    {id:4,title:'area',icon:'icon-dizhi',path:'/area'},
    {id:5,title:'setting',icon:'icon-set',path:'/setting'},
    {id:6,title:'logout',icon:'icon-tuichu',path:'/logout'},
    {id:7,title:'setting',icon:'icon-yuechi',path:'/addList'}
]

const Home = (props) =>{
    console.log(props);
    
    return(
        <div className="home">
            <h1>Adam Lane</h1>
            <div className='email'>823112914@qq.com</div>
    
            <div className='list'>
            {
                title.map(item=>(

                    <Link to={item.path} key={item.id}>
                        <span className={`iconfont ${item.icon}`} ></span>
                        <span className='title'>{item.title}</span>
                        {
                            item.id === 1 && <span className='count'>{props.location.state.count}</span>
                        }
                        {/* {
                            item.id === 4 && <span className='city'>{props.location.state}</span>
                        } */}
                    </Link> 
                ))
            }
            </div>
        </div>
    )
}


const mapStateToProps = (state)=>({
    
})

const mapDispatchToProps = (dispatch) =>({
    
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)
