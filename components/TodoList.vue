<template>
    <v-card
      class="mx-auto elevation-2 border-0 bg-white"
      max-width="600"
      variant="outlined"
    >
      <TodoHeader />
      <TodoItem />
      <TodoForm />
    </v-card>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

onMounted(() => store.dispatch("loadTasks"));
watch(
  () => store.state.tasks,
  () => store.dispatch("savedTasks"),
  { deep: true }
);
</script>
