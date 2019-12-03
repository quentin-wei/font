<template>
  <div class="home">
          <p>左边跟我一起画个龙 右边画一道彩虹</p>
          <ul>
            <li v-for="(item,index) in users" :key="index">
              {{item.id}} --:---{{item.name}}
            </li>
          </ul>
          阿斯达四大所
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
 data(){
   return{
     users:[]
   }
 },
 methods:{

 },
 mounted(){
   axios.get('/api/users')
   .then(res=>{
     this.users = res.data
   })
 }
}
</script>
