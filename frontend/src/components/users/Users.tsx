import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import {
  fetchUsersAsync,
  Statuses,
  selectStates,
  selectUsers,
} from "../../features/users/userSlice";
import User from "./User";

const API_URL = "http://localhost:3000";

const Users = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useDispatch();
  const status = useAppSelector(selectStates);
  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, []);

  return (
    <div className="">
      <h1>Users List</h1>
      {users.length > 0 ? (
        users.map((user) => <User user={user} />)
      ) : (
        <>{status}</>
      )}
    </div>
  );
};

export default Users;
