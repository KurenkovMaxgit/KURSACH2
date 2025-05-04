<template>
  <v-container class="mx-auto" max-width="800">
    <v-card>
      <v-tabs v-model="tab">
        <v-tab value="author">AUTHOR</v-tab>
        <v-tab value="book">BOOK</v-tab>
        <v-tab value="student">STUDENT</v-tab>
        <v-tab value="order">ORDER</v-tab>
        <v-tab value="about">ABOUT</v-tab>
      </v-tabs>

      <v-card-text>
        <KeepAlive>
          <component :is="tabs[tab]" />
        </KeepAlive>
      </v-card-text>

    </v-card>
  </v-container>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Author from '../components/AuthorCRUD.vue'
import Book from '../components/BookCRUD.vue'
import Student from '../components/StudentCRUD.vue'
import Order from '../components/OrderCRUD.vue'
import About from '../components/About.vue'
type TabKey = 'author' | 'book' | 'student' | 'order' | 'about';

const tab = ref<TabKey>('author');


const tabs = {
  author: Author,
  book: Book,
  student: Student,
  order: Order,
  about: About,
}
</script>
