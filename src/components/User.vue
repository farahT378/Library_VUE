<template>
    <div @dblclick="$emit('toggle-reminder',user.id)" :class="[user.reminder?'reminder':'' ,'user']">
         <h3>
            {{user.name}}
         <i @click="$emit('delete-user',user.id)" class="fa-solid fa-circle-xmark"></i> 
          </h3>
         <p>{{user.email}}</p>
    </div>
       
    </template>
    
    <script>
    export default{
        name:'User',
        props:{
            user:Object, 
        },
        
    
    }
    </script>
    <style scope>
    .fa-solid {
      color: red;
    }
    
    .user {
      background: #f4f4f4;
      margin: 5px;
      padding: 10px 20px;
      cursor: pointer;
    
    }
    
    .user.reminder {
      border-left: 5px solid cornflowerblue;
    }
    
    .user h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    </style>