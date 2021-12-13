import { Route, Routes } from "react-router-dom";
import PostDetails from "../../pages/postDetails";
import Posts from "../../pages/posts";

const PostLayout = () => {
  return (
    <div style={{ margin: '0px 10px', padding: 10 }}>
      {/* <div>Name</div> */}
      <div>
        <Routes>
          <Route path="posts" element={<Posts />} />
          <Route path="post/:postid" element={<PostDetails />} />
        </Routes>
      </div>
    </div>
  );
};
export default PostLayout;
