import { useState } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
} from "@chakra-ui/react";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
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
        // You can handle form submission logic here
        console.log(formData);
        // Reset form data
        setFormData({
            username: "",
            email: "",
            password: "",
        });
    };

    return (
        <Box p="4" maxW="md" mx="auto">
            <Heading as="h2" size="lg" mb="4">
                Register
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl id="username" mb="4">
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </FormControl>
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
                    Register
                </Button>
            </form>
        </Box>
    );
};

export default Register;
