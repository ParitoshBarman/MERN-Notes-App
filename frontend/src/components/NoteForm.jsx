import { useState } from "react";
import { Box, Input, Button, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function NoteForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { token } = useAuth();

    const handleCreate = async () => {
        await axios.post("https://mern-notes-app-1x12.onrender.com/api/notes", { title, content }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        setTitle("");
        setContent("");
        window.location.reload(); // temporary
    };

    return (
        <Box w="100%">
            <Input placeholder="Title" mb={2} value={title} onChange={(e) => setTitle(e.target.value)} />
            <Textarea placeholder="Content" mb={2} value={content} onChange={(e) => setContent(e.target.value)} />
            <Button colorScheme="blue" onClick={handleCreate}>Add Note</Button>
        </Box>
    );
}
