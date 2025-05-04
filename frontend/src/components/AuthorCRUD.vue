<template>
    <h1 class="mb-2">AUTHOR</h1>
    <CreateForm @submit="createCallback"></CreateForm>
    <div v-if="createResponse" style="margin-top: 1em;">
        <h4>Server Response:</h4>
        <pre>{{ createResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>

    <h1>Get all authors</h1>
    <v-btn @click="handleGetAllAuthors">
        Get all
    </v-btn>
    <div v-if="getAllResponse" style="margin-top: 1em; max-height: 300px" class="overflow-y-auto">
        <h4>Server Response:</h4>
        <pre>{{ getAllResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>
    <h1>Get author by id</h1>
    <v-text-field v-model="authorId.value.value" :error-messages="authorId.errorMessage.value" label="Id"></v-text-field>
    <v-btn @click="handleGetAuthorById" class="me-4" type="submit">
        submit
    </v-btn>
    <div v-if="getByIdResponse" style="margin-top: 1em; ">
        <h4>Server Response:</h4>
        <pre>{{ getByIdResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>

    <form @submit.prevent="updateAuthor">
        <h1>Update author</h1>
        <v-text-field v-model="updateId.value.value" :error-messages="updateId.errorMessage.value" label="id"></v-text-field>

        <v-text-field v-model="updateName.value.value" :error-messages="updateName.errorMessage.value" label="Name"></v-text-field>

        <v-text-field v-model="updateSurname.value.value" :error-messages="updateSurname.errorMessage.value"
            label="Surname"></v-text-field>

        <v-btn class="me-4" type="submit">
            submit
        </v-btn>
    </form>
    <div v-if="updateResponse" style="margin-top: 1em; ">
        <h4>Server Response:</h4>
        <pre>{{ updateResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>
    <h1>Delete author by id</h1>
    <v-text-field v-model="deleteId.value.value" :error-messages="deleteId.errorMessage.value" label="Id"></v-text-field>
    <v-btn @click="deleteById" class="me-4" type="submit">
        submit
    </v-btn>
    <div v-if="deleteResponse" style="margin-top: 1em; ">
        <h4>Server Response:</h4>
        <pre>{{ deleteResponse }}</pre>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate'
import axios from 'axios'

function createCallback(data: any) {
    createResponse.value = data
}

const handleCreateReset = useForm({
    validationSchema: {
        createName(value: string) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
        },
        createSurname(value: string) {
            if (value?.length >= 2) return true

            return 'Surname to be at least 2 characters.'
        }
    },
})
const createName = useField('createName')
const createSurname = useField('createSurname')

const createData = ref({
    name: createName.value,
    surname: createSurname.value
});
const createResponse = ref(null)

async function createAuthor() {
    createResponse.value = null
    try {
        const response = await axios.post('http://localhost:3000/api/author', createData.value);
        console.log('Success:', response.data);
        createResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const getAllResponse = ref(null)

async function handleGetAllAuthors() {
    getAllResponse.value = null
    try {
        const response = await axios.get('http://localhost:3000/api/author');
        console.log('Success:', response.data);
        getAllResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const authorId = useField('Id')
const getByIdResponse = ref(null)

async function handleGetAuthorById() {
    getByIdResponse.value = null
    try {
        const response = await axios.get(`http://localhost:3000/api/author/${authorId.value.value}`);
        console.log('Success:', response.data);
        getByIdResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const updateId = useField('updateId')
const updateName = useField('updateName')
const updateSurname = useField('updateSurname')

const updateData = ref({
    name: updateName.value,
    surname: updateSurname.value
});
const updateResponse = ref(null)

async function updateAuthor() {
    updateResponse.value = null
    try {
        const response = await axios.put(`http://localhost:3000/api/author/${updateId.value.value}`, updateData.value);
        console.log('Success:', response.data);
        updateResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const deleteId = useField("deleteId")
const deleteResponse = ref(null)

async function deleteById() {
    deleteResponse.value = null
    try {
        const response = await axios.delete(`http://localhost:3000/api/author/${deleteId.value.value}`);
        console.log('Success:', response.data);
        deleteResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}
</script>
