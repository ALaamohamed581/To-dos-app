import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useEffect, useState } from "react";
import TodoComponent from "./TodoComponent";
import TodoItem from "./todoItem";
import EditTodo from "./edittodo";

const TodoList = () => {
  const [edit, setEdit] = useState(false);

  // udefind a ToItem typeconst

  type TodoItem = {
    id: number;
    todo?: string;
    completed?: boolean;
    userId?: number;
  };

  const [todosList, setTodoList] = useState([] as TodoItem[]);
  const [currentItem, setCurrentItem] = useState([] as TodoItem[]);
  //function that handels new todos
  useEffect(() => {
    //use a movk api to get all todos
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodoList(
          data.todos.map((todo: TodoItem) => {
            //resting all todos compelteion state to be false
            return { ...todo, completed: false };
          })
        );
      });
  }, []);

  function handelDelete(id: string) {
    setTodoList(todosList.filter((el) => el.id != +id));
  }
  function AddTodod(todo: TodoItem) {
    setTodoList((current) => {
      return [...current, todo];
    });
  }
  function editTodo(item) {
    setCurrentItem(item);
    setEdit(true);
  }

  function handleUpdate(id: number, stateus: boolean) {
    setTodoList((current: TodoItem[]) => {
      return current.map((todo: TodoItem) => {
        if (todo.id === id) {
          return { ...todo, completed: stateus };
        }
        return todo;
      });
    });
  }
  return (
    <>
      {" "}
      <div className="container flex flex-1 max-w-screen-xl flex-col shadow-2xl my-15 rounded-2xl bg-slate-200 h-screen">
        <div className="text-3xl h-48 max-w-7xl mt-7  text-center bg-gradient-to-r from-purple-700 to-blue-950 rounded-2xl ">
          <h1 className=" text-white  text-center p-5 mt-12"> TODO List</h1>
        </div>
        {!edit ? (
          <TodoComponent AddTodo={AddTodod} />
        ) : (
          <EditTodo
            item={currentItem}
            todosList={todosList}
            setTodoList={setTodoList}
          />
        )}
        <div className="flex flex-col gap-6 align-center justify-center align-center  h-69 w-3/4 mx-auto max-w-3/4  bg-slate-100   h-36 -translate-y-1/3 rounded-2xl  mt-5">
          <Table className="h-69">
            <TableCaption>TodoList</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]"> Todo</TableHead>
                <TableHead>Status </TableHead>
                <TableHead> Remove</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {todosList.map((el) => {
                return (
                  <TodoItem
                    key={crypto.randomUUID()}
                    handelDelete={handelDelete}
                    editTodo={editTodo}
                    childern={el}
                    handleUpdate={handleUpdate}
                  />
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TodoList;
