import { FaRegCalendarAlt, FaTasks, FaStar, FaCheckCircle, FaRegCircle } from "react-icons/fa";
import type { StatusType } from '@/types/taskStatus';

export const taskStatuses: StatusType[] = [
  { key: 'today', label: "Today's tasks", path: '/today', icon: <FaRegCalendarAlt /> },
  { key: 'all', label: 'All', path: '/', icon: <FaTasks /> },
  { key: 'important', label: 'Important', path: '/important', icon: <FaStar /> },
  { key: 'completed', label: 'Completed', path: '/completed', icon: <FaCheckCircle /> },
  { key: 'uncompleted', label: 'Uncompleted', path: '/uncompleted', icon: <FaRegCircle /> },
];