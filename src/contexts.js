import { createContext } from "react";

const UserContext = createContext();
const PostManagerContext = createContext({ filter: { query: "", minDate: "", maxDate: "" }, posts: [] });

export { UserContext, PostManagerContext };