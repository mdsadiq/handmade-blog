import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LinkBar } from "../../components/LinkBar";
import Modal from "../../components/Modal";
import Topbar from "../../components/Topbar";
import { DeleteIcon } from "../../icons";

// const Posts = ({ data }: {data:any}) => {
const Posts = () => {
  let { userid } = useParams<string>();
  const [isModalOpen, setModalOpen] = useState(false);
  const { loading, error, data } = useQuery(GET_ALL_POSTS_OF_USER, {
    variables: {
      userid,
    },
  });

  const toggleModalStatus = () => {
    setModalOpen(!isModalOpen);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <div>
        <Topbar username={data.user.name} openModal={toggleModalStatus} />
      </div>
      {data.user.posts.data.map((p: { id: string; title: string }) => {
        return (
          <LinkBar key={p.id}>
            <img src="/assets/delete.png" style={{width: 24, height: 24, marginRight: 24,marginLeft: 12 }}/>
            <Link
              to={`/${userid}/post/${p.id}`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              {p.title}
            </Link>
          </LinkBar>
        );
      })}
      {isModalOpen && (
        <Modal
          title={"Add Post"}
          ok={() => console.log("saved")}
          cancel={toggleModalStatus}
          onClose={toggleModalStatus}
        />
      )}
    </div>
  );
};

export default Posts;

const GET_ALL_POSTS_OF_USER = gql`
  query User($userid: ID!) {
    user(id: $userid) {
      name
      posts {
        data {
          id
          title
        }
      }
    }
  }
`;
