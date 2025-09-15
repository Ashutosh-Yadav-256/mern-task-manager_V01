import React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import EditIcon from '@mui/icons-material/Edit';

const getPriorityColor = (priority) => {
    switch (priority) {
        case 'High': return 'error.main';
        case 'Medium': return 'warning.main';
        case 'Low': return 'success.main';
        default: return 'text.secondary';
    }
};

const TaskCard = ({ task, index, onEdit }) => {
    return (
        <Draggable draggableId={task._id} index={index}>
            {(provided, snapshot) => (
                <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    sx={{
                        mb: 2,
                        backgroundColor: snapshot.isDragging ? 'action.focus' : 'background.paper',
                        position: 'relative'
                    }}
                >
                    <IconButton size="small" onClick={() => onEdit(task)} sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                    <CardContent>
                        <Typography variant="h6" sx={{ pr: '30px' }}>{task.title}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            {task.description}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                            <Typography variant="caption">
                                Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}
                            </Typography>
                            <Box
                                component="span"
                                sx={{
                                    bgcolor: getPriorityColor(task.priority),
                                    color: 'white',
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold'
                                }}
                            >
                                {task.priority}
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            )}
        </Draggable>
    );
};

export default TaskCard;
