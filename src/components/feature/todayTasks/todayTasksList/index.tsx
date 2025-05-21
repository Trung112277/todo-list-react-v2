import { TodayTaskItem } from "../todayTaskitem";

export function TodayTasksList() {
    return (
       <ul className="flex flex-col gap-2 pl-4">
        <TodayTaskItem>
            Task 1
        </TodayTaskItem>
        <TodayTaskItem>
            Task 2
        </TodayTaskItem>
        <TodayTaskItem>
            Task 3
        </TodayTaskItem>
       </ul>
    )
}

