import {
    Box,
    Button,
    Field,
    Input,
    Textarea,
} from '@chakra-ui/react';
import { toaster, Toaster } from '../components/ui/toaster';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../api/api';

const EditNote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState({ title: '', content: '' });

    useEffect(() => {
        axios.get(`/notes/${id}`)
            .then(res => setNote(res.data))
            .catch(err => {
                toaster.create({
                    title: 'Error fetching note.',
                    description: err.message,
                    type: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/notes/${id}`, note);
            toaster.create({
                title: 'Note updated.',
                type: 'success',
                duration: 3000,
                isClosable: true,
            });
            navigate('/');
        } catch (err) {
            toaster.create({
                title: 'Update failed.',
                description: err.response?.data?.message || err.message,
                type: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Toaster />

            <Box maxW="600px" mx="auto" mt={10}>
                <Field.Root mb={4}>
                    <Field.Label>Title</Field.Label>
                    <Input
                        name="title"
                        value={note.title}
                        onChange={handleChange}
                        placeholder="Enter note title"
                    />
                </Field.Root>

                <Field.Root mb={4}>
                    <Field.Label>Content</Field.Label>
                    <Textarea
                        name="content"
                        value={note.content}
                        onChange={handleChange}
                        placeholder="Write your note here..."
                        rows={6}
                    />
                </Field.Root>

                <Button colorScheme="blue" onClick={handleUpdate}>
                    Update Note
                </Button>
            </Box>
        </>
    );
};

export default EditNote;
