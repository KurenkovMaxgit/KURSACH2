<template>
    <h1 class="mb-2">Курсова робота з баз даних</h1>
    <h1 class="mb-2">Група: ІС-33</h1>
    <h1 class="mb-2">Виконавець: Куренков Максим Володимирович</h1>
    <div v-if="rageMode">
        <img src="/TF_is_a_kilometer_RAGE.jpg" alt="rage" style="width: 100%; height: 100%;">
    </div>
    <div v-else>
        <img src="/TF_is_a_kilometer.jpg" alt="normal" style="width: 100%; height: 100%;">
    </div>
    <v-switch label="RAGE MODE" v-model="rageMode" inset></v-switch>
</template>

<script lang="ts" setup>
const rageMode = ref()
</script>
