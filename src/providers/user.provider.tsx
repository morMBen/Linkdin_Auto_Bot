import { useReducer, useEffect } from "react";
import { UserContext } from "../context/user.context";
import { User } from "../types/types";

interface UserReducerAction {
  name: string;
  payload: string;
}

const initialState: User = {
  _id: "",
  name: "",
  password: "",
  logged: "",
};

const reducer = (state: User = initialState, action: UserReducerAction) => {
  const { name, payload } = action;
  switch (name) {
    case "name":
      return {
        ...state,
        name: payload,
      };
    case "password":
      return {
        ...state,
        password: payload,
      };
    case "logged":
      return {
        ...state,
        logged: payload,
      };
    default:
      return state;
  }
};

const UserProvider: React.FC = ({ children }) => {
  const [userInputs, userDispatch] = useReducer(reducer, initialState, () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : initialState;
  });

  useEffect(() => {
    const userInSessionStorage = {
      name: userInputs.name,
      logged: userInputs.logged,
    };
    localStorage.setItem("user", JSON.stringify(userInSessionStorage));
  }, [userInputs]);

  return (
    <UserContext.Provider value={{ userInputs, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
