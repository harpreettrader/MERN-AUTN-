import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button, Heading } from "@chakra-ui/react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Now you have the values directly from the state
        console.log("Email:", formData.email);
        console.log("Password:", formData.password);

        // You can perform any further processing here
        // such as sending the form data to a server
        // or updating the UI based on the form data

        // Reset form data
        setFormData({
            email: "",
            password: "",
        });
    };

    return (
        <Box p="4" maxW="md" mx="auto">
            <Heading as="h2" size="lg" mb="4">
                Login
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl id="email" mb="4">
                    <FormLabel>Email address</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl id="password" mb="4">
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </FormControl>
                <Button type="submit" colorScheme="blue">
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;
