import React, { Component } from 'react'
import {connect} from 'react-redux'
import './style.scss'

import { DatePicker, List } from 'antd-mobile';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n;
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return `${dateStr} ${timeStr}`;
}

// If not using `List.Item` as children
// The `onClick / extra` props need to be processed within the component
const CustomChildren = ({ extra, onClick, children }) => (
  <div
    onClick={onClick}
    style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
  >
    {children}
    <span style={{ float: 'right', color: '#888' }}>{extra}</span>
  </div>
);



// class Demo extends React.Component {
//   state = {
//     date: now,
//     time: now,
//     utcDate: utcNow,
//     dpValue: null,
//     customChildValue: null,
//     visible: false,
//   }
// }



class register extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: now,
            time: now,
            utcDate: utcNow,
            dpValue: null,
            customChildValue: null,
            visible: false,
        }
    }

    render(){
        let props = this.props
        return(
            <div className="add">
                <div className='pic'>
                    <span className="iconfont icon-flow" onClick={this.back.bind(this)}></span>
                    <span onClick={this.btnAction.bind(this)} className="iconfont icon-tupian" ></span>
                    <span className='text'>memorandum</span>
                </div>

                <div className='write'><span className="iconfont icon-bianji"></span></div>

                <div className='select'>
                    <input type="text" className='input' placeholder='请输入提醒内容' ref='input' onChange={props.textlist} />

                    <DatePicker
                        mode="date"
                        title="Select Date"
                        extra="Optional"
                        value={this.state.date}
                        onChange={date => {console.log(this.state.date);
                        return this.setState({ date }) 
                        }}
                        >
                    <List.Item arrow="horizontal">Date</List.Item>
                    </DatePicker>

                    <DatePicker
                        mode="time"
                        minuteStep={2}
                        use12Hours
                        value={this.state.time}
                        onChange={time => {console.log(this.state.time)
                        let lxtime = this.state.time
                        return this.setState({ time })
                        }}
                        onChange={
                            props.timelist.bind(this,props)
                        }
                        >
                    <List.Item arrow="horizontal">Time (am/pm)</List.Item>
                    </DatePicker>

                </div>

                <div className='btn' onClick={props.btn.bind(this,props)} ><span>立即添加</span></div>
            </div>
        )
        
    }
    back(props){
        this.props.history.goBack()
    }
    btnAction(){
        if(window.plus){
        let cmr = window.plus.camera.getCamera(2);
            var res = cmr.supportedVideoResolutions[0];
            var fmt = cmr.supportedVideoFormats[0];
            console.log("Resolution: "+res+", Format: "+fmt);
            cmr.captureImage( function( path ){
                    alert( "Capture video success: " + path );  
                },
                function( error ) {
                    alert( "Capture video failed: " + error.message );
                },
                {resolution:res,format:fmt}
            );
        }else{
            console.log(1);
        }
    }
}



const mapStateToProps = (state)=>({
    timelist :state.list.timelist,
    text:state.list.text
})

const mapDispatchToProps = (dispatch) =>({
    timelist(props){
        dispatch({
            type:'timelist',
            value:this.state.time
        })
        console.log(props);
    },
    btn(props){
        dispatch({
            type:'text',
            value:this.refs.input.value
        })
        props.history.push('/dayList')
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(register)
