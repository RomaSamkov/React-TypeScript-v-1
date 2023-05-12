import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  const click = () => {
    navigate("/users");
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <button onClick={click}>back</button>
      <h1>Name: {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city}
        {user?.address.street}
        {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
