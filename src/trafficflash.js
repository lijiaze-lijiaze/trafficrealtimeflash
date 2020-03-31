import React from 'react';
import './App.css';
const img_arr = {
  T:require('./img/T.svg'),
  R:require('./img/R.svg'),
  P:require('./img/P.svg'),
  D:require('./img/D.svg'),
  I  : require('./img/I.svg'),
  IL : require('./img/IL.svg'),
  ILR: require('./img/ILR.svg'),
  ILT: require('./img/ILT.svg'),
  IR : require('./img/IR.svg'),
  IT : require('./img/IT.svg'),
  L  : require('./img/L.svg'),
  LR : require('./img/LR.svg'),
  LT : require('./img/LT.svg'),
  Q : require('./img/Q.svg'),
  A : require('./img/A.svg'),
  AQ : require('./img/AQ.svg')
}
class Trafficflash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: [],
      colorstation:{
        red:[],
        yellow:[],
        green:[]
      },
      newarr: [],
      wayarr: {
        N: {arrows:['R'],people:['']},
        S: {arrows:['R'],people:['']},
        W: {arrows:['I','L','R'],people:['']},
        E: {arrows:['I'],people:['']},
        NE:{arrows:[],people:['']},
        SE:{arrows:[],people:['P']},
        SW:{arrows:['L','R'],people:['']},
        NW:{arrows:[],people:['Q']},
      },
      multiway:false,//多方向路口开关
    }

  }
  componentWillReceiveProps(newProps) {

    this.setState({
      colorstation: newProps.data
    }, () => {
      this.dataRemix()
    })

  }
  componentDidMount() {

  }
  render() {
    const { colorstation,wayarr,multiway } = this.state
    const aaa='R'
    if(multiway){
      return (
        <div>
          {colorstation.toString()}
          <div style={{width:'300px',height:'300px',border:'2px solid #fff',position:'fixed',top:'26%',left:'40%',overflow:'hidden'}}>
            <img  className={'mu-arrows-n'} src={img_arr[wayarr.N.arrows.join('')]}/>
            <img  className={'mu-arrows-s'} src={img_arr[wayarr.S.arrows.join('')]}/>
            <img  className={'mu-arrows-e'} src={img_arr[wayarr.E.arrows.join('')]}/>
            <img  className={'mu-arrows-w'} src={img_arr[wayarr.W.arrows.join('')]}/>
            <img  className={'mu-arrows-ne'} src={img_arr[wayarr.NE.arrows.join('')]}/>
            <img  className={'mu-arrows-se'} src={img_arr[wayarr.SE.arrows.join('')]}/>
            <img  className={'mu-arrows-sw'} src={img_arr[wayarr.SW.arrows.join('')]}/>
            <img  className={'mu-arrows-nw'} src={img_arr[wayarr.NW.arrows.join('')]}/>
            <img  className={'mu-people-n-p'} src={img_arr[wayarr.N.people.join('')]}/>
            <img  className={'mu-people-s-p'} src={img_arr[wayarr.S.people.join('')]}/>
            <img  className={'mu-people-w-p'} src={img_arr[wayarr.W.people.join('')]}/>
            <img  className={'mu-people-e-p'} src={img_arr[wayarr.E.people.join('')]}/>
            <img  className={'mu-people-ne-p'} src={img_arr[wayarr.NE.people.join('')]}/>
            <img  className={'mu-people-se-p'} src={img_arr[wayarr.SE.people.join('')]}/>
            <img  className={'mu-people-sw-p'} src={img_arr[wayarr.SW.people.join('')]}/>
            <img  className={'mu-people-nw-p'} src={img_arr[wayarr.NW.people.join('')]}/>
          </div>
          
        </div>
      )
    }else{
      return (
        <div>
          {colorstation.toString()}
          <div style={{width:'300px',height:'300px',border:'2px solid #fff',position:'fixed',top:'26%',left:'40%',overflow:'hidden'}}>
          <img className={`${wayarr.N.arrows.indexOf('I') > -1 ? 'arrows-n arrows-n-I' : 'arrows-n arrows-n-I  hide'}`}  src={img_arr.I}/>
           <img  className={`${wayarr.N.arrows.indexOf('L') > -1 ? 'arrows-n arrows-n-L' : 'arrows-n arrows-n-L  hide'}`} src={img_arr.L}/>
          <img  className={`${wayarr.N.arrows.indexOf('R') > -1 ? 'arrows-n arrows-n-R' : 'arrows-n arrows-n-R  hide'}`} src={img_arr.R}/>
          <img  className={`${wayarr.N.arrows.indexOf('T') > -1 ? 'arrows-n arrows-n-T' : 'arrows-n arrows-n-T  hide'}`} src={img_arr.T}/> 
           {/*  <img  className={'arrows-n'} src={img_arr[wayarr.N.arrows.join('')]}/> */}
            <img  className={'arrows-s'} src={img_arr[wayarr.S.arrows.join('')]}/>
            <img  className={'arrows-e'} src={img_arr[wayarr.E.arrows.join('')]}/>
            <img  className={'arrows-w'} src={img_arr[wayarr.W.arrows.join('')]}/>
            <img  className={'people-n-p'} src={img_arr[wayarr.N.people.join('')]}/>
            <img  className={'people-s-p'} src={img_arr[wayarr.S.people.join('')]}/>
            <img  className={'people-w-p'} src={img_arr[wayarr.W.people.join('')]}/>
            <img  className={'people-e-p'} src={img_arr[wayarr.E.people.join('')]}/>
          </div>
          
        </div>
      )
    }
    
  }
  setArrows = (arrows) =>{
    console.log('arrows',arrows)
    switch (arrows){
      case '左转':return 'L';break;
      case '直行':return 'I';break;
      case '右转':return 'R';break;
      case '掉头':return 'T';break;
      default:return '';break;
   
    }
  }
  setPeople = (people) =>{
    console.log('people',people)
    switch (people){

      case '行人':return 'P';break;
      case '行一':return 'Q';break;
      case '行二':return 'A';break;
      case '非机':return 'B';break;
      default:return '';break;
   
    }
  }
  setDerection = (derection) =>{
    let multiDerection = RegExp(/[东南西北][东南西北].+[东南西北][东南西北]|[东南西北].+[东南西北]/);
    let multiDerectionFront = RegExp(/[东南西北][东南西北]|[东南西北]/);
    console.log('derection',derection)
    if(multiDerection.test(derection)){
      switch (multiDerectionFront.exec(derection)[0]){
        case '东':return 'E';break;
        case '东北':return 'NE';break;
        case '东南':return 'SE';break;
        case '南':return 'S';break;
        case '西':return 'W';break;
        case '西南':return 'SW';break;
        case '西北':return 'NW';break;
        case '北':return 'N';break;
        default:return '';break;
      }
    }else{
      switch (derection){
        case '东':return 'E';break;
        case '东北':return 'NE';break;
        case '东南':return 'SE';break;
        case '南':return 'S';break;
        case '西':return 'W';break;
        case '西南':return 'SW';break;
        case '西北':return 'NW';break;
        case '北':return 'N';break;
        default:return '';break;
      }
    }
    
  }

  dataRemix = () => {
    const { colorstation } = this.state;
    let newarr = [];
    let setArrows = this.setArrows
    let setDerection = this.setDerection
    let setPeople = this.setPeople
    let regexArrows= RegExp(/直.+|左.+|右.+|掉.+|调.+/);
    let regexPeople = RegExp(/行.+|非.+/);
    let regexDerection = RegExp(/[东南西北][东南西北].+[东南西北][东南西北]|[东南西北].+[东南西北]|[东南西北][东南西北]|[东南西北]/);
    Object.keys(colorstation).forEach(key =>{
      colorstation[key].forEach((stationItem, index) => {
        newarr[index] = []
        if(regexArrows.exec(stationItem)){ newarr[index].arrows = setArrows(regexArrows.exec(stationItem)[0]); }
        if(regexPeople.exec(stationItem)){newarr[index].people = setPeople(regexPeople.exec(stationItem)[0]);}
        if(regexDerection.exec(stationItem)){newarr[index].derection = setDerection(regexDerection.exec(stationItem)[0]);}
        newarr[index].color = key
        console.log(newarr)
      })
    })

    this.editWayarr(newarr)
  }

  editWayarr = (newarr) => {
    let wayarr = {
      N: {arrows:[],people:[]},
      S: {arrows:[],people:[]},
      W: {arrows:[],people:[]},
      E: {arrows:[],people:[]},
      NE:{arrows:[],people:[]},
      SE:{arrows:[],people:[]},
      SW:{arrows:[],people:[]},
      NW:{arrows:[],people:[]},
    }
    newarr.forEach((x, index) => {
      if(x.arrows){
        wayarr[x.derection].arrows.push(x.arrows)
      }
      if(x.people){
        wayarr[x.derection].people.push(x.people)
      }
      if(x.color){
        wayarr[x.derection].color=x.color
      }
      
    })
    Object.keys(wayarr).forEach(x => {
      wayarr[x].arrows.sort()
      wayarr[x].people.sort()
    })
     this.setState({
      wayarr
    },()=>{
      console.log(this.state.wayarr)
    }) 
  }
  
  
}

export default Trafficflash;
