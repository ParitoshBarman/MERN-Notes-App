import { useState } from "react";
import { Box, Input, Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await axios.post("https://mern-notes-app-1x12.onrender.com/api/auth/login", {
            email,
            password,
        });
        login(res.data.token);
        navigate("/");
    };

    return (
        <Box maxW="400px" mx="auto" mt="100px">
            <Heading mb={4}>Login</Heading>
            <Input placeholder="Email" mb={2} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Password" type="password" mb={2} onChange={(e) => setPassword(e.target.value)} />
            <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
        </Box>
    );
}
