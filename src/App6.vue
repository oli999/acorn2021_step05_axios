<template>
  <div id="app">
    <h1>axios 테스트6</h1>
    <form @submit.prevent="send" action="/api/member/insert.do" method="post">
        <input type="text" name="name">
        <input type="text" name="addr">
        <button type="submit">전송</button>
    </form>
  </div>
</template>

<script>
//axios import
import axios from 'axios'
//query string import
//import qs from 'qs'

//요청 base url 설정
axios.defaults.baseURL="http://localhost:8888/spring03"

export default {
  name: 'App6',
  data(){
      return {
        
      };
  },
  methods:{
    send(e){
        //event 객체를 콘솔에 출력해서 모양 확인 
        console.log(e);
        //submit 이벤트가 일어난 폼의 참조값 
        console.log(e.target);
        //폼의 action 속성의 value 값 읽어오기
        const action = e.target.getAttribute("action");

        // new FormData( 전송할 폼의 참조값 ) 하면 전송할 데이터가 구성이 된다.
        const data = new FormData(e.target);

        axios({
            url:action,
            method:"POST",
            headers:{
                "Content-Type":'application/x-www-form-urlencoded'
            },
            data:data
        })
        .then(res=>{
            console.log(res.data);
        });
    }
  }
}
</script>

<style>

</style>
