export interface ITask {
  id: number
  title: string
  description?: string
  color: string
  complete?: boolean
}

export const data: ITask[] = [
  {
    id: 1,
    title: "lorem dolor ",
    description: "lorem dolor sit upsnms",
    color: "accent",
  },
  {
    id: 2,
    title: "dolor sit upsnms",
    color: "primary",
  },
  {
    id: 20,
    title: "upsnms",
    description:
      "lorem dolor sit upsnms lorem dolor sit upsnms lorem dolor sit upsnms lorem dolor sit upsnms lorem dolor sit upsnms",
    color: "primary",
  },
  {
    id: 21,
    title: "dolor sit ",
    color: "primary",
  },
  {
    id: 3,
    title: "lorem dolor sit upsnms dolor sit upsnms",
    color: "secondary",
  },
  {
    id: 4,
    title: "lorem upsnms",
    description:
      "lorem dolor sit upsnms lorem dolor sit upsnms lorem dolor sit upsnms",
    color: "warning",
  },
  {
    id: 5,
    title: "lorem dolor sit upsnms",
    description: "lorem dolor sit upsnms",
    color: "success",
  },
  {
    id: 6,
    title: "lorem dolor sit upsnms",
    description: "lorem dolor sit upsnms",
    color: "error",
  },
  {
    id: 7,
    title: "lorem dolor sit upsnms",
    description: "lorem dolor sit upsnms",
    color: "info",
  },
  {
    id: 8,
    title: "lorem dolor sit upsnms",
    description: "lorem dolor sit upsnms",
    color: "accent",
  },
]
