import { Flex, Heading, Button } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <Flex justify="space-between" align="center">
            <Heading>Notes App</Heading>
            <Button colorScheme="red" onClick={() => { logout(); navigate("/login"); }}>
                Logout
            </Button>
        </Flex>
    );
}
