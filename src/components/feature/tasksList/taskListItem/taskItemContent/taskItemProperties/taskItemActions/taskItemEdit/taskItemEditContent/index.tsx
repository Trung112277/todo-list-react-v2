import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TaskItemEditButton } from "../taskItemEditButton";
import { useTaskItemEdit } from "@/contexts/taskItemEdit/context";
import { SubTitle } from "@/components/common/title/subTitle";
import { FormTask } from "@/components/feature/formAdd/formTask";

export function TaskItemEditContent() {
    const { taskId, isOpen, openDialog, closeDialog } = useTaskItemEdit();
  
    return (    
      <Dialog open={isOpen} onOpenChange={(open) => open ? openDialog() : closeDialog()}>
        <DialogTrigger>
          <TaskItemEditButton />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <SubTitle>Edit task</SubTitle>
            </DialogTitle>
          </DialogHeader>
          <FormTask taskId={taskId} />
        </DialogContent>
      </Dialog>
    );
  }