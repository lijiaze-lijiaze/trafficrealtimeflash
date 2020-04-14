import React from 'react';
import './App.css';
const img_arr_red = {
  T:require('./img/red/T.svg'),
  R:require('./img/red/R.svg'),
  P:require('./img/red/P.svg'),
  D:require('./img/red/D.svg'),
  I  : require('./img/red/I.svg'),
  L  : require('./img/red/L.svg'),
  Q : require('./img/red/Q.svg'),
  A : require('./img/red/A.svg'),
  AQ : require('./img/red/AQ.svg')
}
const img_arr_green = {
  T:require('./img/green/T.svg'),
  R:require('./img/green/R.svg'),
  P:require('./img/green/P.svg'),
  D:require('./img/green/D.svg'),
  I  : require('./img/green/I.svg'),
  L  : require('./img/green/L.svg'),
  Q : require('./img/green/Q.svg'),
  A : require('./img/green/A.svg'),
  AQ : require('./img/green/AQ.svg')
}
const img_arr_yellow = {
  T:require('./img/yellow/T.svg'),
  R:require('./img/yellow/R.svg'),
  P:require('./img/yellow/P.svg'),
  D:require('./img/yellow/D.svg'),
  I  : require('./img/yellow/I.svg'),
  L  : require('./img/yellow/L.svg'),
  Q : require('./img/yellow/Q.svg'),
  A : require('./img/yellow/A.svg'),
  AQ : require('./img/yellow/AQ.svg')
}
const img_arr_flashyellow = {
  T:require('./img/flashyellow/T.svg'),
  R:require('./img/flashyellow/R.svg'),
  P:require('./img/flashyellow/P.svg'),
  D:require('./img/flashyellow/D.svg'),
  I  : require('./img/flashyellow/I.svg'),
  L  : require('./img/flashyellow/L.svg'),
  Q : require('./img/flashyellow/Q.svg'),
  A : require('./img/flashyellow/A.svg'),
  AQ : require('./img/flashyellow/AQ.svg')
}
class Trafficflash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: [],
      colorstation:{
        red:[],
        yellow:[],
        green:[],
        flashyellow:[]
      },
      newarr: [],
      wayarr_red: {
        N: {arrows:[],people:[]},
        S: {arrows:[],people:[]},
        W: {arrows:[],people:[]},
        E: {arrows:[],people:[]},
      },
      wayarr_green: {
        N: {arrows:[],people:[]},
        S: {arrows:[],people:[]},
        W: {arrows:[],people:[]},
        E: {arrows:[],people:[]},
      },
      wayarr_yellow: {
        N: {arrows:[],people:[]},
        S: {arrows:[],people:[]},
        W: {arrows:[],people:[]},
        E: {arrows:[],people:[]},
      },
      wayarr_flashyellow: {
        N: {arrows:[],people:[]},
        S: {arrows:[],people:[]},
        W: {arrows:[],people:[]},
        E: {arrows:[],people:[]},
      },
      wayarr: {
        N: {arrows:['I','L','R','T'],people:['P']},
        S: {arrows:['I','L','R','T'],people:['P']},
        W: {arrows:['I','L','R','T'],people:['P']},
        E: {arrows:['I','L','R','T'],people:['P']},
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
    this.dataRemix()
  }
  render() {
    const { colorstation,wayarr_red,wayarr_green,wayarr_yellow,wayarr_flashyellow,wayarr,multiway } = this.state
    const aaa='R'
    if(multiway){
      return (
        <div>
         
          <div style={{width:'300px',height:'300px',border:'2px solid #fff',position:'fixed',top:'26%',left:'20%',overflow:'hidden'}}>
            {/* <img  className={'mu-arrows-n'} src={img_arr[wayarr.N.arrows.join('')]}/>
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
            <img  className={'mu-people-nw-p'} src={img_arr[wayarr.NW.people.join('')]}/> */}
          </div>
          
        </div>
      )
    }else{
      return (
        <div>
         
          <div className='trafficrealtimeflash' style={{width:'150px',height:'150px',border:'2px solid #fff',position:'relative',overflow:'hidden'}}>
          
          
          
          <img className={`${wayarr_yellow.N.arrows.indexOf('I') > -1 ? 'arrows-n arrows-n-I' : 'arrows-n arrows-n-I  hide'}`}  src={img_arr_yellow.I}/>
          <img  className={`${wayarr_yellow.N.arrows.indexOf('L') > -1 ? 'arrows-n arrows-n-L' : 'arrows-n arrows-n-L  hide'}`} src={img_arr_yellow.L}/>
          <img  className={`${wayarr_yellow.N.arrows.indexOf('R') > -1 ? 'arrows-n arrows-n-R' : 'arrows-n arrows-n-R  hide'}`} src={img_arr_yellow.R}/>
          <img  className={`${wayarr_yellow.N.arrows.indexOf('T') > -1 ? 'arrows-n arrows-n-T' : 'arrows-n arrows-n-T  hide'}`} src={img_arr_yellow.T}/> 
           {/*  <img  className={'arrows-n'} src={img_arr_yellow[wayarr.N.arrows.join('')]}/> */}
          <img className={`${wayarr_yellow.S.arrows.indexOf('I') > -1 ? 'arrows-s arrows-s-I' : 'arrows-s arrows-s-I  hide'}`}  src={img_arr_yellow.I}/>
          <img  className={`${wayarr_yellow.S.arrows.indexOf('L') > -1 ? 'arrows-s arrows-s-L' : 'arrows-s arrows-s-L  hide'}`} src={img_arr_yellow.L}/>
          <img  className={`${wayarr_yellow.S.arrows.indexOf('R') > -1 ? 'arrows-s arrows-s-R' : 'arrows-s arrows-s-R  hide'}`} src={img_arr_yellow.R}/>
          <img  className={`${wayarr_yellow.S.arrows.indexOf('T') > -1 ? 'arrows-s arrows-s-T' : 'arrows-s arrows-s-T  hide'}`} src={img_arr_yellow.T}/> 
            {/* <img  className={'arrows-s'} src={img_arr_yellow[wayarr.S.arrows.join('')]}/> */}
          <img className={`${wayarr_yellow.E.arrows.indexOf('I') > -1 ? 'arrows-e arrows-e-I' : 'arrows-e arrows-e-I  hide'}`}  src={img_arr_yellow.I}/>
          <img  className={`${wayarr_yellow.E.arrows.indexOf('L') > -1 ? 'arrows-e arrows-e-L' : 'arrows-e arrows-e-L  hide'}`} src={img_arr_yellow.L}/>
          <img  className={`${wayarr_yellow.E.arrows.indexOf('R') > -1 ? 'arrows-e arrows-e-R' : 'arrows-e arrows-e-R  hide'}`} src={img_arr_yellow.R}/>
          <img  className={`${wayarr_yellow.E.arrows.indexOf('T') > -1 ? 'arrows-e arrows-e-T' : 'arrows-e arrows-e-T  hide'}`} src={img_arr_yellow.T}/> 
            {/* <img  className={'arrows-e'} src={img_arr_yellow[wayarr.E.arrows.join('')]}/> */}
          <img className={`${wayarr_yellow.W.arrows.indexOf('I') > -1 ? 'arrows-w arrows-w-I' : 'arrows-w arrows-w-I  hide'}`}  src={img_arr_yellow.I}/>
          <img  className={`${wayarr_yellow.W.arrows.indexOf('L') > -1 ? 'arrows-w arrows-w-L' : 'arrows-w arrows-w-L  hide'}`} src={img_arr_yellow.L}/>
          <img  className={`${wayarr_yellow.W.arrows.indexOf('R') > -1 ? 'arrows-w arrows-w-R' : 'arrows-w arrows-w-R  hide'}`} src={img_arr_yellow.R}/>
          <img  className={`${wayarr_yellow.W.arrows.indexOf('T') > -1 ? 'arrows-w arrows-w-T' : 'arrows-w arrows-w-T  hide'}`} src={img_arr_yellow.T}/> 
            {/* <img  className={'arrows-w'} src={img_arr_yellow[wayarr.W.arrows.join('')]}/> */}
            <img  className={'people-n-p'} src={img_arr_yellow[wayarr_yellow.N.people.join('')]}/>
            <img  className={'people-s-p'} src={img_arr_yellow[wayarr_yellow.S.people.join('')]}/>
            <img  className={'people-w-p'} src={img_arr_yellow[wayarr_yellow.W.people.join('')]}/>
            <img  className={'people-e-p'} src={img_arr_yellow[wayarr_yellow.E.people.join('')]}/>
         
         
          <img className={`${wayarr_red.N.arrows.indexOf('I') > -1 ? 'arrows-n arrows-n-I' : 'arrows-n arrows-n-I  hide'}`}  src={img_arr_red.I}/>
          <img  className={`${wayarr_red.N.arrows.indexOf('L') > -1 ? 'arrows-n arrows-n-L' : 'arrows-n arrows-n-L  hide'}`} src={img_arr_red.L}/>
          <img  className={`${wayarr_red.N.arrows.indexOf('R') > -1 ? 'arrows-n arrows-n-R' : 'arrows-n arrows-n-R  hide'}`} src={img_arr_red.R}/>
          <img  className={`${wayarr_red.N.arrows.indexOf('T') > -1 ? 'arrows-n arrows-n-T' : 'arrows-n arrows-n-T  hide'}`} src={img_arr_red.T}/> 
           {/*  <img  className={'arrows-n'} src={img_arr_red[wayarr.N.arrows.join('')]}/> */}
          <img className={`${wayarr_red.S.arrows.indexOf('I') > -1 ? 'arrows-s arrows-s-I' : 'arrows-s arrows-s-I  hide'}`}  src={img_arr_red.I}/>
          <img  className={`${wayarr_red.S.arrows.indexOf('L') > -1 ? 'arrows-s arrows-s-L' : 'arrows-s arrows-s-L  hide'}`} src={img_arr_red.L}/>
          <img  className={`${wayarr_red.S.arrows.indexOf('R') > -1 ? 'arrows-s arrows-s-R' : 'arrows-s arrows-s-R  hide'}`} src={img_arr_red.R}/>
          <img  className={`${wayarr_red.S.arrows.indexOf('T') > -1 ? 'arrows-s arrows-s-T' : 'arrows-s arrows-s-T  hide'}`} src={img_arr_red.T}/> 
            {/* <img  className={'arrows-s'} src={img_arr_red[wayarr.S.arrows.join('')]}/> */}
          <img className={`${wayarr_red.E.arrows.indexOf('I') > -1 ? 'arrows-e arrows-e-I' : 'arrows-e arrows-e-I  hide'}`}  src={img_arr_red.I}/>
          <img  className={`${wayarr_red.E.arrows.indexOf('L') > -1 ? 'arrows-e arrows-e-L' : 'arrows-e arrows-e-L  hide'}`} src={img_arr_red.L}/>
          <img  className={`${wayarr_red.E.arrows.indexOf('R') > -1 ? 'arrows-e arrows-e-R' : 'arrows-e arrows-e-R  hide'}`} src={img_arr_red.R}/>
          <img  className={`${wayarr_red.E.arrows.indexOf('T') > -1 ? 'arrows-e arrows-e-T' : 'arrows-e arrows-e-T  hide'}`} src={img_arr_red.T}/> 
            {/* <img  className={'arrows-e'} src={img_arr_red[wayarr.E.arrows.join('')]}/> */}
          <img className={`${wayarr_red.W.arrows.indexOf('I') > -1 ? 'arrows-w arrows-w-I' : 'arrows-w arrows-w-I  hide'}`}  src={img_arr_red.I}/>
          <img  className={`${wayarr_red.W.arrows.indexOf('L') > -1 ? 'arrows-w arrows-w-L' : 'arrows-w arrows-w-L  hide'}`} src={img_arr_red.L}/>
          <img  className={`${wayarr_red.W.arrows.indexOf('R') > -1 ? 'arrows-w arrows-w-R' : 'arrows-w arrows-w-R  hide'}`} src={img_arr_red.R}/>
          <img  className={`${wayarr_red.W.arrows.indexOf('T') > -1 ? 'arrows-w arrows-w-T' : 'arrows-w arrows-w-T  hide'}`} src={img_arr_red.T}/> 
            {/* <img  className={'arrows-w'} src={img_arr_red[wayarr.W.arrows.join('')]}/> */}
            <img  className={'people-n-p'} src={img_arr_red[wayarr_red.N.people.join('')]}/>
            <img  className={'people-s-p'} src={img_arr_red[wayarr_red.S.people.join('')]}/>
            <img  className={'people-w-p'} src={img_arr_red[wayarr_red.W.people.join('')]}/>
            <img  className={'people-e-p'} src={img_arr_red[wayarr_red.E.people.join('')]}/>


          <img className={`${wayarr_green.N.arrows.indexOf('I') > -1 ? 'arrows-n arrows-n-I' : 'arrows-n arrows-n-I  hide'}`}  src={img_arr_green.I}/>
          <img  className={`${wayarr_green.N.arrows.indexOf('L') > -1 ? 'arrows-n arrows-n-L' : 'arrows-n arrows-n-L  hide'}`} src={img_arr_green.L}/>
          <img  className={`${wayarr_green.N.arrows.indexOf('R') > -1 ? 'arrows-n arrows-n-R' : 'arrows-n arrows-n-R  hide'}`} src={img_arr_green.R}/>
          <img  className={`${wayarr_green.N.arrows.indexOf('T') > -1 ? 'arrows-n arrows-n-T' : 'arrows-n arrows-n-T  hide'}`} src={img_arr_green.T}/> 
           {/*  <img  className={'arrows-n'} src={img_arr_green[wayarr.N.arrows.join('')]}/> */}
          <img className={`${wayarr_green.S.arrows.indexOf('I') > -1 ? 'arrows-s arrows-s-I' : 'arrows-s arrows-s-I  hide'}`}  src={img_arr_green.I}/>
          <img  className={`${wayarr_green.S.arrows.indexOf('L') > -1 ? 'arrows-s arrows-s-L' : 'arrows-s arrows-s-L  hide'}`} src={img_arr_green.L}/>
          <img  className={`${wayarr_green.S.arrows.indexOf('R') > -1 ? 'arrows-s arrows-s-R' : 'arrows-s arrows-s-R  hide'}`} src={img_arr_green.R}/>
          <img  className={`${wayarr_green.S.arrows.indexOf('T') > -1 ? 'arrows-s arrows-s-T' : 'arrows-s arrows-s-T  hide'}`} src={img_arr_green.T}/> 
            {/* <img  className={'arrows-s'} src={img_arr_green[wayarr.S.arrows.join('')]}/> */}
          <img className={`${wayarr_green.E.arrows.indexOf('I') > -1 ? 'arrows-e arrows-e-I' : 'arrows-e arrows-e-I  hide'}`}  src={img_arr_green.I}/>
          <img  className={`${wayarr_green.E.arrows.indexOf('L') > -1 ? 'arrows-e arrows-e-L' : 'arrows-e arrows-e-L  hide'}`} src={img_arr_green.L}/>
          <img  className={`${wayarr_green.E.arrows.indexOf('R') > -1 ? 'arrows-e arrows-e-R' : 'arrows-e arrows-e-R  hide'}`} src={img_arr_green.R}/>
          <img  className={`${wayarr_green.E.arrows.indexOf('T') > -1 ? 'arrows-e arrows-e-T' : 'arrows-e arrows-e-T  hide'}`} src={img_arr_green.T}/> 
            {/* <img  className={'arrows-e'} src={img_arr_green[wayarr.E.arrows.join('')]}/> */}
          <img className={`${wayarr_green.W.arrows.indexOf('I') > -1 ? 'arrows-w arrows-w-I' : 'arrows-w arrows-w-I  hide'}`}  src={img_arr_green.I}/>
          <img  className={`${wayarr_green.W.arrows.indexOf('L') > -1 ? 'arrows-w arrows-w-L' : 'arrows-w arrows-w-L  hide'}`} src={img_arr_green.L}/>
          <img  className={`${wayarr_green.W.arrows.indexOf('R') > -1 ? 'arrows-w arrows-w-R' : 'arrows-w arrows-w-R  hide'}`} src={img_arr_green.R}/>
          <img  className={`${wayarr_green.W.arrows.indexOf('T') > -1 ? 'arrows-w arrows-w-T' : 'arrows-w arrows-w-T  hide'}`} src={img_arr_green.T}/> 
            {/* <img  className={'arrows-w'} src={img_arr_green[wayarr.W.arrows.join('')]}/> */}
            <img  className={'people-n-p'} src={img_arr_green[wayarr_green.N.people.join('')]}/>
            <img  className={'people-s-p'} src={img_arr_green[wayarr_green.S.people.join('')]}/>
            <img  className={'people-w-p'} src={img_arr_green[wayarr_green.W.people.join('')]}/>
            <img  className={'people-e-p'} src={img_arr_green[wayarr_green.E.people.join('')]}/>

            <img className={`${wayarr_flashyellow.N.arrows.indexOf('I') > -1 ? 'arrows-n arrows-n-I' : 'arrows-n arrows-n-I  hide'}`}  src={img_arr_flashyellow.I}/>
          <img  className={`${wayarr_flashyellow.N.arrows.indexOf('L') > -1 ? 'arrows-n arrows-n-L' : 'arrows-n arrows-n-L  hide'}`} src={img_arr_flashyellow.L}/>
          <img  className={`${wayarr_flashyellow.N.arrows.indexOf('R') > -1 ? 'arrows-n arrows-n-R' : 'arrows-n arrows-n-R  hide'}`} src={img_arr_flashyellow.R}/>
          <img  className={`${wayarr_flashyellow.N.arrows.indexOf('T') > -1 ? 'arrows-n arrows-n-T' : 'arrows-n arrows-n-T  hide'}`} src={img_arr_flashyellow.T}/> 
           {/*  <img  className={'arrows-n'} src={img_arr_flashyellow[wayarr.N.arrows.join('')]}/> */}
          <img className={`${wayarr_flashyellow.S.arrows.indexOf('I') > -1 ? 'arrows-s arrows-s-I' : 'arrows-s arrows-s-I  hide'}`}  src={img_arr_flashyellow.I}/>
          <img  className={`${wayarr_flashyellow.S.arrows.indexOf('L') > -1 ? 'arrows-s arrows-s-L' : 'arrows-s arrows-s-L  hide'}`} src={img_arr_flashyellow.L}/>
          <img  className={`${wayarr_flashyellow.S.arrows.indexOf('R') > -1 ? 'arrows-s arrows-s-R' : 'arrows-s arrows-s-R  hide'}`} src={img_arr_flashyellow.R}/>
          <img  className={`${wayarr_flashyellow.S.arrows.indexOf('T') > -1 ? 'arrows-s arrows-s-T' : 'arrows-s arrows-s-T  hide'}`} src={img_arr_flashyellow.T}/> 
            {/* <img  className={'arrows-s'} src={img_arr_flashyellow[wayarr.S.arrows.join('')]}/> */}
          <img className={`${wayarr_flashyellow.E.arrows.indexOf('I') > -1 ? 'arrows-e arrows-e-I' : 'arrows-e arrows-e-I  hide'}`}  src={img_arr_flashyellow.I}/>
          <img  className={`${wayarr_flashyellow.E.arrows.indexOf('L') > -1 ? 'arrows-e arrows-e-L' : 'arrows-e arrows-e-L  hide'}`} src={img_arr_flashyellow.L}/>
          <img  className={`${wayarr_flashyellow.E.arrows.indexOf('R') > -1 ? 'arrows-e arrows-e-R' : 'arrows-e arrows-e-R  hide'}`} src={img_arr_flashyellow.R}/>
          <img  className={`${wayarr_flashyellow.E.arrows.indexOf('T') > -1 ? 'arrows-e arrows-e-T' : 'arrows-e arrows-e-T  hide'}`} src={img_arr_flashyellow.T}/> 
            {/* <img  className={'arrows-e'} src={img_arr_flashyellow[wayarr.E.arrows.join('')]}/> */}
          <img className={`${wayarr_flashyellow.W.arrows.indexOf('I') > -1 ? 'arrows-w arrows-w-I' : 'arrows-w arrows-w-I  hide'}`}  src={img_arr_flashyellow.I}/>
          <img  className={`${wayarr_flashyellow.W.arrows.indexOf('L') > -1 ? 'arrows-w arrows-w-L' : 'arrows-w arrows-w-L  hide'}`} src={img_arr_flashyellow.L}/>
          <img  className={`${wayarr_flashyellow.W.arrows.indexOf('R') > -1 ? 'arrows-w arrows-w-R' : 'arrows-w arrows-w-R  hide'}`} src={img_arr_flashyellow.R}/>
          <img  className={`${wayarr_flashyellow.W.arrows.indexOf('T') > -1 ? 'arrows-w arrows-w-T' : 'arrows-w arrows-w-T  hide'}`} src={img_arr_flashyellow.T}/> 
            {/* <img  className={'arrows-w'} src={img_arr_flashyellow[wayarr.W.arrows.join('')]}/> */}
            <img  className={'people-n-p'} src={img_arr_flashyellow[wayarr_flashyellow.N.people.join('')]}/>
            <img  className={'people-s-p'} src={img_arr_flashyellow[wayarr_flashyellow.S.people.join('')]}/>
            <img  className={'people-w-p'} src={img_arr_flashyellow[wayarr_flashyellow.W.people.join('')]}/>
            <img  className={'people-e-p'} src={img_arr_flashyellow[wayarr_flashyellow.E.people.join('')]}/>
           
          </div>
          
        </div>
      )
    }
    
  }
  setArrows = (arrows) =>{
    //console.log('arrows',arrows)
    switch (arrows){
      case '左转':return 'L';break;
      case '直行':return 'I';break;
      case '右转':return 'R';break;
      case '掉头':return 'T';break;
      default:return '';break;
   
    }
  }
  setPeople = (people) =>{
    //console.log('people',people)
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
    //console.log('derection',derection)
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
    let wayarr = {
      N: {arrows:[],people:[]},
      S: {arrows:[],people:[]},
      W: {arrows:[],people:[]},
      E: {arrows:[],people:[]},
     }
     this.setState({
      wayarr_yellow:{
        N: {arrows:[],people:[]},
        S: {arrows:[],people:[]},
        W: {arrows:[],people:[]},
        E: {arrows:[],people:[]},
       },
      wayarr_green:{
        N: {arrows:[],people:[]},
        S: {arrows:[],people:[]},
        W: {arrows:[],people:[]},
        E: {arrows:[],people:[]},
       },
      wayarr_red:{
        N: {arrows:[],people:[]},
        S: {arrows:[],people:[]},
        W: {arrows:[],people:[]},
        E: {arrows:[],people:[]},
       },
      wayarr_flashyellow:{
        N: {arrows:[],people:[]},
        S: {arrows:[],people:[]},
        W: {arrows:[],people:[]},
        E: {arrows:[],people:[]},
       }
    })
    let setArrows = this.setArrows
    let setDerection = this.setDerection
    let setPeople = this.setPeople
    let regexArrows= RegExp(/直.+|左.+|右.+|掉.+|调.+/);
    let regexPeople = RegExp(/行.+|非.+/);
    let regexDerection = RegExp(/[东南西北][东南西北].+[东南西北][东南西北]|[东南西北].+[东南西北]|[东南西北][东南西北]|[东南西北]/);
    Object.keys(colorstation).forEach(key =>{
        //console.log('key----',key)
        let newarr = [];
        colorstation[key].forEach((stationItem, index) => {
        
        //console.log('key',stationItem)
        newarr[index]= {}
        
        if(regexArrows.exec(stationItem)){ newarr[index].arrows = setArrows(regexArrows.exec(stationItem)[0]); }
        if(regexPeople.exec(stationItem)){newarr[index].people = setPeople(regexPeople.exec(stationItem)[0]);}
        if(regexDerection.exec(stationItem)){newarr[index].derection = setDerection(regexDerection.exec(stationItem)[0]);}      
        //console.log('newarr',newarr)
        
        wayarr = this.editWayarr(newarr)
        if(key=='red'){
          this.setState({
            wayarr_red:wayarr
          })
        }else if(key=='yellow'){
          this.setState({
            wayarr_yellow:wayarr
          })
        }else if(key=='green'){
          this.setState({
            wayarr_green:wayarr
          })
            
        }
        else if(key=='flashyellow'){
          this.setState({
            wayarr_flashyellow:wayarr
          })
            
        }
        
      })
    })

   
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
     
      
    })
    Object.keys(wayarr).forEach(x => {
      wayarr[x].arrows.sort()
      wayarr[x].people.sort()
    })
    return wayarr
    
  }
  
  
}

export default Trafficflash;
