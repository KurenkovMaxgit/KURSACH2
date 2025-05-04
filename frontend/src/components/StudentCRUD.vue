<template>
    <h1 class="mb-2">STUDENT</h1>
    <form @submit.prevent="createStudent">
        <h1>Create student</h1>
        <v-text-field v-model="createName.value.value" :error-messages="createName.errorMessage.value"
            label="Name"></v-text-field>

        <v-text-field v-model="createSurname.value.value" :error-messages="createSurname.errorMessage.value"
            label="Surname"></v-text-field>

        <v-text-field v-model="createFaculty.value.value" :error-messages="createFaculty.errorMessage.value"
            label="Faculty"></v-text-field>

        <v-text-field v-model="createPhone.value.value" :error-messages="createPhone.errorMessage.value"
            label="Phone"></v-text-field>

        <v-btn class="me-4" type="submit">
            submit
        </v-btn>
    </form>
    <div v-if="createResponse" style="margin-top: 1em;">
        <h4>Server Response:</h4>
        <pre>{{ createResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>

    <h1>Get all students</h1>
    <v-btn @click="handleGetAllStudents">
        Get all
    </v-btn>
    <div v-if="getAllResponse" style="margin-top: 1em; max-height: 300px" class="overflow-y-auto">
        <h4>Server Response:</h4>
        <pre>{{ getAllResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>
    <h1>Get student by id</h1>
    <v-text-field v-model="studentId.value.value" :error-messages="studentId.errorMessage.value"
        label="Id"></v-text-field>
    <v-btn @click="handleGetStudentById" class="me-4" type="submit">
        submit
    </v-btn>
    <div v-if="getByIdResponse" style="margin-top: 1em; ">
        <h4>Server Response:</h4>
        <pre>{{ getByIdResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>

    <form @submit.prevent="updateStudent">
        <h1>Update student</h1>
        <v-text-field v-model="updateId.value.value" :error-messages="updateId.errorMessage.value"
            label="id"></v-text-field>

        <v-text-field v-model="updateName.value.value" :error-messages="updateName.errorMessage.value"
            label="Name"></v-text-field>

        <v-text-field v-model="updateSurname.value.value" :error-messages="updateSurname.errorMessage.value"
            label="Surname"></v-text-field>

        <v-text-field v-model="updateFaculty.value.value" :error-messages="updateFaculty.errorMessage.value"
            label="Faculty"></v-text-field>

        <v-text-field v-model="updatePhone.value.value" :error-messages="updatePhone.errorMessage.value"
            label="Phone"></v-text-field>

        <v-btn class="me-4" type="submit">
            submit
        </v-btn>
    </form>
    <div v-if="updateResponse" style="margin-top: 1em; ">
        <h4>Server Response:</h4>
        <pre>{{ updateResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>
    <h1>Delete student by id</h1>
    <v-text-field v-model="deleteId.value.value" :error-messages="deleteId.errorMessage.value"
        label="Id"></v-text-field>
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

const createName = useField('createName')
const createSurname = useField('createSurname')
const createFaculty = useField('createFaculty')
const createPhone = useField('createPhone')
const createResponse = ref(null)

async function createStudent() {
    const createData = {
        name: createName.value.value,
        surname: createSurname.value.value,
        faculty: createFaculty.value.value,
        phone: createPhone.value.value
    };
    createResponse.value = null
    try {
        const response = await axios.post('http://localhost:3000/api/student', createData);
        console.log('Success:', response.data);
        createResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const getAllResponse = ref(null)

async function handleGetAllStudents() {
    getAllResponse.value = null
    try {
        const response = await axios.get('http://localhost:3000/api/student');
        console.log('Success:', response.data);
        getAllResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const studentId = useField('Id')
const getByIdResponse = ref(null)

async function handleGetStudentById() {
    getByIdResponse.value = null
    try {
        const response = await axios.get(`http://localhost:3000/api/student/${studentId.value.value}`);
        console.log('Success:', response.data);
        getByIdResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const updateId = useField('updateId')
const updateName = useField('updateName')
const updateSurname = useField('updateSurname')
const updateFaculty = useField('updateFaculty')
const updatePhone = useField('updatePhone')

const updateData = ref({
    name: updateName.value,
    surname: updateSurname.value,
    faculty: updateFaculty.value.value,
    phone: updatePhone.value.value
});
const updateResponse = ref(null)

async function updateStudent() {
    updateResponse.value = null
    try {
        const response = await axios.put(`http://localhost:3000/api/student/${updateId.value.value}`, updateData.value);
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
        const response = await axios.delete(`http://localhost:3000/api/student/${deleteId.value.value}`);
        console.log('Success:', response.data);
        deleteResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}
</script>
