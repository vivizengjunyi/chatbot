import React from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { editProfileAction } from "../../../../store/actions";
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

export default function ProfileEditForm(props) {
    const { currentUser, profile, open, handleClose } = props;
    const dispatch = useDispatch();

    const editProfile = (event) => {
        event.preventDefault();
        const { name } = event.target.elements;

        let data = {
            name: name.value
        };

        dispatch(editProfileAction(currentUser, profile.id, data));
        handleClose();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-profile-edit"
        >
            <Box sx={style}>
                <form onSubmit={editProfile}>
                    <Typography variant="h6" component="h2">
                        Enter a new name for: {profile.name}?
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

ProfileEditForm.propTypes = {
    currentUser: PropTypes.object,
    profile: PropTypes.object,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
};
