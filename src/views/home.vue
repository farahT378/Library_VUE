<template>
  <AddBook v-show="showAddBook" @add-book="addBook" />
  <Books
    @toggle-reminder="toggleReminder"
    @delete-book="deleteBook"
    :books="books"
  />
</template>

<script>
import Books from '../components/Books.vue'
import AddBook from '../components/AddBook.vue'
export default {
  name: 'Home',
  props: {
    showAddBook: Boolean,
  },
  components: {
    Books,
    AddBook,
  },
  data() {
    return {
      books: [],
    }
  },
  methods: {
    async addBook(book) {
      const res = await fetch('http://localhost:5000/books', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(book),
      })

      const data = await res.json()

      this.books = [...this.books, data]
    },
    async deleteBook(id) {
        console.log('ok')
        if (confirm('Are you sure you want to delete this book?')) {
            const res = await fetch(`http://localhost:5000/books/${id}`, {
            method: 'DELETE',
            })

            res.status === 200
            ? (this.books = this.books.filter((book) => book.id !== id))
            : alert('Error deleting book')
        }
    },
    async toggleReminder(id) {
      const bookToToggle = await this.fetchBook(id)
      const updateBook = { ...bookToToggle, reminder: !bookToToggle.reminder }

      const res = await fetch(`http://localhost:5000/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updateBook),
      })

      const data = await res.json()

      this.books = this.books.map((book) =>
      book.id === id ? { ...book, reminder: data.reminder } : book
      )
    },
    async fetchBooks() {
      const res = await fetch('http://localhost:5000/books')
      console.log(res)

      const data = await res.json()

      return data
    },
    async fetchBook(id) {
      const res = await fetch(`http://localhost:5000/books/${id}`)

      const data = await res.json()

      return data
    },
  },
  async created() {
    console.log()
    this.books = await this.fetchBooks()
    console.log(this.books)
  },
}
</script>