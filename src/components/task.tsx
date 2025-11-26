import { PencilIcon, Trash } from 'lucide-react'
import { Checkbox } from './ui/checkbox'
import { useTaskStore } from '@/store/task-store'
import { Dialog, DialogTrigger } from './ui/dialog'
import { useState } from 'react'
import { EditTaskDialog } from './edit-task-dialog'

interface TaskProps {
  text: string
  date: string
  taskId: number
  done: boolean // ← novo
}

export function Task({ taskId, text, date, done }: TaskProps) {
  const [isTaskOpen, setIsTaskOpen] = useState(false)

  const { removeTask, toggleDone } = useTaskStore()

  return (
    <div className="flex w-full flex-col gap-5 rounded-xl bg-white px-5 py-3 md:flex-row md:justify-between">
      <div className="flex items-center gap-4">
        <Checkbox
          checked={done}
          onCheckedChange={() => toggleDone(taskId)}
          id="done"
          className="h-6 w-6"
        />
        <div className="flex flex-col justify-start">
          <h1 className={`text-md ${done ? 'text-gray-400 line-through' : ''}`}>
            {text}
          </h1>
          <p className="text-sm tracking-tighter">{date}</p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <button
          className="rounded-md bg-gray-300 p-2"
          onClick={() => removeTask(taskId)}
        >
          <Trash className="h-4 w-4" />
          <span className="sr-only">icon de remover</span>
        </button>

        <Dialog open={isTaskOpen} onOpenChange={setIsTaskOpen}>
          <DialogTrigger asChild className="rounded-md bg-gray-300 p-2">
            <button>
              <PencilIcon className="h-4 w-4" />
              <span className="sr-only">Botão de Editar</span>
            </button>
          </DialogTrigger>
          <EditTaskDialog taskId={taskId} />
        </Dialog>
      </div>
    </div>
  )
}
