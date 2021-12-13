import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

// const Posts = ({ data }: {data:any}) => {
  const PostDetails = (props: any) => {
 
    let { userid, postid } = useParams<string>();
    console.log(props, userid)
  const { loading, error, data } = useQuery(GET_POST_BY_ID, { variables: {
  userid, postid
  }});
  console.log('posts', loading, error, data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    return (
      <div>
        <h3>
          {data.user.name}
        </h3>
        {data.user.posts.data.map((p: {id: string, title: string }) => {
          return (
            <div key={p.id} style={{ margin: 4, padding: 4, textAlign: 'left' }}>
              {p.title}
            </div>
          )
        })}
      </div>
    );
  }
  
  export default PostDetails;
  // query User($ID: String!) {
  //   user(id: $userid) {
    // query {
    //   user(id: $userid) {
const GET_POST_BY_ID = gql`
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
}`

//   const GET_ALL_POSTS_OF_USER = gql`
//   query (
//     $options: PageQueryOptions
//   ) {
//     posts(options: $options) {
//       data {
//         id
//         title
//       }
//       meta {
//         totalCount
//       }
//     }
//   }
// `;