<template>
  <div id="app">
    <h1>axios 테스트3</h1>
    <input type="text" placeholder="이름 입력..." v-model="member.name">
    <input type="text" placeholder="주소 입력..." v-model="member.addr">
    <button @click="send">전송</button>
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
  name: 'App3',
  data(){
      return {
        member:{}
      };
  },
  methods:{
    send(){
        axios({
            url:"/api/member/insert.do",
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
