import { AnimatePresence, Reorder } from "framer-motion"
import React, { useContext, useState } from "react"
import { ModalContext } from "../../app/ModalProvider"
import { AddCategory } from "../../features"
import Card from "./card"
import { data, ICategory } from "./data"

type Props = {}

const Categories = (props: Props) => {
  const [categories, setCategories] = useState<ICategory[]>(data)
  const { setModalChild } = useContext(ModalContext)

  return (
    <>
      <div className="mx-4 mt-4 flex items-end gap-x-3">
        <h2>Categories</h2>
        <label
          htmlFor="my-modal"
          className="btn btn-sm btn-primary"
          onClick={() => {
            setModalChild(
              <AddCategory
                onSubmit={(category: ICategory) =>
                  setCategories([category, ...categories])
                }
              />
            )
          }}
        >
          + Add
        </label>
      </div>
      {categories.length ? (
        <Reorder.Group
          axis="x"
          values={categories}
          onReorder={setCategories}
          className="flex gap-x-3 overflow-x-scroll p-4 pb-52 scrollbar-hide"
        >
          <AnimatePresence>
            {categories.map((category, idx) => (
              <Card
                categories={categories}
                setCategories={setCategories}
                idx={idx}
                key={category.id}
                category={category}
                remove={() =>
                  setCategories(
                    [...categories].filter((c) => c.id !== category.id)
                  )
                }
                moveRight={() => {
                  let newCategories = [...categories]
                  let categoryIdx = newCategories.findIndex(
                    (c) => c.id === category.id
                  )
                  if (categoryIdx === newCategories.length - 1) return
                  let swap = newCategories[categoryIdx + 1]
                  newCategories[categoryIdx] = swap
                  newCategories[categoryIdx + 1] = category
                  setCategories(newCategories)
                }}
                moveLeft={() => {
                  let newCategories = [...categories]
                  let categoryIdx = newCategories.findIndex(
                    (c) => c.id === category.id
                  )
                  if (categoryIdx === 0) return
                  let swap = newCategories[categoryIdx - 1]
                  newCategories[categoryIdx - 1] = category
                  newCategories[categoryIdx] = swap
                  setCategories(newCategories)
                }}
              />
            ))}
          </AnimatePresence>
        </Reorder.Group>
      ) : (
        <div className="p-4 pb-52 divider w-full text-base-content/50">
          Empty list
        </div>
      )}
    </>
  )
}

export default Categories
