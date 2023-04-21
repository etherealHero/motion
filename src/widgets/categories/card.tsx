import { Reorder } from "framer-motion"
import React, { useEffect, useState } from "react"
import { useOutside } from "../../shared"
import { ICategory } from "./data"
import { motion } from "framer-motion"
import { CardController } from "../../features"

type Props = {
  category: ICategory
  remove: () => void
  moveRight: () => void
  moveLeft: () => void
  idx: number
  categories: ICategory[]
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>
}

const Card = ({
  category,
  remove,
  moveRight,
  moveLeft,
  idx,
  categories,
  setCategories,
}: Props) => {
  const [isMove, setIsMove] = useState<boolean>(false)
  const { isShow, setIsShow, ref, toggler } = useOutside(false)

  useEffect(() => setIsMove(false), [isShow])

  const progressVariants: { [index: string]: string } = {
    accent: "progress-accent",
    primary: "progress-primary",
    secondary: "progress-secondary",
    info: "progress-info",
    success: "progress-success",
    warning: "progress-warning",
    error: "progress-error",
  }

  const variants = {
    init: { opacity: 0, scale: 0.8, x: -70 },
    animate: (idx: number) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { delay: idx * 0.15, duration: 0.5 },
    }),
    exit: {
      opacity: 0,
      scale: 0.7,
      transition: {
        delay: 0.1,
        duration: 0.2,
      },
    },
  }

  return (
    <Reorder.Item
      key={category.id}
      value={category}
      dragListener={false}
      className="card card-compact shrink-0 w-56 bg-base-300/50"
      variants={variants}
      custom={idx}
      initial="init"
      animate="animate"
      exit="exit"
    >
      <CardController position="right-start" direction="row" />
      {/* <div
        className={`
        dropdown  dropdown-end text-base-content
        absolute z-10 right-1 top-1
        ${isShow ? "dropdown-open" : ""}
      `}
      >
        <label
          className="btn btn-ghost btn-sm "
          onClick={() => setIsShow(!isShow)}
          ref={toggler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </label>
        {isShow && (
          <ul
            className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-max mt-10"
            ref={ref}
          >
            <li>
              <a className="px-2" onClick={() => setIsMove(!isMove)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="rotate-90"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
                Переместить
              </a>
            </li>
            {isMove && (
              <li className="flex flex-row flex-nowrap gap-x-1 p-1">
                <a
                  onClick={moveLeft}
                  className="w-1/2 btn btn-sm bg-neutral/10 font-normal p-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                  </svg>
                </a>
                <a
                  onClick={moveRight}
                  className="w-1/2 btn btn-sm bg-neutral/10 font-normal p-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </a>
              </li>
            )}
            <li>
              <a className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 2a.5.5 0 0 1 .5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0 1 10.5 1.5a.5.5 0 0 1 0 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 0 0-.436.294V7.5H9a.5.5 0 0 1 0 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 0 1 0 1 4.165 4.165 0 0 1-2.06-.566A4.561 4.561 0 0 1 8 13.65a4.561 4.561 0 0 1-.44.285 4.165 4.165 0 0 1-2.06.566.5.5 0 0 1 0-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 0 1 0-1h.5V3.228a3.49 3.49 0 0 0-.436-.294A3.166 3.166 0 0 0 5.5 2.5.5.5 0 0 1 5 2z"
                  />
                  <path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v1zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4z" />
                </svg>
                Изменить
              </a>
            </li>
            <li className="">
              <a
                className="btn-error btn-outline font-bold px-2"
                onClick={remove}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
                Удалить
              </a>
            </li>
          </ul>
        )}
      </div> */}
      <div className="card-body">
        {category.tasks} tasks
        <h1 className="card-title">{category.title}</h1>
        <progress
          className={`progress w-full bg-gray-600/30 ${
            progressVariants[category.color]
          }`}
          value={category.complete}
          max="100"
        ></progress>
      </div>
    </Reorder.Item>
  )
}

export default Card
