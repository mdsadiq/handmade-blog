import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  CommentBody,
  CommentBox,
  CommentsList,
  FlexBar,
} from "../../components/PostLayout/styles";
import Topbar from "../../components/Topbar";

const PostDetails = () => {
  let { postid } = useParams<string>();
  const [showComments, setShowComments] = useState(false);
  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: {
      postid,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { id, title, body, user, comments } = data.post;
  return (
    <div>
      <Topbar username={user.name} openModal={() => (console.log('hello'))}/>
      <div> {title} </div>
      <div> {body} </div>
      <FlexBar>
        <span
          onClick={() => setShowComments(!showComments)}
          style={{ cursor: "pointer" }}
        >
          {showComments ? "hide comments" : "show comments"}
        </span>
        <span>add comments </span>
      </FlexBar>
      <CommentsList>
        {showComments && comments.data.map(
          (c: { name: string; email: string; body: string }) => {
            return (
              <CommentBox>
                <FlexBar>
                  <div>{c.name}</div>
                  <div>{c.email}</div>
                </FlexBar>
                <CommentBody>{c.body}</CommentBody>
              </CommentBox>
            );
          }
        )}
      </CommentsList>
    </div>
  );
};

export default PostDetails;

const GET_POST_BY_ID = gql`
  query Post($postid: ID!) {
    post(id: $postid) {
      id
      title
      body
      user {
        name
        username
      }
      comments {
        data {
          name
          email
          body
        }
      }
    }
  }
`;