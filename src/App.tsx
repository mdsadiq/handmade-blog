
import './App.css';
import { Routes, Route } from "react-router-dom";
import Users from './pages/users';
import PostLayout from './components/PostLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:userid/*" element={<PostLayout />} />
        <Route path="/" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
