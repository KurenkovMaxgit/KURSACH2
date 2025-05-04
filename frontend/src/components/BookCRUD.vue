<template>
    <h1 class="mb-2">BOOK</h1>
    <form @submit.prevent="createBook">
        <h1>Create book</h1>
        <v-text-field v-model="createTitle.value.value" label="Title"></v-text-field>

        <v-text-field v-model="createYear.value.value" label="Year"></v-text-field>

        <v-checkbox v-model="createAvailability" label="Available?"></v-checkbox>

        <v-combobox v-model="createAuthors.value.value" chips multiple label="Authors" :items="authors"
            item-title="fullName" item-value="id">
            <template v-slot:append-item>
                <v-divider class="mb-2"></v-divider>
                <v-list-item>
                    <template v-slot:prepend>
                        <v-btn class="me-2" prepend-icon="mdi-plus" rounded="lg" text="Add author" border
                            @click="add"></v-btn>
                    </template>
                </v-list-item>
            </template>
        </v-combobox>

        <v-btn class="me-4" type="submit">
            submit
        </v-btn>
        <v-dialog v-model="dialog" max-width="500">
            <v-card class="pa-4">
                <CreateForm @submit="addAuthor"></CreateForm>
            </v-card>
        </v-dialog>
    </form>
    <div v-if="createResponse" style="margin-top: 1em;">
        <h4>Server Response:</h4>
        <pre>{{ createResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>

    <h1>Get all books</h1>
    <v-btn @click="handleGetAllBooks">
        Get all
    </v-btn>
    <div v-if="getAllResponse" style="margin-top: 1em; max-height: 300px" class="overflow-y-auto">
        <h4>Server Response:</h4>
        <pre>{{ getAllResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>
    <h1>Get book by id</h1>
    <v-text-field v-model="bookId.value.value" :error-messages="bookId.errorMessage.value" label="Id"></v-text-field>
    <v-btn @click="getBookById" class="me-4" type="submit">
        submit
    </v-btn>
    <div v-if="getByIdResponse" style="margin-top: 1em; ">
        <h4>Server Response:</h4>
        <pre>{{ getByIdResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>

    <form @submit.prevent="updateBook">
        <h1>Update book</h1>
        <v-text-field v-model="updateId.value.value" :error-messages="updateId.errorMessage.value"
            label="id"></v-text-field>

        <v-text-field v-model="updateTitle.value.value" :error-messages="updateTitle.errorMessage.value"
            label="Title"></v-text-field>

        <v-text-field v-model="updateYear.value.value" :error-messages="updateYear.errorMessage.value"
            label="Year"></v-text-field>

        <v-checkbox v-model="updateAvailability" label="Available?"></v-checkbox>

        <v-combobox v-model="updateAuthors.value.value" chips multiple label="Authors" :items="authors"
            item-title="fullName" item-value="id">
            <template v-slot:append-item>
                <v-divider class="mb-2"></v-divider>
                <v-list-item>
                    <template v-slot:prepend>
                        <v-btn class="me-2" prepend-icon="mdi-plus" rounded="lg" text="Add author" border
                            @click="add"></v-btn>
                    </template>
                </v-list-item>
            </template>
        </v-combobox>
        <v-btn class="me-4" type="submit">
            submit
        </v-btn>
    </form>
    <div v-if="updateResponse" style="margin-top: 1em; ">
        <h4>Server Response:</h4>
        <pre>{{ updateResponse }}</pre>
    </div>
    <v-divider :thickness="3" class="my-4"></v-divider>
    <h1>Delete book by id</h1>
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
import { useField } from 'vee-validate'
import axios from 'axios'
const authors = ref<{ id: number, name: string, surname: string, fullName: string }[]>([])
onActivated(async () => {
    const response = await axios.get('http://localhost:3000/api/author')
    authors.value = response.data.map((
        x: { id: string, name: string, surname: string }) => {
        return { ...x, fullName: x.name + " " + x.surname }
    })
})

const createTitle = useField('createTitle')
const createYear = useField('createYear')
const createAvailability = ref();
const createAuthors = useField<{ id: number, name: string, surname: string, fullName: string }[]>('createAuthors', {}, { initialValue: [] });

const createResponse = ref(null)

function addAuthor(data: { id: number, name: string, surname: string }) {
    authors.value.push({ ...data, fullName: data.name + " " + data.surname });
    const selectedAuthors = [
        ...createAuthors.value.value,
        { ...data, fullName: data.name + " " + data.surname },
    ]
    createAuthors.setValue(selectedAuthors);
    dialog.value = false
}

async function createBook() {
    const createData = {
        book:
        {
            title: createTitle.value.value,
            year: createYear.value.value,
            availability: createAvailability.value
        },
        authors: createAuthors.value.value
    }
    createResponse.value = null
    try {
        const response = await axios.post('http://localhost:3000/api/book', createData);
        console.log('Success:', response.data);
        createResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}
const record = ref()
const dialog = ref(false)
const isEditing = ref(false)
function add() {
    isEditing.value = false
    record.value = ""
    dialog.value = true
}

const getAllResponse = ref(null)

async function handleGetAllBooks() {
    getAllResponse.value = null
    try {
        const response = await axios.get('http://localhost:3000/api/book');
        console.log('Success:', response.data);
        getAllResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const bookId = useField('Id')
const getByIdResponse = ref(null)

async function getBookById() {
    getByIdResponse.value = null
    try {
        const response = await axios.get(`http://localhost:3000/api/book/${bookId.value.value}`);
        console.log('Success:', response.data);
        getByIdResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}

const updateId = useField('updateId')
const updateTitle = useField('updateTitle')
const updateYear = useField('updateYear')
const updateAvailability = ref()
const updateAuthors = useField<{ id: number, name: string, surname: string, fullName: string }[]>('updateAuthors', {}, { initialValue: [] });
const updateResponse = ref(null)

async function updateBook() {
    const updateData = {
        title: updateTitle.value.value,
        year: updateYear.value.value,
        availability: updateAvailability.value,
        authors: updateAuthors.value.value.map((author) => { return { id: author.id } })
    }
    updateResponse.value = null
    try {
        const response = await axios.put(`http://localhost:3000/api/book/${updateId.value.value}`, updateData);
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
        const response = await axios.delete(`http://localhost:3000/api/book/${deleteId.value.value}`);
        console.log('Success:', response.data);
        deleteResponse.value = response.data
    } catch (error) {
        console.error('Request failed:', error);
    }
}
</script>
