import React, { useRef ,useEffect,useState,useCallback } from 'react'
import {connect} from 'react-redux'
import './style.scss'
import {requestCityList} from '../../store/reducers/list'
import Scroll from '../common/scroll/scroll'

const Area = (props) =>{
    
  
    const [list,setList] = useState([])
    const [hot,sethot] = useState([])

    const [a,setA] = useState(false)

    const text = useRef();

    useEffect(()=>{
        props.getCityList()
    },[])

    useEffect(()=>{
        if(props.city.length > 0){
            return
        }else{
            setList(props.city)
            
              Object.entries(props.city).map(([letter,city])=>{
                if(city.filter(item=>item.isHot == 1).length>0){
                  hot.push(...city.filter(item=>item.isHot == 1))
                  sethot(hot)
                }
              })
              // console.log(hot);    
        }
    },[props.city])

    const areaAction = useCallback((props)=>(()=>{
      // console.log(text);
      props.history.push({
        pathname:'/home',
        state:{
          city:text.current.innerHTML
        }
      })
    }))

    return(
      <div className='area'>
      <div className='head'><span>请选择城市</span></div>
        <Scroll>
          <div className='hot'>
            <h1>热门城市</h1>
            {
              hot.map(item=>(
                <span onClick={areaAction(props)} ref={text} key={item.cityId} className='hotcity'>{item.name}</span>
              ))
            }
          </div>
        {Object.entries(list).map(([letter, cities])=>{
            return (
              <div key={letter} className='citys'>
                <h1 className='letter'>{letter}</h1>
                <ul>
                  {
                    cities.map(city=>{
                      return <li ref={text} onClick={areaAction(props)} key={city.cityId}>{city.name}</li>
                    })
                  }
                </ul>
              </div>
            )
        })}
          </Scroll>
        </div>
    )
}


const mapStateToProps = (state)=>({
    city:state.list.citylist
})

const mapDispatchToProps = (dispatch) =>({
    async getCityList(){
        let action = requestCityList();
        // console.log(action);
         await dispatch(action)
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Area)
