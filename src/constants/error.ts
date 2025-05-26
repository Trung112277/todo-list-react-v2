export const ERROR_MESSAGES = {
  FORM: {
    REQUIRED_TITLE: 'Title is required',
    REQUIRED_DATE: 'Date is required',
  },
  CONTEXT: {
    TASK_FORM: 'useTaskForm must be used within a TaskFormProvider',
    TASK_ITEM_EDIT: 'useTaskItemEdit must be used within a TaskItemEditProvider',
  },
} as const; 