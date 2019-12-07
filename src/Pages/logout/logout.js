import React, { Component } from 'react'
import {connect} from 'react-redux'
import './style.scss'
import { Tabs, Badge } from 'antd-mobile';
import { Toast} from 'antd-mobile';
import { WingBlank, WhiteSpace, Icon,Button } from 'antd-mobile';


function showToast() {
    Toast.info('退出成功', 1);
}

const customIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="am-icon am-icon-md">
      <path fillRule="evenodd" d="M59.177 29.5s-1.25 0-1.25 2.5c0 14.47-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25" />
    </svg>
);

const tabs = [
{ title: <Badge >评价</Badge> },
{ title: <Badge >退出账号</Badge> },
{ title: <Badge dot>注销账户</Badge> },
];

const tabs2 = [
{ title: '评价', sub: '1' },
{ title: '退出账号', sub: '2' },
{ title: '注销账户', sub: '3' },
];



class logout extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {

    
  
      setTimeout(() => {
        Toast.hide();
      }, 3000);

      
    }
    render() {
        let props = this.props
      return (
          <div className='logout'>
            <span className='iconfont icon-flow' onClick={this.back.bind(this,props)}></span>
            <div className='tab' id='tab'>
            <Tabs tabs={tabs}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', backgroundColor: '#fff' }}>
                    <h1 className='pingjia'>请评价app</h1>
                    <textarea name="" id="" cols="30" rows="10" className='text'></textarea>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', backgroundColor: '#fff' }}>
                    <Button onClick={this.tuichu.bind(this,props)} type="warning" style={{width:'150px'}}>退出登录</Button><WhiteSpace />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', backgroundColor: '#fff' }}>
                    <Button onClick={this.zhuxiao.bind(this,props)} type="primary" style={{width:'150px'}}>注销账户</Button><WhiteSpace />
                </div>
            </Tabs>
            </div>
        </div>
      );
    }
    back(props){
        props.history.goBack()
    }
    tuichu(props){
        props.history.push('/login')
    }
    zhuxiao(props){
        props.history.push('/register')
    }

  }


const mapStateToProps = (state)=>({

})

const mapDispatchToProps = (dispatch) =>({
    
})


export default connect(mapStateToProps,mapDispatchToProps)(logout)
