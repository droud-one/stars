import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const StarForm = (props: { submitHandler: Function } & any) => {
    const defaultValues = { name: '', situation: '', task: '', action: '', result: '' };
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState({ ...defaultValues });
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const handleSave = () => {
        props.submitHandler(data);
        setOpen(false);
    }
    const handleInput = (field: 'name' | 'situation' | 'task' | 'action' | 'result', value: string) => {
        data[field] = value;
        setData(data);
    }

    return (<>
        <Button variant="outlined" onClick={handleOpen}>Add a STAR</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New STAR</DialogTitle>
            <DialogContent>
                <DialogContentText></DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleInput('name', e.target.value)}
                />
                <TextField
                    multiline
                    rows={4}
                    margin="dense"
                    id="situation"
                    label="Situation"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleInput('situation', e.target.value)}
                />
                <TextField
                    multiline
                    rows={4}
                    margin="dense"
                    id="task"
                    label="Task"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleInput('task', e.target.value)}
                />
                <TextField
                    multiline
                    rows={4}
                    margin="dense"
                    id="action"
                    label="Action"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleInput('action', e.target.value)}
                />
                <TextField
                    multiline
                    rows={4}
                    margin="dense"
                    id="result"
                    label="Result"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleInput('result', e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="error">Cancel</Button>
                <Button onClick={handleSave} color="primary" sx={{ mr: 1 }}>Save</Button>
            </DialogActions>
        </Dialog>
    </>)
};

export default StarForm;