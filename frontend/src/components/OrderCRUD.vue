<template>
    <h1 class="mb-2">ORDER</h1>
    <form @submit.prevent="createOrder">
        <h1>Create order</h1>
        <v-select v-model="createStudentId" :items="students" item-title="fullName" item-value="id"
            label="Student"></v-select>

        <v-combobox v-model="createBookIds" chips multiple :items="books" item-title="title" item-value="id"
            label="Books"></v-combobox>

        <v-date-picker v-model="createReturnDate" show-adjacent-months style="width: auto;" :min="minDate"
            class="mb-4"></v-date-picker>

        <v-btn class="me-4" type="submit">
            submit
        </v-btn>
    </form>
    <div v-if="createResponse" style="margin-top: 1em;">
        <h4>Server Response:</h4>
        <pre>{{ createResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>
    <h1>Get all orders</h1>
    <v-btn @click="getAllBooks">
        Get all
    </v-btn>
    <div v-if="getAllResponse" style="margin-top: 1em; max-height: 300px" class="overflow-y-auto">
        <h4>Server Response:</h4>
        <pre>{{ getAllResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>
    <h1>Get order by id</h1>
    <v-text-field v-model="orderId" label="Id"></v-text-field>
    <v-btn @click="getOrderById" class="me-4">
        submit
    </v-btn>
    <div v-if="getByIdResponse" style="margin-top: 1em; ">
        <h4>Server Response:</h4>
        <pre>{{ getByIdResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>
    <h1>Get order by student id</h1>
    <v-text-field v-model="studentId" label="Id"></v-text-field>
    <v-btn @click="getAllOrdersByStudentId" class="me-4">
        submit
    </v-btn>
    <div v-if="getAllByStudentIdResponse" style="margin-top: 1em; max-height: 300px" class="overflow-y-auto">
        <h4>Server Response:</h4>
        <pre>{{ getAllByStudentIdResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>
    <form @submit.prevent="updateOrder">
        <h1>Update order by id</h1>
        <v-text-field v-model="updateOrderId" label="Id"></v-text-field>
        <v-select v-model="updateStudentId" :items="students" item-title="fullName" item-value="id"
            label="Student"></v-select>

        <v-combobox v-model="updateBookIds" chips multiple :items="books" item-title="title" item-value="id"
            label="Books"></v-combobox>

        <v-date-picker v-model="updateReturnDate" show-adjacent-months style="width: auto;" :min="minDate"
            class="mb-4"></v-date-picker>

        <v-btn class="me-4" type="submit">
            submit
        </v-btn>
    </form>
    <div v-if="updateResponse" style="margin-top: 1em;">
        <h4>Server Response:</h4>
        <pre>{{ updateResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>
    <h1>Delete order by id</h1>
    <v-text-field v-model="deleteId" label="Id"></v-text-field>
    <v-btn @click="deleteById" class="me-4">
        submit
    </v-btn>
    <div v-if="deleteResponse" style="margin-top: 1em; ">
        <h4>Server Response:</h4>
        <pre>{{ deleteResponse }}</pre>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios'

const students = ref<{ id: number, name: string, surname: string, faculty: string, phone: string, fullName: string }[]>([])
const books = ref<{ id: number, title: string, year: string, availability: boolean }[]>([])

onActivated((async () => {
    const studentsResponse = await axios.get('http://localhost:3000/api/student')
    students.value = studentsResponse.data.map((
        x: { id: number, name: string, surname: string, faculty: string, phone: string, fullName: string }) => {
        return { ...x, fullName: x.name + " " + x.surname }
    })
    const booksResponse = await axios.get('http://localhost:3000/api/book')
    books.value = booksResponse.data.map((
        x: { id: number, title: string, year: string, availability: boolean }) => {
        if (x.availability === true)
            return x
    })
}))

const createStudentId = ref<number>()
const createBookIds = ref<{ id: number, title: string, year: string, availability: boolean }[]>([])
const createReturnDate = ref<string>()
const dateNow = new Date
const minDate = dateNow.toISOString().split('T')[0]
const createResponse = ref(null)

async function createOrder() {
    createResponse.value = null
    const createData = {
        studentId: createStudentId.value,
        bookIds: createBookIds.value,
        returnDate: createReturnDate.value
    }
    try {
        const response = await axios.post('http://localhost:3000/api/order', createData)
        console.log('Success:', response.data)
        createResponse.value = response.data
    } catch (error) {
        console.log('Request failed:', error)
    }
}

const getAllResponse = ref(null)

async function getAllBooks() {
    getAllResponse.value = null
    try {
        const response = await axios.get('http://localhost:3000/api/order');
        console.log('Success:', response.data);
        getAllResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const orderId = ref()
const getByIdResponse = ref(null)

async function getOrderById() {
    getByIdResponse.value = null
    try {
        const response = await axios.get(`http://localhost:3000/api/order/${orderId.value}`);
        console.log('Success:', response.data);
        getByIdResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const studentId = ref()
const getAllByStudentIdResponse = ref(null)

async function getAllOrdersByStudentId() {
    getAllByStudentIdResponse.value = null
    try {
        const response = await axios.get(`http://localhost:3000/api/order/student/${studentId.value}`);
        console.log('Success:', response.data);
        getAllByStudentIdResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const updateOrderId = ref()
const updateStudentId = ref<number>()
const updateBookIds = ref<{ id: number, title: string, year: string, availability: boolean }[]>([])
const updateReturnDate = ref<string>()
const updateResponse = ref(null)

async function updateOrder() {
    updateResponse.value = null
    const updateData = {
        studentId: updateStudentId.value,
        bookIds: updateBookIds.value,
        returnDate: updateReturnDate.value
    }
    try {
        const response = await axios.put(`http://localhost:3000/api/order/${updateOrderId.value}`, updateData)
        console.log('Success:', response.data)
        updateResponse.value = response.data
    } catch (error) {
        console.log('Request failed:', error)
    }
}

const deleteId = ref()
const deleteResponse = ref(null)

async function deleteById() {
    deleteResponse.value = null
    try {
        const response = await axios.delete(`http://localhost:3000/api/order/${deleteId.value}`);
        console.log('Success:', response.data);
        deleteResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}
</script>