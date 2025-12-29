export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export const taskStatusOptions: {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[] = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open'
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In-Progress'
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Complete'
  },
  
]


export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
