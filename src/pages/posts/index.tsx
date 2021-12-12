import { useQuery, gql } from "@apollo/client";

// const Posts = ({ data }: {data:any}) => {
  const Posts = (props: any) => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);
  console.log('posts', loading, error, data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    return (
      <div>
        {data.posts.data.map((p: {id: string, title: string }) => {
          return (
            <div key={p.id} style={{ margin: 4, padding: 4, textAlign: 'left' }}>
              {p.title}
            </div>
          )
        })}
      </div>
    );
  }
  
  export default Posts;



  const GET_ALL_POSTS = gql`
  query (
    $options: PageQueryOptions
  ) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;