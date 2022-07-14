import { GET_ALL_DEVELOPERS, GET_PARTICULAR_DEVELOPER } from "../types"
import { GET_ALL_PROJECTS } from "../types"
import { GET_ALL_LANGUAGES, GET_ONE_LANGUAGE } from "../types"
import { GET_ALL_TASKS } from "../types"
import { GET_ALL_DEV_TO } from "../types"
import { GET_ALL_MANAGERS } from "../types"
import { GET_ALL_FRAMEWORKS } from "../types";
import { GET_ALL_QA } from "../types"
import { GET_ALL_DEV_TO_LANGUAGE } from "../types"
import { GET_ALL_DEV_TO_FRAMEWORK } from "../types"

export const getAllDevelopers= (payload) => ({
    type: GET_ALL_DEVELOPERS, payload
})

export const getParticularDeveloper= (payload) => ({
    type: GET_PARTICULAR_DEVELOPER, payload
})

export const getAllProjects= (payload) => ({
    type: GET_ALL_PROJECTS, payload
})

export const getAllLanguages= (payload) => ({
    type: GET_ALL_LANGUAGES, payload
})



export const getOneLanguage = (payload) => ({
    type: GET_ONE_LANGUAGE, payload
})

export const getAllTasks= (payload) => ({
    type: GET_ALL_TASKS, payload
})



export const getAllDevTo= (payload) => ({
    type: GET_ALL_DEV_TO, payload
})

export const getAllManagers= (payload) => ({
    type: GET_ALL_MANAGERS, payload
})

export const getAllFrameworks= (payload) => ({
    type: GET_ALL_FRAMEWORKS, payload
})

export const getAllQA= (payload) => ({
    type: GET_ALL_QA, payload
})

export const getAllDevToLan= (payload) => ({
    type: GET_ALL_DEV_TO_LANGUAGE, payload
})

export const getAllDevToFr= (payload) => ({
    type: GET_ALL_DEV_TO_FRAMEWORK, payload
})
