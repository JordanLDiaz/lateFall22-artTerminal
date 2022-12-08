<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div v-if="project" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{ project.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div v-for="p in project.projectImgs" class="col-12 text-center">
                <img :src="p" alt="" class="img-fluid mb-3 rounded elevation-5">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { computed } from 'vue'

export default {
  setup() {
    return {
      project: computed(() => AppState.activeProject)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>