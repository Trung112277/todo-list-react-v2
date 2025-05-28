import { useTask } from '@/contexts/task';
import { TodayTasksList } from "./todayTasksList";
import { useMemo } from 'react';

export function TodayTasks() {
    const { tasks } = useTask();
    
    const todayTasks = useMemo(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        return tasks.filter(task => {
            const taskDate = new Date(task.dueDate);
            taskDate.setHours(0, 0, 0, 0);
            return taskDate.getTime() === today.getTime() && !task.isCompleted;
        });
    }, [tasks]);

    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-md font-medium">
                Today's Tasks
            </h2>
            {todayTasks.length > 0 ? (
                <TodayTasksList tasks={todayTasks} />
            ) : (
                <p className="text-sm text-muted-foreground">No tasks today</p>
            )}
        </div>
    );
}
