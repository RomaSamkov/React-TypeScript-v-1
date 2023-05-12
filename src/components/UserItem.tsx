import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} key={user.id}>
      {user.id}. with name {user.name} lived in the city {user.address.city} on
      the street {user.address.street}
    </div>
  );
};

export default UserItem;
