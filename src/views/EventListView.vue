<script setup>
import EventCard from "@/components/EventCard.vue";
import {ref, onMounted} from "vue"
import EventService from "@/services/EventService";

const events = ref(null)

onMounted(() => {
  console.log("onMounted")
  EventService.getEvents()
  .then((res) => {
    events.value = res.data
  })
  .catch((error) => {
    console.log(error)
  })
});

</script>

<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>


<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>