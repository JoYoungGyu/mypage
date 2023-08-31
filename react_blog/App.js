import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  let [a,b] = useState(['남자코트 추천','강남 우동 맛집','파이썬 독학']);
  let [good_value, good_value_change] = useState(0);
  let [coat , change_coat] =useState('남자코트 추천');
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동 맛집','파이썬 독학']);
  let [modal, setmodal] = useState(0);
  let [good_value2 , set_good_value2] = useState( [0 ,0 ,0] );
  let [title_gubun, set_title_gubun] = useState(0);
  let [text, set_text] = useState('');
  let [title , set_title] = useState([]);

  function good_up(){
      {/*스테이스 변경하는 방법*/}
      good_value_change(good_value+1); 
  }
  function coat_change(){
    change_coat('여자코트 추천');
  }

  function any_good_change(i){
      // set_good_value2(good_value2 => {
      //   const updateGoodValues = [...good_value2];
      //   updateGoodValues[i] = updateGoodValues[i]+1;
      //   return updateGoodValues;
      // })
     set_good_value2(good_value2 => {
       const updateGoodvalues = [...good_value2];
       updateGoodvalues[i] += 1;
       return updateGoodvalues;
     })
  }
  function add_posting(){
    set_title(prevTitle => [...prevTitle, text]);
  }

  function del_post(idx){
    set_title(prevTitle => prevTitle.filter((_, index) => index !== idx));
  }

  function button_Change(){
    let copy = [...a];
    copy[1] = '여자코트 추천';
    b(copy);  
  }

  return (
    <div className="App">
        <div className='black-nav'>
          <div>React Blog</div>
        </div>

        <button onClick={()=> {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
           글제목변경(copy);
        }}>글수정</button>

        <button onClick = { () => {
          let arr = [...a];
          arr.sort();
          b(arr);
        } }>가나다순정렬</button>

        <div className="list">
          <h4>{ 글제목[0] }<span onClick={ good_up }> 👍 </span> {good_value} </h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4 onClick = { ()=> {setmodal(modal+1); set_title_gubun(0);} }>{a[0]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4 onClick = { ()=> {setmodal(modal+1); set_title_gubun(1);}}>{a[1]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4 onClick = { ()=> {setmodal(modal+1); set_title_gubun(2);}}>{a[2]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{coat} <span onClick={ coat_change }>😒</span></h4>
          <p>2월 17일 발행</p>
        </div>

        <input onChange = { (e) => {
          set_text(e.target.value);
        }}></input>
        <button onClick = { add_posting }>글 추가하기</button>
        {/* onClick = {()=> {
          let copy = [...글제목];
          copy.unshif(text);
          글제목변경(copy)
        }} */} 
      {
        title.map(function(title,i){
          return(
            <div className="list" key = {i}>
               <h4>{ title }<span onClick={ ()=> { any_good_change(i) } }> 👍 </span> { good_value2[i] } </h4>
               <p>{i}번째 글입니다.</p>
               <button className="del_btn" onClick = { ()=> { del_post(i)} }>삭제버튼</button>
               {/*삭제 누르면 글삭제
                let copy = [...글제목];
                copy 여기서 원하는 자료 삭제
                copy.splice(i,1)
                글제목변경(copy)
               */}
            </div>
          )
        })
      }

       {/* {   //map을 이용한 html 반복작업
          a.map(function(a , i){
            return(
            <div className="list" key = {i}>
               <h4>{ a }<span onClick={ ()=> { any_good_change(i) } }> 👍 </span> { good_value2[i] } </h4>
            </div>
            )
          })
        }  */}

        {/* 강의 선생님 코드 
          <span onClike = { ()=>
            let copy = [...good_value2];
            copy[i] = copy[i]+1;
            set_good_value2(copy);
          }></span>
        */}
        {
          modal%2 == 0 ? <Modal title_gubun = { title_gubun } func = { button_Change } 
          color = {"skyblue"} a = {a}></Modal> : null
        }
        
        <Detail_user></Detail_user>
    </div>
  );
}
// 컴포넌트
function Modal(props){
  return(
    <div className="modal" style = {{ background: props.color }}>
      <h4>{props.a[props.title_gubun]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ props.func }>글수정</button>
    </div>
  )
} 
// 컴포넌트2번
function Detail_user(){
  return(
    <div className="detail_user">
      <h5>만들이 : 조영규</h5>
      <p>만든 날짜 : 2023-08-28</p>
      <p>만든 이유 : 그냥 REACT 연습할려고</p>
    </div>
  )
}

export default App;
{/*
input1기능
숙제1.
유저가 입력한 내용을 map을 이용하는 state를 하나 추가해줌
*/}

