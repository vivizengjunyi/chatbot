import React from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { deleteProfileAction } from "../../../../store/actions";
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

export default function ProfileDeleteForm(props) {
    const { currentUser, profile, open, handleClose } = props;
    const dispatch = useDispatch();

    const deleteProfile = () => {
        dispatch(deleteProfileAction(currentUser, profile.id));
        handleClose();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-profile-delete"
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Are you sure you want to delete this profile ({profile.name})?
                </Typography>
                <Button onClick={handleClose}>Cancel</Button>
                <Button color="error" variant="contained" onClick={deleteProfile}>Confirm</Button>
            </Box>
        </Modal>
    )
}

ProfileDeleteForm.propTypes = {
    currentUser: PropTypes.object,
    profile: PropTypes.object,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
};
