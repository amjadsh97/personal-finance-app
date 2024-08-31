import {iconminimizemenu, logoLarge} from "./icon";
import {Link, Routes, Route, useLocation} from "react-router-dom";
import {navList} from "./utils/constants.ts";
import {NavProps} from "./utils/types.ts";
import "./reset.css"
import './App.css'
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Pots from "./pages/Pots";
import RecurringBills from "./pages/RecurringBills";


function App() {
  const currentPath = useLocation();

  return (
    <div className='app'>
      <header></header>
      <main>
        <aside className="aside">
          <h1 className="logo">
            <img className='logo-large' src={logoLarge} alt="logo large"/>
          </h1>
          <nav className="nav">
            <ul className="list-nav">
              {navList.map((item: NavProps) => (
                <li className="nav-item">
                  <Link to={item.path} className={currentPath.pathname === item.path ? "active" : ""}>
                    <div className="img-wrapper">
                      <img src={item.icon} alt={`icon for ${item.label.toLowerCase()}`}/>
                    </div>
                    <span className='label text-3'>{item.label}</span>
                  </Link>
                </li>
              ))}

              <li className="nav-item minimize-menu">
                <Link to={"#"}>
                  <div className="img-wrapper">
                    <img src={iconminimizemenu} alt={`icon for Minimize Menu`}/>
                  </div>
                  <span className='label text-3'>Minimize Menu</span>
                </Link>
              </li>
            </ul>
          </nav>

        </aside>
        <div className="app-page">
          <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/transactions" element={<Transactions/>}/>
            <Route path='/budgets' element={<Budgets/>}/>
            <Route path='/pots' element={<Pots/>}/>
            <Route path='/recurring-bills' element={<RecurringBills/>}/>
          </Routes>
        </div>

      </main>
      <footer></footer>
    </div>
  )
}

export default App
