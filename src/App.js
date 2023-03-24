import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Index";
import HomePage from './pages/home/Index';
import config from './utils/config';

function App() {
  const { routes } = config;


  return (
    <BrowserRouter>
     <div
				className={`App ${window.location.pathname === routes.home && "m-2"}`}>
          <Routes>
          <Route
						{...{
							path: routes.home,
							element: <HomePage />,
						}}
					/>
          <Route >
						{Pages.map((p, i) => (
							<Route key={i} {...p} />
						))}
					</Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
