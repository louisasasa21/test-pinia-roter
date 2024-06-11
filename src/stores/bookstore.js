import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', {
  state: () => ({
    books: [{
      name: 'book name',
      author: 'Louis'
    }]
  }),
  actions: {
    addBook(book) {
      this.books.push(book)
    },
    updateBook(book, index) {
      this.books.splice(index, 1, book)
    },
    removeBook(index) {
      this.books.splice(index, 1)
    }
  }
})