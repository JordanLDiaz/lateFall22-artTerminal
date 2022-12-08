import { AppState } from "../AppState.js"
import { Project } from "../models/Project.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProjectsService {
  async getProjects() {
    const res = await api.get('api/projects')
    logger.log('[get projects]', res.data)
    AppState.projects = res.data.map(p => new Project(p))
  }

  async getProjectsByCreatorId(creatorId) {
    const res = await api.get('api/projects', { params: { creatorId: creatorId } })
    logger.log('[get projects by creator]', res.data)
    AppState.projects = res.data.map(p => new Project(p))
  }
  setActiveProject(project) {
    AppState.activeProject = project
  }
}


export const projectsService = new ProjectsService()