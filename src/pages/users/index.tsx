import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
type TUsers = {
  id: string
  name: string
  email: string
  address: any
  phone: string
}

function Users() {
  // const defaultData = [{name: 'sadiq', email: 'asd@gamilc.om', phone: '09999123123', description: 'sample descriptino' },
  // {name: 'New one', email: 'newone@gamilc.om', phone: '088888123123', description: 'new one - sample descriptino' }]
  // const [data] = useState(defaultData)
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  console.log("users", loading, error, data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {data.users.data.map((user: TUsers) => {
        return (
          <div key={user.id} style={{ margin: 4, padding: 4, textAlign: "left" }}>
            {user.name}
            {user.email}
            {/* {user.address} */}
            {user.phone}

          </div>
        );
      })}
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
      }
      meta {
        totalCount
      }
    }
  }
`;
