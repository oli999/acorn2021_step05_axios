<template>
  <div id="app">
    <h1>axios 테스트5</h1>
    <form @submit.prevent="send" action="/api/member/insert.do" method="post">
        <input type="text" v-model="member.name">
        <input type="text" v-model="member.addr">
        <button type="submit">전송</button>
    </form>
    <p>{{member}}</p>
  </div>
</template>

<script>
//axios import
import axios from 'axios'
//query string import
import qs from 'qs'

//요청 base url 설정
axios.defaults.baseURL="http://localhost:8888/spring03"

export default {
  name: 'App5',
  data(){
      return {
        member:{}
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

        axios({
            url:action,
            method:"POST",
            headers:{
                "Content-Type":'application/x-www-form-urlencoded'
            },
            data:qs.stringify(this.member)
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
