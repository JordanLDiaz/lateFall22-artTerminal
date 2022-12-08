<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="p in projects" class="col-12 col-md-3 p-4">
        <ProjectCard :project="p" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { projectsService } from '../services/ProjectsService.js'
import ProjectCard from '../components/ProjectCard.vue';

export default {
  setup() {
    async function getProjects() {
      try {
        await projectsService.getProjects();
      }
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    onMounted(() => {
      getProjects();
    });
    return {
      projects: computed(() => AppState.projects)
    };
  },
  components: { ProjectCard }
}
</script>

<style scoped lang="scss">

</style>
