<template>
    <form @submit="onSubmit" class="add-form">
        
      <div class="form-control">
        <label>Name</label>
        <input type="text" v-model="name" name="name" placeholder=" User's Name" />
      </div>
      <div class="form-control">
        <label>E-mail</label>
        <input type="text" v-model="email" name="email" placeholder="User's E-mail"/>
      </div>
  
      <div class="form-control">
        <label>Mobile Number</label>
        <input type="text" v-model="number" name="number" placeholder="User's Number"/>
      </div>
      
  
      <input type="submit" value="Save User's info" class="btn btn-block" />
    </form>
  </template>
  
  <script>
  export default {
    name: 'AddUser',
    data() {
      return {
        name: '',
        email:'',
        number:'',
       
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault()
  
        if (!this.name) {
          alert('Please add a user first')
          return
        }
  
        const newUser = {
          name: this.name,
          email:this.email,
          number:this.number,
          
        }
  
        this.$emit('add-user', newUser)
        this.name = ''
        this.email=''
        this.number=''
      },
    },
  }
  </script>
  
  <style scoped>
  .add-form {
    margin-bottom: 40px;
  }
  
  .form-control {
    margin: 20px 0;
  }
  
  .form-control label {
    display: block;
  }
  
  .form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
  
  .form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .form-control-check label {
    flex: 1;
  }
  
  .form-control-check input {
    flex: 2;
    height: 20px;
  }
  </style>