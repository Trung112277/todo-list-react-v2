import { TodayTasksList } from "./todayTasksList";

export function TodayTasks() {
    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-md font-medium">
                Today's Tasks
            </h2>
            <TodayTasksList />
        </div>
    )
}
