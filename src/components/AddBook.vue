<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Book</label>
      <input type="text" v-model="text" name="text" placeholder="Add Book Name" />
    </div>
    <div class="form-control">
      <label>Book type</label>
      <input type="text" v-model="type" name="type" placeholder="Book type"/>
    </div>

    <div class="form-control">
      <label>Author</label>
      <input type="text" v-model="author" name="author" placeholder="Author's name"/>
    </div>
    <div class="form-control">
      <label>Description</label>
      <input type="text" v-model="des" name="des" placeholder="Book Description"/>
    </div>
    <div class="form-control">
      <label>Publish date</label>
      <input type="text" v-model="publishDate" name="publishDate" placeholder="Publish date"/>
    </div>
    
    <div class="form-control form-control-check">
      <label>mark as highly recomended</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Book" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: 'AddBook',
  data() {
    return {
      text: '',
      type: '',
      author:'',
      des:'',
      publishDate:'',
      reminder: false,
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.text) {
        alert('Please add a Book first')
        return
      }

      const newBook = {
        text: this.text,
        type: this.type,
        author:this.author,
        des:this.des,
        publishDate:this.publishDate,
        reminder: this.reminder,
      }

      this.$emit('add-book', newBook)

      this.text = ''
      this.type = ''
      this.author=''
      this.des=''
      this.publishDate=''
      this.reminder = false
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