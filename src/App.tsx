import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card, { CardVariant } from "./components/Card";
// import UserList from "./components/UserList";

import EventsExample from "./components/EventsExample";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import { NavLink } from "react-router-dom";
import TodoItemPage from "./components/TodoItemPage";
import UserItemPage from "./components/UserItemPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div style={{ display: "grid" }}>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </div>
        <Routes>
          <Route path="/users" element={<UserPage />}></Route>
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path={"/todos"} element={<TodosPage />}></Route>
          <Route path="/todos/:id" element={<TodoItemPage />} />
          <Route path="event" element={<EventsExample />} />
          <Route
            path="card"
            element={
              <Card
                onClick={(num) => console.log("Click", num)}
                width="100px"
                height="100px"
                variant={CardVariant.primary}
              >
                <button>Click</button>
              </Card>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
    // <div>
    //   <EventsExample />
    // <Card
    //   onClick={(num) => console.log("Click", num)}
    //   width="100px"
    //   height="100px"
    //   variant={CardVariant.primary}
    // >
    //   <button>Click</button>
    // </Card>
    //   {/* <UserList users={users} /> */}
    // </div>
  );
}

export default App;
