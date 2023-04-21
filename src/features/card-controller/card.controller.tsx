import React, { useEffect, useState } from "react"
import { Icon, useOutside } from "../../shared"

type Props = {
  position: "right" | "right-start"
  direction: "row" | "col"
}

const CardController = (opt: Props) => {
  const { isShow, setIsShow, ref, toggler } = useOutside(false)
  const [isMove, setIsMove] = useState<boolean>(false)

  useEffect(() => setIsMove(false), [isShow])

  const position = {
    controller:
      opt.position === "right"
        ? `dropdown-left top-1/2 -translate-y-1/2`
        : opt.position === "right-start"
        ? `dropdown-end top-1 right-1`
        : "",
    menu:
      opt.position === "right"
        ? `mr-1`
        : opt.position === "right-start"
        ? `-mr-1`
        : "",
  }

  return (
    <div
      className={`dropdown text-base-content absolute z-10 right-1
        ${position.controller}
        ${isShow ? "dropdown-open" : ""}`}
    >
      <label
        className="btn btn-ghost btn-sm px-1"
        onClick={() => setIsShow(!isShow)}
        ref={toggler}
      >
        {opt.position === "right" && <Icon type="threedots-col" />}
        {opt.position === "right-start" && <Icon type="threedots-row" />}
      </label>
      {isShow && (
        <ul
          ref={ref}
          className={`dropdown-content menu menu-compact p-2 shadow
           bg-base-100 rounded-box w-max ${position.menu}`}
        >
          <li>
            <a className="px-2" onClick={() => setIsMove(!isMove)}>
              {opt.direction === "col" && <Icon type="move-col" />}
              {opt.direction === "row" && <Icon type="move-row" />}
              Переместить
            </a>
          </li>
          {isMove && (
            <li className="flex flex-row flex-nowrap gap-x-1 p-1">
              <a className="w-1/2 btn btn-sm bg-neutral/10 font-normal p-0">
                {opt.direction === "col" && <Icon type="down" />}
                {opt.direction === "row" && <Icon type="left" />}
              </a>
              <a className="w-1/2 btn btn-sm bg-neutral/10 font-normal p-0">
                {opt.direction === "col" && <Icon type="up" />}
                {opt.direction === "row" && <Icon type="right" />}
              </a>
            </li>
          )}
          <li>
            <a className="px-2">
              <Icon type="edit" />
              Изменить
            </a>
          </li>
          <li className="">
            <a className="btn-error btn-outline font-bold px-2">
              <Icon type="remove" />
              Удалить
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default CardController
