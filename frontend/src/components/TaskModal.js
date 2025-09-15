import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const TaskModal = ({ open, handleClose, handleSave, task }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description || '');
            setPriority(task.priority || 'Medium');
            setDueDate(task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '');
        } else {
            setTitle('');
            setDescription('');
            setPriority('Medium');
            setDueDate('');
        }
    }, [task, open]);

    const onSave = () => {
        const taskData = { title, description, priority, dueDate: dueDate || null };
        if (task) {
            taskData._id = task._id;
        }
        handleSave(taskData);
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    {task ? 'Edit Task' : 'Add New Task'}
                </Typography>
                <TextField margin="normal" label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} required />
                <TextField margin="normal" label="Description" fullWidth multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Priority</InputLabel>
                    <Select value={priority} label="Priority" onChange={(e) => setPriority(e.target.value)}>
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                    </Select>
                </FormControl>
                <TextField margin="normal" label="Due Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={onSave} variant="contained" sx={{ ml: 1 }} disabled={!title}>Save</Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default TaskModal;
