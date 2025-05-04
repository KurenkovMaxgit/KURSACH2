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
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="author">
            <AuthorCRUD></AuthorCRUD>
          </v-tabs-window-item>

          <v-tabs-window-item value="book">
            <BookCRUD></BookCRUD>
          </v-tabs-window-item>

          <v-tabs-window-item value="student">
            <StudentCRUD></StudentCRUD>
          </v-tabs-window-item>

          <v-tabs-window-item value="order">
            <OrderCRUD></OrderCRUD>
          </v-tabs-window-item>

          <v-tabs-window-item value="about">
            <h1 class="mb-2">Курсова робота з баз даних</h1>
            <h1 class="mb-2">Група: ІС-33</h1>
            <h1 class="mb-2">Виконавець: Куренков Максим Володимирович</h1>
            <div v-if="rageMode">
              <img src="/TF_is_a_kilometer_RAGE.jpg" alt="rage" width="800" height="900">
            </div>
            <div v-else>
              <img src="/TF_is_a_kilometer.jpg" alt="normal" width="800" height="900">
            </div>
            <v-switch label="RAGE MODE" v-model="rageMode" inset></v-switch>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<script lang="ts" setup>
const tab = ref()
const rageMode = ref()
</script>
