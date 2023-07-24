<script setup>

import { ref } from "vue";

const total = ref(0)


function updateTotal() {
  console.log(total.value)
  total.value += 1
}

</script>


<template>
  <div class="about">
    <h1>This is an about page</h1>
    
    <br/>
    <div>
    <button @click="updateTotal">
      Plus
    </button>
  </div>
    <div>
      {{ total }}
    </div>

  </div>
</template>


<style>

</style>
