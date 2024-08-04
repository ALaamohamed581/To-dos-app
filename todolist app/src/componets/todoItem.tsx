import { TableCell, TableRow } from "./ui/table";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";

type TodoItem = {
  id: number;
  userId?: number;
  completed?: boolean;
  todo?: string;
};

type Props = {
  childern: TodoItem;
  handelDelete: any;
  handleUpdate: any;
  editTodo: any;
};
const Status = [
  { value: false, label: "Ongoing" },
  { value: true, label: "completed" },
];
const TodoItem = ({
  childern,
  handelDelete,
  handleUpdate,
  editTodo,
}: Props) => {
  function DeleteTodo(id: number) {
    handelDelete(id);
  }

  function handelStatus(id: number, e: FormEvent) {
    handleUpdate(id, JSON.parse((e.target as HTMLInputElement).value));
  }
  function handle(childern) {
    editTodo(childern);
  }
  console.log(childern);
  return (
    <>
      <TableRow>
        <TableCell
          className="text-white "
          style={{
            backgroundColor: childern.completed ? "#65a30d" : "#4338ca",
          }}
        >
          {childern.todo}
        </TableCell>
        <TableCell>
          <select onChange={(e) => handelStatus(childern.id, e)}>
            {Status.map((el) => {
              return (
                <option
                  className={"p-2 bg-slate-600 text-white"}
                  key={el.label}
                  value={JSON.stringify(el.value)}
                >
                  {el.label}
                </option>
              );
            })}
          </select>
        </TableCell>
        <TableCell>
          <Button
            className="bg-red-800  group "
            onClick={() => DeleteTodo(childern.id)}
          >
            <TrashIcon className=" stroke-white  w-5 h-5  group-hover:stroke-red-800 " />
          </Button>
          <Button onClick={() => handle(childern)}>Edit</Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TodoItem;
