import { useForm } from 'react-hook-form'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useTaskStore } from '@/store/task-store'

interface FormProps {
  taskName: string
}

interface EditTaskDialogProps {
  taskId: number
}

export function EditTaskDialog({ taskId }: EditTaskDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormProps>()

  const { editTask } = useTaskStore()

  async function handleUpdateProfile(data: FormProps) {
    editTask(taskId, data.taskName)
    reset()
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogDescription>Edit your Task</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right" htmlFor="taskName">
              Edit Task:
            </label>
            <Input
              className="col-span-3"
              id="taskName"
              type="text"
              {...register('taskName')}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              type="submit"
              className="bg-emerald-500"
              disabled={isSubmitting}
            >
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
