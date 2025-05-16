import React from "react";
import { NavLink } from "./navlink";
import type { StatusType } from "@/types/taskStatus";

interface TaskStatusNavProps {
  statuses: StatusType[];
  className?: string;
}

const TaskStatusNav: React.FC<TaskStatusNavProps> = ({ statuses, className }) => (
  <nav className={`flex flex-col gap-2 ${className ?? ""}`}>
    {statuses.map(({ key, path, icon, label }) => (
      <NavLink key={key} to={path} aria-label={label}>
        <div className="flex items-center gap-2">
          {icon}
          <span>{label}</span>
        </div>
      </NavLink>
    ))}
  </nav>
);

export default TaskStatusNav;