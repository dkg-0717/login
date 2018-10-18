<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your username is: {{ user }}</p>

    <h1>Lista de Usuarios</h1>
    <div v-for="user in users">
      <p>{{user.id}} - {{ user.first_name}} - {{user.last_name}}</p>
    </div>
    
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import axios from '../../axios-auth';

  export default {
    data(){
      return {
        users: []
      }
    },
    computed: mapState(['user']),
    mounted(){
      axios.get('https://reqres.in/api/users?page=2').then((res) =>{
        this.users = res.data.data;
        console.log(this.users);
      }).catch(err => {
        console.log(err);
      });
    }

   
  }
</script>

<style scoped>
  h1, p, #users{
    text-align: center;
  }

  p {
    color: red;
  }
</style>