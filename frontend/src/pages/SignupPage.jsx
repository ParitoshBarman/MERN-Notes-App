import { useState } from "react";
import { Box, Input, Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        await axios.post("https://mern-notes-app-1x12.onrender.com/api/auth/signup", { name, email, password });
        navigate("/login");
    };

    return (
        <Box maxW="400px" mx="auto" mt="100px">
            <Heading mb={4}>Signup</Heading>
            <Input placeholder="Name" mb={2} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Email" mb={2} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Password" type="password" mb={2} onChange={(e) => setPassword(e.target.value)} />
            <Button colorScheme="green" onClick={handleSignup}>Signup</Button>
        </Box>
    );
}
