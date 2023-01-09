<script setup lang="ts">
const test = ref();
const profile = async () =>{
    console.log(test)

}

</script>
<template>
    <div class=" flex justify-start text-xl">
        Profile
    </div>
    <br>
    <div class=" container bg-teal-600 flex justify-center">
        <h1 class=" text-xl flex  justify-center">Profile</h1>
    </div>
</template>