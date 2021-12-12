
import './App.css';
import { Routes, Route } from "react-router-dom";
import Users from './pages/users';
import Posts from './pages/posts';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/:userid/posts" element={<Posts />} />
        {/* to delete posts */}
        <Route path="/posts" element={<Posts />} />
        <Route path="/:userid/post/:postid" element={<Posts />} />
        <Route path="/" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
