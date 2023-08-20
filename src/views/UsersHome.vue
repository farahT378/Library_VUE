<template>
<title>user</title>
<router-link to="/">Go Back</router-link>

  <AddUser v-show="showAddUser" @add-user="addUser" />
  <Users
    @toggle-reminder="toggleReminder"
    @delete-user="deleteUser"
    :users="users"
  />
</template>

<script>
import Users from '../components/Users.vue'
import AddUser from '../components/AddUser.vue'

export default {
  props: {
    showAddUser: Boolean,
  },
  components: {
    Users,
    AddUser,
  },
  data() {
    return {
      users: [],
    }
  },
  methods: {
    async addUser(user) {
      const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      const data = await res.json()

      this.users = [...this.users, data]
    },
    async deleteUser(id) {
        console.log('ok')
        if (confirm('Are you sure you want to delete this user?')) {
            const res = await fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            })

            res.status === 200
            ? (this.users = this.users.filter((user) => user.id !== id))
            : alert('Error deleting user')
        }
    },

    async fetchUser(id) {
      const res = await fetch(`http://localhost:5000/users/${id}`)

      const data = await res.json()

      return data
    },
  },
  async created() {
    console.log()
    this.users = await this.fetchUsers()
    console.log(this.books)
  },
};
</script>