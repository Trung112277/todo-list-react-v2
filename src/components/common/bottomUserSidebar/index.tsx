import { ButtonDeleteAllTasks } from "@/components/feature/buttonDeleteAllTasks";
import { ProjectedBy } from "@/components/common/projectedBy";
export function BottomUserSidebar() {
    return (
        <div className="flex flex-col gap-2 mt-auto">
            <ButtonDeleteAllTasks />
            <ProjectedBy />
        </div>
    )
}

