import { useTask } from '@/contexts/task/context';
import { useLocation } from 'react-router-dom';

interface StatusTitleProps {
    title: string;
}

export function StatusTitle({ title }: StatusTitleProps) {
    const { tasksMap } = useTask();
    const location = useLocation();
    const pathname = location.pathname;

    const getTaskCount = () => {
        const tasks = Array.from(tasksMap.values());
        const today = new Date().toISOString().split('T')[0];
        
        // Get directoryId from URL path
        const pathParts = pathname.split('/');
        const directoryId = pathParts[pathParts.length - 1];

        // Debug logs
        console.log('Current pathname:', pathname);
        console.log('Directory ID from URL:', directoryId);
        console.log('All tasks:', tasks.map(task => ({
            id: task.id,
            title: task.title,
            directoryId: task.directoryId
        })));

        // Handle special routes
        if (pathname === '/') return tasks.length;
        if (pathname === '/important') return tasks.filter(task => task.isImportant).length;
        if (pathname === '/completed') return tasks.filter(task => task.isCompleted).length;
        if (pathname === '/today') return tasks.filter(task => task.dueDate === today).length;
        if (pathname === '/uncompleted') return tasks.filter(task => !task.isCompleted).length;

        // Handle directory pages
        if (pathParts.length > 1) {
            const directoryTasks = tasks.filter(task => {
                const matches = task.directoryId === directoryId;
                console.log('Task directory check:', {
                    taskId: task.id,
                    taskTitle: task.title,
                    taskDirectoryId: task.directoryId,
                    currentDirectoryId: directoryId,
                    matches
                });
                return matches;
            });
            console.log('Found tasks in directory:', directoryTasks.length);
            return directoryTasks.length;
        }

        return 0;
    };

    const count = getTaskCount();
    const taskText = count === 1 ? 'task' : 'tasks';

    return (
        <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200">
            {title} ({count} {taskText})
        </h1>
    );
}