import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './style.scss'
import { Carousel, WingBlank } from 'antd-mobile';
import { Toast} from 'antd-mobile';

function showToast() {
    Toast.info('修改成功', 1);
  }

  const customIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="am-icon am-icon-md">
      <path fillRule="evenodd" d="M59.177 29.5s-1.25 0-1.25 2.5c0 14.47-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25" />
    </svg>
  );



class set extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
    componentDidMount() {
      // simulate img loading
      setTimeout(() => {
        this.setState({
          data: ['图片一', '图片二', '图片三'],
        });
      }, 100);

    //   console.log(this.props.userlist);

    Toast.loading('Loading...', 30, () => {
        console.log('Load complete !!!');
      });
  
      setTimeout(() => {
        Toast.hide();
      }, 3000);
      
    }
    render() {
        let props = this.props
      return (
          <div className='set'>
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>

        {/* 自己的代码 */}
                  <span className='iconfont icon-flow' onClick={this.back.bind(this,props)}></span>
                  
            <div className='username'>
            <span className='iconfont icon-yonghu'></span>
            <input type="text" value={props.username}  placeholder='重置您的Username' onChange={props.username}/>
            </div>
            <div className='email'>
                <span className='iconfont icon-youxiang'></span>
                <input type="text"  placeholder='重置您的email' onChange={props.email}/>
            </div>
            <div className='password'>
                <span className='iconfont icon-mima'></span>
                <input type="text"  placeholder='重置您的password' onChange={props.password}/>
            </div>
            <div className='birthday'>
                <span className='iconfont icon-shengri'></span>
                <input type="text"  placeholder='重置您的birthday' onChange={props.birthday}/>
            </div>

            <div className='btn' onClick={showToast} ><span>Setting</span></div>

        </div>
      );
    }
    back(props){
        props.history.goBack()
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


export default connect(mapStateToProps,mapDispatchToProps)(set)
