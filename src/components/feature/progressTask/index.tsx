import { ProgressAllTasks } from "./ProgressAllTasks";
import { ProgressTodayTasks } from "./ProgressTodayTasks";

export function ProgressTask() {
    return (
        <div className="flex flex-col gap-5">
            <ProgressTodayTasks />
            <ProgressAllTasks />
        </div>
    )
}
