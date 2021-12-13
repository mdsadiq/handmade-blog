import { useQuery, gql } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

// const Posts = ({ data }: {data:any}) => {
  const Posts = (props: any) => {
    let navigate = useNavigate()
    let { userid } = useParams<string>();
    console.log(props, userid)
  const { loading, error, data } = useQuery(GET_ALL_POSTS_OF_USER, { variables: {
  userid
  }});
  console.log('posts', loading, error, data)

  const getDetails = (postid : string) =>{
    navigate(`/${userid}/post/${postid}`)
  }

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
              <div onClick={() => getDetails(p.id)}>
                {p.title}
              </div>
            </div>
          )
        })}
      </div>
    );
  }
  
  export default Posts;
  // query User($ID: String!) {
  //   user(id: $userid) {
    // query {
    //   user(id: $userid) {
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