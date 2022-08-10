import { NavLink, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Basic React-TypeScript with Vite</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/other">Another</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return <div>This is the home page.</div>;
}

function Other() {
  return <div> This is another page.</div>;
}
