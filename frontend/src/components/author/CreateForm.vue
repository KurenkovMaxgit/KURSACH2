<template>
    <v-card class="bg-transparent" style="box-shadow: none; border: none;">
        <form @submit.prevent="createAuthor">
            <h1>Create author</h1>
            <v-text-field v-model="createName"
                label="Name"></v-text-field>

            <v-text-field v-model="createSurname"
                label="Surname"></v-text-field>

            <v-btn type="submit">
                submit
            </v-btn>

        </form>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios'

const emit = defineEmits<{
    submit: [response: { id: number, name: string, surname: string }]
}>()

const createName = ref()
const createSurname = ref()


async function createAuthor() {
    const createData = {
        name: createName.value,
        surname: createSurname.value
    };
    try {
        const response = await axios.post('http://localhost:3000/api/author', createData);
        console.log('Success:', response.data);
        emit('submit', response.data);
    } catch (error) {
        console.error('Request failed:', error);
    }
}
</script>