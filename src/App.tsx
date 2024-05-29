import { useState } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { ITodos } from "./static/todos.interface";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [count, setCount] = useState<number>(0);

  return (
    <Container p="2em">
      <Box
        mx="auto"
        px="auto"
        sx={{
          color: "white",
        }}
      >
        <Box>
          <Text
            mb="2rem"
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Chores ToDo List
          </Text>
        </Box>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          count={count}
          setCount={setCount}
        />
        <TodoForm todos={todos} setTodos={setTodos} count={count} />
      </Box>
    </Container>
  );
}

export default App;
