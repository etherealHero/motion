export interface ICategory {
  id: number
  title: string
  tasks: number
  complete: number
  color: string
}

export const data: ICategory[] = [
  {
    id: 2,
    title: "Business",
    tasks: 30,
    complete: 70,
    color: "accent",
  },
  {
    id: 7,
    title: "Personal",
    tasks: 10,
    complete: 30,
    color: "error",
  },
  {
    id: 3,
    title: "Personal",
    tasks: 10,
    complete: 30,
    color: "warning",
  },
  {
    id: 6,
    title: "Personal",
    tasks: 10,
    complete: 30,
    color: "success",
  },
  {
    id: 5,
    title: "Business",
    tasks: 30,
    complete: 70,
    color: "info",
  },
  {
    id: 4,
    title: "Travel",
    tasks: 30,
    complete: 70,
    color: "primary",
  },
  {
    id: 1,
    title: "Travel",
    tasks: 30,
    complete: 70,
    color: "secondary",
  },
]
