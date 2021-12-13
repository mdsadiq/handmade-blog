
import { useQuery, gql } from "@apollo/client";
import { Card, CardList, CardTitle } from "../../components/Card";
import { Button } from "../../components/Button";
import { Link, useNavigate } from 'react-router-dom';

type TUsers = {
  id: string;
  name: string;
  email: string;
  address: any;
  phone: string;
  website: string;
};

function Users() {

  let navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <CardList>
        {data.users.data.map((user: TUsers) => {
          return (
            <Card key={user.id}>
              <CardTitle>{user.name}</CardTitle>
              <div style={{ marginTop: 8 }}>
                {user.email}
                <div>{user.phone}</div>
              </div>
              <div>{user.website}</div>
              <div style={{ marginTop: 8 }}>
                what to display here
              </div>
              <Link to={`/${user.id}/posts`} style={{ textDecoration: 'none'}}>
               <Button> Details </Button>
              </Link>

              {/* <Button onClick={() => clickHandler(user.id)}> Details </Button> */}

            </Card>
          );
        })}
      </CardList>
    </div>
  );
}

export default Users;

const GET_ALL_USERS = gql`
  query ($options: PageQueryOptions) {
    users(options: $options) {
      data {
        id
        name
        email
        phone
        website
      }
      meta {
        totalCount
      }
    }
  }
`;
