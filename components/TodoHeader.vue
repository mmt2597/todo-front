<template>
  <v-card-item class="header bg-grey-lighten-3 px-0 py-0">
    <div class="mb-1">
      <v-chip-group class="justify-end">
        <v-chip class="ma-2 text-white bg-light-blue-darken-4 ps-3 pe-0 px-1 py-0 font-weight-bold">
          Tasks
          <v-badge color="white" text-color="text-light-blue-darken-4" :content="totalTasks" inline></v-badge
        ></v-chip>

        <v-chip  class="ma-2 text-white bg-light-blue-darken-4 ps-3 pe-0 px-1 py-0 font-weight-bold">
          Tasks Done
          <v-badge color="white" text-color="text-light-blue-darken-4" :content="selectedTasks.length" inline></v-badge
        ></v-chip>

        <v-chip v-if="selectedTasks.length > 0"  @click="doneTasks" class="ma-2 bg-red rounded-0 font-weight-bold text-white">
          <v-icon color="white" icon="mdi-delete"></v-icon>
          Tasks Done
        </v-chip>

        <v-chip @click="doneTasks" class="ma-2 bg-red font-weight-bold rounded-0">
          <v-icon color="white" icon="mdi-delete"></v-icon>
          Tasks
        </v-chip>
      </v-chip-group>
    </div>
  </v-card-item>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const totalTasks = computed(() => store.getters.totalTasks);
const selectedTasks = computed(() => store.getters.selectedTasks);

const doneTasks = () => store.commit("DONE_TASKS");
</script>
