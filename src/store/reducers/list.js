import 'whatwg-fetch'
import Http from '../../uilts/Http'


function getNowDate() {
    var str = "";
    var weekList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthList = ["January","February","March","April","May","June","July","August","September","October","November","December",]
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var week = date.getDay()-1;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    
    return {
      month : monthList[month],
      day : day > 10 ? day : "0" + day,
      seconds : seconds > 10 ? seconds : "0" + seconds,
      minutes : minutes > 10 ? minutes : "0" + minutes,
      hours : hours > 10 ? hours : "0" + hours,
      week : weekList[week]
    };
}












const initialState = {
  userlist: [
    {
      username:'11',
      email:'22',
      password:'22',
      birthday:'22'
    },
    {
      username:'22',
      email:'22',
      password:'11',
      birthday:'22'
    }
  ],
  register:{
    username:'',
    email:'',
    password:'',
    birthday:''
  },
  datalist:[
    {
      time1 : '8',
      time2 : 'AM',
      data : '下午写代码'
    },
    {
      time1 : '9',
      time2 : 'AM',
      data : '下午写喝茶'
    },
    {
      time1 : '10',
      time2 : 'AM',
      data : '下午玩游戏'
    }
  ],
  nowTime:getNowDate(),
  timelist:'',
  text:'',
  citylist:[]
}



export default (state = initialState, action)=>{
  switch (action.type) {
    case 'username':
      return {
        ...state,
        register:{
          ...state.register,
          username:action.value
        }
      }
    case 'email':
      return {
        ...state,
        register:{
          ...state.register,
          email:action.value
        }
      }
    case 'password':
      return {
        ...state,
        register:{
          ...state.register,
          password:action.value
        }
      }
    case 'birthday':
      return {
        ...state,
        register:{
          ...state.register,
          birthday:action.value
        }
      }
    case 'adduser':
      return {
        ...state,
        userlist:[
          ...state.userlist,
          state.register
        ]
      }
      case 'timelist':
      return {
        ...state,
        timelist:action.value
      }
      case 'text':
      return {
        ...state,
        datalist:[
          ...state.datalist,
          {
            time1:getNowDate().hours,
            time2:'AM',
            data:action.value
          }
        ]
      }
      case 'setCityList':
        // console.log(state,action.value  );
      return {
        ...state,
        citylist:action.value
      }   
    default:
      return state;
  }
  
}


export const requestCityList = ()=>async (dispatch)=>{
  console.log('开始数据请求');
  let response = await Http.get('https://m.maizuo.com/gateway',{k:680262},'mall.film-ticket.city.list')
  // console.log(response);
  let {data} = response
  let {cities} = data
  // console.log(cities);
  let tmp = {};
  cities.forEach(item => {
    let firstLetter = item.pinyin[0].toUpperCase();
    // console.log(firstLetter);
    if(!tmp[firstLetter]){
      tmp[firstLetter] = [];
    }
    tmp[firstLetter].push(item);
  });
  // console.log(tmp);

  let result = Object.keys(tmp).sort()
  // console.log(result);
  let tmp2 = {}
  result.forEach(item=>{
    tmp2[item] = tmp[item];
  })
  console.log(tmp2);
  
  dispatch({
    type :'setCityList',
    value:tmp2
  })
}