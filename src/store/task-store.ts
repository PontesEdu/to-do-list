import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Task {
  id: number
  text: string
  date: string
  done: boolean // ← NOVO
}

interface TaskStore {
  tasks: Task[]
  addTask: (text: string) => void
  removeTask: (id: number) => void
  editTask: (id: number, text: string) => void
  toggleDone: (id: number) => void // ← NOVO
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (text: string) =>
        set((state) => {
          const now = new Date()
          const day = String(now.getDate()).padStart(2, '0')
          const month = String(now.getMonth() + 1).padStart(2, '0')
          const year = now.getFullYear()

          return {
            tasks: [
              ...state.tasks,
              {
                id: Date.now(),
                text,
                date: `${day}/${month}/${year}`,
                done: false, // ← SEMPRE COMEÇA NÃO CONCLUÍDA
              },
            ],
          }
        }),

      removeTask: (id: number) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      editTask: (id: number, text: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, text } : task,
          ),
        })),

      toggleDone: (id: number) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task,
          ),
        })),
    }),
    {
      name: 'task-storage',
    },
  ),
)
