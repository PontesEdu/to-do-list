import { AddTaskDialog } from '@/components/add-task-dialog'
import { Task } from '@/components/task'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { useTaskStore } from '@/store/task-store'
import { useState } from 'react'

export function TaskList() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const { tasks } = useTaskStore()

  return (
    <div className="flex w-full flex-col items-center justify-center px-5">
      <div className="w-full space-y-2 md:w-[700px]">
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button size="sm">Add Task</Button>
          </DialogTrigger>
          <AddTaskDialog />
        </Dialog>
        <div className="flex flex-col gap-4 rounded-xl border bg-gray-200 p-4">
          {tasks.map((task) => (
            <Task
              key={task.id}
              taskId={task.id}
              text={task.text}
              date={task.date}
              done={task.done}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
