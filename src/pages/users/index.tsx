import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Card, CardList, CardTitle } from "../../components/Card";
import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom';

type TUsers = {
  id: string;
  name: string;
  email: string;
  address: any;
  phone: string;
  website: string;
};

function Users() {
  // const defaultData = [{name: 'sadiq', email: 'asd@gamilc.om', phone: '09999123123', description: 'sample descriptino' },
  // {name: 'New one', email: 'newone@gamilc.om', phone: '088888123123', description: 'new one - sample descriptino' }]
  // const [data] = useState(defaultData)
  let navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  console.log("users", loading, error, data);

  const clickHandler = (userid: string) => {
    console.log('clicked', userid)
    // history.push('/your-path')

    navigate(`/${userid}/posts`)
  }

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
              <Button onClick={() => clickHandler(user.id)}> Details </Button>
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
