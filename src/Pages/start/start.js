import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './start.scss'

const Start = (props) =>(
    <div className="start">
        <h1 className='walk'>Walkthrough</h1>

        <div className="bian"><span className='iconfont icon-bianji'></span></div>

        <span className='word'>The last task management app you'll ever need</span>

        <div className="left"><span><Link to='/dayList'>Skip</Link></span></div>

        <div className="right"><span><Link to='/dayList'>Next</Link></span></div>
    </div>
)


const mapStateToProps = (state)=>({
    
})

const mapDispatchToProps = (dispatch) =>({
    
})


export default connect(mapStateToProps,mapDispatchToProps)(Start)
