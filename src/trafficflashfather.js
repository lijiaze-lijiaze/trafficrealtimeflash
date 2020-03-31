import React from 'react';

import './App.css';
import Trafficflash from './trafficflash'
import { Select,Input } from 'antd';
const { Search } = Input;
const { Option } = Select;
const station = []
class Trafficflashfather extends React.Component {
  constructor(props){
    super(props);
    this.state={
     station:[],
     colorstation:{
      red:[],
      yellow:[],
      green:[]
    },
    }
   
  }
  componentDidMount(){
   
  }
  render () {
   const{station,colorstation}=this.state
    return (
      <div>
       
       <Search
      placeholder="input search text"
      onSearch={this.handlesearch}
      style={{ width: 200 }}
    />
         <Select defaultValue="北向东左转" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="北向东左转"> 北向东左转</Option>
          <Option value="北向南直行"> 北向南直行</Option>
          <Option value="北向西右转"> 北向西右转</Option> 
          <Option value="北向南掉头"> 北向南掉头</Option>
          <Option value="北向南行人"> 北向南行人</Option>
          <Option value="北向南行一"> 北向南行一</Option>
          <Option value="北向南行二"> 北向南行二</Option>
          <Option value="北向南非机"> 北向南非机</Option>


          <Option value="东向南左转"> 东向南左转</Option>
          <Option value="东向西直行"> 东向西直行</Option>
          <Option value="东向北右转"> 东向北右转</Option>
          <Option value="东向西掉头"> 东向西掉头</Option>
          <Option value="东向西行人"> 东向西行人</Option>
          <Option value="东向西行一"> 东向西行一</Option>
          <Option value="东向西行二"> 东向西行二</Option>
          <Option value="东向西非机"> 东向西非机</Option>

          <Option value="东北左转"> 东北左转</Option>
          <Option value="东北直行"> 东北直行</Option>
          <Option value="东北右转"> 东北右转</Option>
          <Option value="东北掉头"> 东北掉头</Option>
          <Option value="东北行人"> 东北行人</Option>
          <Option value="东北行一"> 东北行一</Option>
          <Option value="东北行二"> 东北行二</Option>
          <Option value="东北非机"> 东北非机</Option>

          <Option value="东南左转"> 东南左转</Option>
          <Option value="东南直行"> 东南直行</Option>
          <Option value="东南右转"> 东南右转</Option>
          <Option value="东南掉头"> 东南掉头</Option>
          <Option value="东南行人"> 东南行人</Option>
          <Option value="东南行一"> 东南行一</Option>
          <Option value="东南行二"> 东南行二</Option>
          <Option value="东南非机"> 东南非机</Option>

          <Option value="南向西左转"> 南向西左转</Option>
          <Option value="南向北直行"> 南向北直行</Option>
          <Option value="南向东右转"> 南向东右转</Option>
          <Option value="南向北掉头"> 南向北掉头</Option>
          <Option value="南向北行人"> 南向北行人</Option>
          <Option value="南向北行一"> 南向北行一</Option>
          <Option value="南向北行二"> 南向北行二</Option>
          <Option value="南向北非机"> 南向北非机</Option>

          <Option value="西向北左转"> 西向北左转</Option>
          <Option value="西向东直行"> 西向东直行</Option>
          <Option value="西向南右转"> 西向南右转</Option>
          <Option value="西向东掉头"> 西向东掉头</Option>
          <Option value="西向东行人"> 西向东行人</Option>
          <Option value="西向东行一"> 西向东行一</Option>
          <Option value="西向东行二"> 西向东行二</Option>
          <Option value="西向东非机"> 西向东非机</Option>

          <Option value="西南左转"> 西南左转</Option>
          <Option value="西南直行"> 西南直行</Option>
          <Option value="西南右转"> 西南右转</Option>
          <Option value="西南掉头"> 西南掉头</Option>
          <Option value="西南行人"> 西南行人</Option>
          <Option value="西南行一"> 西南行一</Option>
          <Option value="西南行二"> 西南行二</Option>
          <Option value="西南非机"> 西南非机</Option>

          <Option value="西北左转"> 西北左转</Option>
          <Option value="西北直行"> 西北直行</Option>
          <Option value="西北右转"> 西北右转</Option>
          <Option value="西北掉头"> 西北掉头</Option>
          <Option value="西北行人"> 西北行人</Option>
          <Option value="西北行一"> 西北行一</Option>
          <Option value="西北行二"> 西北行二</Option>
          <Option value="西北非机"> 西北非机</Option>
        
          <Option value="西北向东南行人"> 西北向东南行人</Option>
          <Option value="西非机"> 西非机</Option>
        </Select> 
        <Trafficflash data={colorstation}></Trafficflash>
      </div>
    ) 
  }
  handleChange=(value)=> {
    const{station,colorstation}=this.state
    console.log(`selected ${value}`);
    station.push(value);
    colorstation.yellow.push(value);
    this.setState({
      station,
      colorstation
    })
  }
  handlesearch=(value)=> {
    const{station}=this.state
    console.log(`selected ${value}`);
    station.push(value);
    this.setState({
      station
    })
  }
}

export default Trafficflashfather;
