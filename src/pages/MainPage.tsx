import { Categories, Tasks, Navbar } from "../widgets"
import { ThemeChanger } from "../features"

type Props = {}

const MainPage = (props: Props) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* CONTENT */}
        <Navbar />
        <Categories />
        <Tasks />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 pt-20 w-80 bg-base-100 text-base-content">
          {/* SIDEBAR */}

          <li className="btn-primary">
            <a>Главная</a>
          </li>
          <li>
            <a>Настройки</a>
          </li>

          <li>
            <a>Задачи</a>
          </li>
          <li>
            <a>Завершить</a>
          </li>
          <li>
            <ThemeChanger />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainPage
