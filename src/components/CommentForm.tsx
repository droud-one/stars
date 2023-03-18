import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const CommentForm = (props: { submitHandler: Function } & any) => {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState('');
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const handleSave = () => {
        props.submitHandler(data);
        setOpen(false);
    }

    return (<>
        <Button variant="outlined" onClick={handleOpen}>Add a comment</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New comment</DialogTitle>
            <DialogContent>
                <DialogContentText></DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="comment"
                    label="Comment"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setData(e.target.value)}
                    multiline
                    rows={4}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="error">Cancel</Button>
                <Button onClick={handleSave} color="primary" sx={{ mr: 1 }}>Save</Button>
            </DialogActions>
        </Dialog>
    </>)
};

export default CommentForm;