<template>
  <div id="app">
    <h1>axios 테스트8</h1>
    <form @submit.prevent="send" action="/users/ajax_profile_upload.do" method="post">
        <input type="file" name="image" accept=".jpg, .jpeg, .png, .JPG, .JPEG">
        <button type="submit">전송</button>
    </form>
    <br>
    <img v-bind:src="imagePath">
  </div>
</template>

<script>

export default {
  name: 'App8',
  data(){
      return {
          imagePath:""
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

        this.$axios({
            url:action,
            method:"POST",
            headers:{
                "Content-Type":'multipart/form-data'
            },
            data:data
        })
        .then(res=>{
            console.log(res.data);
            //테스트할 이미지 경로를 구성해서 imagePath 모델에 넣어준다.
            this.imagePath = "http://localhost:8888/spring05"+res.data.imagePath;
        });
    }
  }
}
</script>

<style>

</style>
