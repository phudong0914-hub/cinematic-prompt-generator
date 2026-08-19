/**
 * memoryManager.js — Short-term & Long-term Memory Architecture
 * ──────────────────────────────────────────────────────────────
 * Short-term: Session-level context (sessionStorage)
 * Long-term:  Project Storyboard with Character Bible (localStorage)
 */

/* ═══════════════════════════════════════════════════════════════
   1. SHORT-TERM MEMORY (Session Context)
   ═══════════════════════════════════════════════════════════════ */

const SESSION_KEY = 'cinematique_session';

/**
 * Saves session context (survives page refresh within the same tab).
 * @param {object} context
 */
export function saveSessionContext(context) {
  try {
    const existing = getSessionContext();
    const merged = { ...existing, ...context, updatedAt: new Date().toISOString() };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(merged));
  } catch (err) {
    console.warn('[Memory] Failed to save session context:', err);
  }
}

/**
 * Retrieves the current session context.
 * @returns {object}
 */
export function getSessionContext() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Clears session context.
 */
export function clearSessionContext() {
  sessionStorage.removeItem(SESSION_KEY);
}


/* ═══════════════════════════════════════════════════════════════
   2. LONG-TERM MEMORY — PROJECT STORYBOARD
   ═══════════════════════════════════════════════════════════════ */

const PROJECTS_KEY = 'cinematique_projects';
const ACTIVE_PROJECT_KEY = 'cinematique_active_project';
const MAX_PROJECTS = 10;
const MAX_SCENES_PER_PROJECT = 50;

/**
 * @typedef {object} Scene
 * @property {string} id
 * @property {string} title
 * @property {string} imagePrompt
 * @property {string} videoPrompt
 * @property {string} subject
 * @property {string} character
 * @property {string} negative
 * @property {string} aspectRatio
 * @property {string} preset
 * @property {number} score
 * @property {string} createdAt
 */

/**
 * @typedef {object} Project
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {object} characterBible  - Persistent character description for consistency
 * @property {string} characterBible.name
 * @property {string} characterBible.description
 * @property {string} characterBible.visualAnchors
 * @property {string} colorPalette    - Dominant color scheme for the project
 * @property {Scene[]} scenes
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * Loads all projects from localStorage.
 * @returns {Project[]}
 */
export function getAllProjects() {
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Saves all projects to localStorage.
 * @param {Project[]} projects
 */
function saveAllProjects(projects) {
  try {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects.slice(0, MAX_PROJECTS)));
  } catch (err) {
    console.warn('[Memory] Failed to save projects:', err);
  }
}

/**
 * Gets the active project ID.
 * @returns {string|null}
 */
export function getActiveProjectId() {
  return localStorage.getItem(ACTIVE_PROJECT_KEY) || null;
}

/**
 * Sets the active project by ID.
 * @param {string|null} projectId
 */
export function setActiveProjectId(projectId) {
  if (projectId) {
    localStorage.setItem(ACTIVE_PROJECT_KEY, projectId);
  } else {
    localStorage.removeItem(ACTIVE_PROJECT_KEY);
  }
}

/**
 * Gets the currently active project.
 * @returns {Project|null}
 */
export function getActiveProject() {
  const id = getActiveProjectId();
  if (!id) return null;
  return getAllProjects().find(p => p.id === id) || null;
}

/**
 * Creates a new project.
 * @param {string} name
 * @param {string} [description='']
 * @returns {Project}
 */
export function createProject(name, description = '') {
  const projects = getAllProjects();

  if (projects.length >= MAX_PROJECTS) {
    throw new Error(`Đã đạt giới hạn ${MAX_PROJECTS} dự án. Hãy xóa bớt dự án cũ.`);
  }

  /** @type {Project} */
  const project = {
    id: 'proj_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    name: name.trim() || 'Dự án mới',
    description: description.trim(),
    characterBible: {
      name: '',
      description: '',
      visualAnchors: '',
    },
    colorPalette: '',
    scenes: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  projects.unshift(project);
  saveAllProjects(projects);
  setActiveProjectId(project.id);

  return project;
}

/**
 * Updates project metadata (name, description, characterBible, colorPalette).
 * @param {string} projectId
 * @param {Partial<Project>} updates
 * @returns {Project|null}
 */
export function updateProject(projectId, updates) {
  const projects = getAllProjects();
  const idx = projects.findIndex(p => p.id === projectId);
  if (idx === -1) return null;

  const allowed = ['name', 'description', 'characterBible', 'colorPalette'];
  for (const key of allowed) {
    if (updates[key] !== undefined) {
      projects[idx][key] = updates[key];
    }
  }
  projects[idx].updatedAt = new Date().toISOString();

  saveAllProjects(projects);
  return projects[idx];
}

/**
 * Deletes a project by ID.
 * @param {string} projectId
 */
export function deleteProject(projectId) {
  let projects = getAllProjects();
  projects = projects.filter(p => p.id !== projectId);
  saveAllProjects(projects);

  if (getActiveProjectId() === projectId) {
    setActiveProjectId(projects.length > 0 ? projects[0].id : null);
  }
}

/**
 * Adds a scene to the active project.
 * @param {Partial<Scene>} sceneData
 * @returns {Scene|null}
 */
export function addSceneToProject(sceneData) {
  const projectId = getActiveProjectId();
  if (!projectId) return null;

  const projects = getAllProjects();
  const project = projects.find(p => p.id === projectId);
  if (!project) return null;

  if (project.scenes.length >= MAX_SCENES_PER_PROJECT) {
    throw new Error(`Đã đạt giới hạn ${MAX_SCENES_PER_PROJECT} cảnh/dự án.`);
  }

  /** @type {Scene} */
  const scene = {
    id: 'scene_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    title: sceneData.title || `Cảnh ${project.scenes.length + 1}`,
    imagePrompt: sceneData.imagePrompt || '',
    videoPrompt: sceneData.videoPrompt || '',
    subject: sceneData.subject || '',
    character: sceneData.character || '',
    negative: sceneData.negative || '',
    aspectRatio: sceneData.aspectRatio || '--ar 16:9',
    preset: sceneData.preset || '',
    score: sceneData.score || 0,
    createdAt: new Date().toISOString(),
  };

  project.scenes.push(scene);
  project.updatedAt = new Date().toISOString();
  saveAllProjects(projects);

  return scene;
}

/**
 * Removes a scene from the active project.
 * @param {string} sceneId
 */
export function removeSceneFromProject(sceneId) {
  const projectId = getActiveProjectId();
  if (!projectId) return;

  const projects = getAllProjects();
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  project.scenes = project.scenes.filter(s => s.id !== sceneId);
  project.updatedAt = new Date().toISOString();
  saveAllProjects(projects);
}

/**
 * Gets the character bible from the active project for AI context injection.
 * @returns {{ name: string, description: string, visualAnchors: string, colorPalette: string } | null}
 */
export function getActiveCharacterContext() {
  const project = getActiveProject();
  if (!project) return null;
  if (!project.characterBible?.name && !project.characterBible?.description) return null;

  return {
    name: project.characterBible.name || '',
    description: project.characterBible.description || '',
    visualAnchors: project.characterBible.visualAnchors || '',
    colorPalette: project.colorPalette || '',
  };
}

/**
 * Gets project scene count for display.
 * @returns {{ projectName: string, sceneCount: number } | null}
 */
export function getActiveProjectSummary() {
  const project = getActiveProject();
  if (!project) return null;
  return {
    projectName: project.name,
    sceneCount: project.scenes.length,
  };
}
