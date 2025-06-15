import { VStack, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

export default function Dashboard() {
    return (
        <Box p={4}>
            <Navbar />
            <VStack spacing={4} mt={4}>
                <NoteForm />
                <NoteList />
            </VStack>
        </Box>
    );
}
