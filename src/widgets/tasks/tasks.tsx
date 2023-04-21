import { AnimatePresence, Reorder } from "framer-motion"
import React, { useState, useContext, useEffect, useRef } from "react"
import { ModalContext } from "../../app/ModalProvider"
import { AddTask } from "../../features"
import { useWindowSize } from "../../shared"
import Card from "./card"
import { data, ITask } from "./data"

type Props = {}

const Tasks = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [_, windowHeight] = useWindowSize()
  const { setModalChild } = useContext(ModalContext)

  const [tasks, setTasks] = useState<ITask[]>(data)

  useEffect(() => {
    if (!ref.current) return
    const coords = ref.current.getBoundingClientRect()
    ref.current.style.height = windowHeight - 16 - coords.top + "px"
  }, [ref, windowHeight])

  return (
    <>
      <div className="mx-4 -mt-48 flex items-end gap-x-3">
        <h2>Today tasks</h2>
        <label
          htmlFor="my-modal"
          className="btn btn-sm btn-primary"
          onClick={() => {
            setModalChild(<AddTask />)
          }}
        >
          + Add
        </label>
      </div>
      {/* <div ref={ref} className=" overflow-scroll px-4 my-4 scrollbar-hide"> */}
      <Reorder.Group
        axis="y"
        values={tasks}
        onReorder={setTasks}
        className="overflow-scroll px-4 my-4 scrollbar-hide"
        ref={ref}
      >
        <AnimatePresence>
          {tasks.map((task, idx) => (
            <Card task={task} idx={idx} />
          ))}
        </AnimatePresence>
      </Reorder.Group>
      {/* </div> */}
    </>
  )
}

export default Tasks
