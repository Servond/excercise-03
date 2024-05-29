import { useState } from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { ITodos } from "../static/todos.interface";

function TodoForm({
  todos,
  setTodos,
  count,
}: {
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
  count: number;
}) {
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (input) {
      const checkDups = todos.filter(
        (i) => i.task.toLowerCase() === input.toLowerCase()
      );
      if (checkDups.length > 0) {
        alert("Task sudah ada");
      } else {
        const newArr: ITodos[] = [...todos, { task: input, isChecked: false }];
        setTodos(newArr);
      }
    }
  };

  return (
    <Box>
      <Text
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Done: {count}
      </Text>
      <Text
        mb="0.25rem"
        sx={{
          fontSize: "14px",
        }}
      >
        Add todo
      </Text>
      <Input size="md" mb="1rem" onChange={(e) => setInput(e.target.value)} />
      <Button
        sx={{
          backgroundColor: "#90cdf4",
        }}
        onClick={() => addTask()}
      >
        ADD TASK
      </Button>
    </Box>
  );
}

export default TodoForm;
