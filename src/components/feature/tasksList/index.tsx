import { ButtonAddTaskList } from '@/components/feature/button/buttonAddTaskList';
import { TaskListItem } from '@/components/feature/tasksList/taskListItem';

export function TasksList() {
  return (
    <ul className="mt-5 mb-10 grid gap-2 sm:gap-4 xl:gap-6 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end">
      <TaskListItem />
      <TaskListItem />
      <TaskListItem />
      <TaskListItem />
      <ButtonAddTaskList />
    </ul>
  );
}
