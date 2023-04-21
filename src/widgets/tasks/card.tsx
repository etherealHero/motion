import { Reorder } from "framer-motion"
import { CardController } from "../../features"
import { ITask } from "./data"

type Props = {
  task: ITask
  idx: number
}

const Card = ({ task, idx }: Props) => {
  const checkboxVariants: { [index: string]: string } = {
    accent: "checkbox-accent",
    primary: "checkbox-primary",
    secondary: "checkbox-secondary",
    info: "checkbox-info",
    success: "checkbox-success",
    warning: "checkbox-warning",
    error: "checkbox-error",
  }

  return (
    <Reorder.Item
      key={task.id}
      value={task}
      dragListener={false}
      className="card bg-base-300/50  shrink-0 mb-2"
      custom={idx}
      variants={{
        animate: (idx: number) => ({
          opacity: 1,
          transition: {
            delay: 0.3 + idx * 0.15,
          },
        }),
      }}
      animate="animate"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <CardController position="right" direction="col" />
      <div className="card-body p-4 pr-8 flex flex-row items-center gap-4">
        <input
          type="checkbox"
          className={`checkbox rounded-full ${checkboxVariants[task.color]}`}
        />

        <div className="w-full">
          <h3 className="card-title">{task.title}</h3>
          <p className="text-base-content/50 mt-0">{task.description}</p>
        </div>
      </div>
    </Reorder.Item>
  )
}

export default Card
