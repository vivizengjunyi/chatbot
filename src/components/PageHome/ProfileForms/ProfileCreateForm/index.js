import React from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { createProfileAction } from "../../../../store/actions";
import { useDispatch } from "react-redux";

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

export default function ProfileCreateForm(props) {
    const { currentUser, open, handleClose } = props;
    const dispatch = useDispatch();

    const createProfile = (event) => {
        event.preventDefault();
        const { name } = event.target.elements;

        let data = {
            name: name.value
        };

        dispatch(createProfileAction(currentUser, data));
        handleClose();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-profile-create"
        >
            <Box sx={style}>
                <form onSubmit={createProfile}>
                    <Typography variant="h6" component="h2">
                        Enter a name for your profile:
                    </Typography>
                    <br /> 
                    <TextField required id="name" name="name" label="Name" variant="outlined" />
                    <br />
                    <br />
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button color="success" variant="contained" type="submit">Save</Button>
                </form>
            </Box>
        </Modal>
    )
}

ProfileCreateForm.propTypes = {
    currentUser: PropTypes.object,
    profile: PropTypes.object,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
};
