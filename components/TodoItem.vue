<template>
  <div id="todo-item-container">
    <v-card-item class="px-0 py-0">
      <v-list>
        <div v-if="tasks.length < 1">
          <h2 class="text-center mt-5">No Tasks</h2>
        </div>
        <v-virtual-scroll :items="tasks" :height="240" class="px-5 py-3">
          <template v-slot="{ item }">
            <v-slide-x-transition leave-absolute appear>
              <div class="py-2" :key="item.id">
                <v-list-item
                  class="border rounded-lg"
                  :class="{ 'text-disabled': item.status.done }"
                >
                  <template v-slot:title>
                    <v-icon
                      @click="toggleTask(item.id, item.status.done)"
                      icon="mdi-check-circle"
                      :color="item.status.done ? '#A5D6A7' : '#66BB6A'"
                      class="me-4"
                      size="large"
                    />

                    <span
                      :class="{
                        'text-decoration-line-through': item.status.done,
                      }"
                      >{{ item.name }}</span
                    >
                  </template>

                  <template v-slot:append>
                    <v-btn
                      @click.stop="deleteTask(item.id)"
                      color="grey-lighten-1"
                      icon="mdi-delete"
                      variant="text"
                    ></v-btn>
                  </template>
                </v-list-item>
              </div>
            </v-slide-x-transition>
          </template>
        </v-virtual-scroll>
      </v-list>
    </v-card-item>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const tasks = computed(() => store.state.tasks);

const toggleTask = (id, done) => store.commit("TOGGLE_TASKS", { id, done });
const deleteTask = (id) => store.commit("DELETE_TASK", id);
</script>

<style lang="scss" scoped>
.v-list-item {
  .v-btn {
    visibility: hidden;
  }
  &:hover .v-btn {
    visibility: visible;
  }
}
</style>
