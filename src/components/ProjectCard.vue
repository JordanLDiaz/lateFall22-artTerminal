<template>
  <div class="bg-image rounded elevation-5 d-flex justify-content-between align-items-end">
    <button @click="setActiveProject()" data-bs-toggle="modal" data-bs-target="#exampleModal"
      :class="`btn btn-${includesMe ? 'danger': 'light'} m-1 elevation-5`">
      <i v-if="includesMe" class="mdi mdi-heart elevation-5"></i>
      See Images {{ project.projectImgs.length }}
    </button>
    <router-link v-if="route.name == 'Home'" :to="{ name: 'Profile', params: { profileId: project.creatorId } }">
      <img :src="project.creator.picture" :alt="project.creator.name"
        class="img-fluid m-1 creator-img rounded-circle elevation-5"
        :title="`Go to ${project.creator.name}'s Profile Page'`">
    </router-link>
  </div>
</template>


<script>
import { Project } from '../models/Project.js';
import { computed } from 'vue'
import { projectsService } from '../services/ProjectsService.js'
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';

export default {
  props: {
    project: {
      type: Project,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    return {
      route,
      coverImg: computed(() => `url(${props.project.coverImg})`),
      includesMe: computed(() => props.project.projectImgs.includes(AppState.account.picture)),
      setActiveProject() {
        projectsService.setActiveProject(props.project)
      }

    }
  }
}
</script>


<style lang="scss" scoped>
.bg-image {
  background-image: v-bind(coverImg);
  height: 40vh;
  width: 100%;
  background-position: center;
  background-size: cover;
}

.creator-img {
  height: 10vh;
  width: 10vh;
}
</style>