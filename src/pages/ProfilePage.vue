<template>
  <div class="container-fluid">
    <div v-if="profile" class="row cover-img" :style="`background-image: url(${profile.coverImg})`">
      <div class="col-12 d-flex align-items-center justify-content-around">
        <img :src="profile.picture" alt="" class="img-fluid profile-picture rounded-circle elevation-5">
        <div class="bg-transparent rounded elevation-5 p-5">
          <h1 class="elevation-1">
            {{ profile.name }}
          </h1>
          <h2>
            {{ profile.bio }}
          </h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="proj in projects" class="col-md-4 col-12 p-4">
        <ProjectCard :project="proj" />
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger.js';
import { profilesService } from '../services/ProfilesService.js';
import Pop from '../utils/Pop.js';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { projectsService } from '../services/ProjectsService.js';
import ProjectCard from '../components/ProjectCard.vue';
export default {
  setup() {
    const route = useRoute();
    async function getProfileByProfileId() {
      try {
        await profilesService.getProfileByProfileId(route.params.profileId);
      }
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    async function getProjectsByCreatorId() {
      try {
        await projectsService.getProjectsByCreatorId(route.params.profileId);
      }
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    onMounted(() => {
      getProfileByProfileId();
      getProjectsByCreatorId();
    });
    return {
      profile: computed(() => AppState.activeProfile),
      projects: computed(() => AppState.projects)
    };
  },
  components: { ProjectCard }
}
</script>


<style lang="scss" scoped>
.cover-img {
  min-height: 50vh;
  background-size: cover;
  background-position: center;
}

.profile-picture {
  height: 30vh;
  width: 30vh;
}

.bg-transparent {
  background-color: rgba(222, 184, 135, 0.185);
  text-shadow: 1px 1px white;
}
</style>