import { useState } from "react";
import { Box, Heading, Text, Button, Input, Stack, Checkbox, IconButton } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

const Dashboard = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }]);
            setNewTodo("");
        }
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleToggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <Box p="4">
            <Heading as="h2" size="xl" mb="4">
                Dashboard
            </Heading>
            <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
                <Text fontSize="lg">Welcome to your dashboard!</Text>
                <Text mt="2">You can write your thought here.</Text>
            </Box>
            <Button colorScheme="blue" mb="4">Create New Item</Button>

            <Heading as="h3" size="lg" mb="2">Todo List</Heading>
            <Stack spacing={2}>
                {todos.map((todo) => (
                    <Box key={todo.id} display="flex" alignItems="center">
                        <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(todo.id)}>{todo.text}</Checkbox>
                        <IconButton
                            ml="2"
                            colorScheme="red"
                            aria-label="Delete todo"
                            icon={<DeleteIcon />}
                            onClick={() => handleDeleteTodo(todo.id)}
                        />
                    </Box>
                ))}
            </Stack>

            <Box mt="4">
                <Input
                    placeholder="Add new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button mt="2" leftIcon={<AddIcon />} onClick={handleAddTodo} colorScheme="blue">
                    Add Todo
                </Button>
            </Box>
        </Box>
    );
};

export default Dashboard;
