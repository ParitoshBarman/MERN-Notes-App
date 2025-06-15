import { useEffect, useState } from "react";
import { Box, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function NoteList() {
    const [notes, setNotes] = useState([]);
    const { token } = useAuth();
    const navigate = useNavigate()

    const fetchNotes = async () => {
        const res = await axios.get("https://mern-notes-app-1x12.onrender.com/api/notes", {
            headers: { Authorization: `Bearer ${token}` },
        });
        setNotes(res.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`https://mern-notes-app-1x12.onrender.com/api/notes/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        fetchNotes();
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <VStack align="start" spacing={4}>
            {notes.map((note) => (
                <Box key={note._id} p={4} shadow="md" borderWidth="1px" w="100%">
                    <Heading size="md">{note.title}</Heading>
                    <Text>{note.content}</Text>
                    <HStack justifyContent={"space-between"} >
                        <Button colorPalette="red" size="sm" mt={2} onClick={() => handleDelete(note._id)}>
                            Delete
                        </Button>
                        <Button onClick={() => navigate(`/note/${note._id}/edit`)} colorPalette={'blue'}>
                            Edit
                        </Button>
                    </HStack>

                </Box>
            ))}
        </VStack>
    );
}
