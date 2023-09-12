<template>
  <div id="todo-form-container" class="bg-grey-lighten-3 px-3 py-3">
    <v-card-actions>
      <v-text-field
        v-model="newTaskName"
        variant="solo"
        label="New Task"
        single-line
        hide-details
        outlined
        rounded
        @keyup.enter="addTask"
      >
        <template v-slot:append-inner>
          <v-icon
            @click:append-inner="addTask"
            icon="mdi-plus-circle"
            size="x-large"
            color="#01579B"
          />
        </template>
      </v-text-field>
    </v-card-actions>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const newTaskName = ref("");

const addTask = () => {
  store.commit("ADD_TASK", newTaskName.value);
  newTaskName.value = "";
};
</script>

<style lang="scss">
#todo-form-container {
  .v-field {
    border: 2px solid #01579b;
  }
}
</style>
