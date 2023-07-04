/* eslint-disable no-unused-vars */
import {create} from "zustand"

const store = (set)=>({
    tasks: [{title:"TEST TASK", state:"PLANNED", id:1},{title:"TEST TASK 2", state:"PLANNED", id:2},{title:"TEST TASK 3", state:"DONE", id: 3}, {title:"TEST TASK 4", state:"ONGOING", id:4}],
    addTask : (title, state) => set((store)=>({tasks: [...store.tasks, {title, state, id: store.tasks.length+1}]})),
})

export const useStore = create(store)