import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const Column = ({ title, tasks, onEdit }) => {
    return (
        <Box sx={{ mx: 2, display: 'flex', flexDirection: 'column', width: 350, maxHeight: 'calc(100vh - 150px)' }}>
            <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.default' }}>
                <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Droppable droppableId={title}>
                    {(provided, snapshot) => (
                        <Box
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            sx={{
                                backgroundColor: snapshot.isDraggingOver ? 'action.hover' : 'transparent',
                                minHeight: 500,
                                p: 1,
                                overflowY: 'auto'
                            }}
                        >
                            {tasks.map((task, index) => (
                                <TaskCard key={task._id} task={task} index={index} onEdit={onEdit}/>
                            ))}
                            {provided.placeholder}
                        </Box>
                    )}
                </Droppable>
            </Paper>
        </Box>
    );
};

export default Column;
