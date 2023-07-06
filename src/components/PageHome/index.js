import React, { useState, useEffect } from "react";
import FormSelectModal from ".././FormSelectModal";
import "./style.css";
import { getAccessToken, getLoginUserId } from "../../localstorage";
import { useSelector } from "react-redux";
import { Grid, Container, ButtonBase, Paper, Typography } from '@mui/material';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdAddCircleOutline } from 'react-icons/md';
import ProfileEditForm from "./ProfileForms/ProfileEditForm";
import ProfileCreateForm from "./ProfileForms/ProfileCreateForm";
import ProfileDeleteForm from "./ProfileForms/ProfileDeleteForm";

export default function PageHome() {
  const currentUser = useSelector(state => state.currentUser);
  const [selectedProfileID, setSelectedProfileID] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  // Redirecting user to signup page when not logged in
  useEffect(() => {
    const loginUserId = getLoginUserId();
    const accessToken = getAccessToken();
    if (!loginUserId && !accessToken) {
      window.location.href = "/signin";
    }
  }, [currentUser]);

  const handleCloseProfileModal = () => {
    setSelectedProfileID(null);
    setOpenEditModal(false);
    setOpenDeleteModal(false);
    setOpenCreateModal(false);
  };

  return (
    <Container>
      <>
        <button className="btn-primary btn-temperary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Chatbot conversation page
        </button>
        <FormSelectModal />
      </>
      <hr />
      <br />
      <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
      <Grid item xs={12} alignItems='center' alignContent={'center'}>
        <Typography variant="h5">
          Profiles:
        </Typography>
      </Grid>
      {currentUser?.profiles.map((profile) => {
        return (
          <Grid item key={profile.id} xs={6} md={3}>
            <Paper elevation={3} sx={{backgroundColor: '#fafafa', height: '100%'}}>
              <Grid item xs container direction="column" padding={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {profile.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {currentUser.locale_code}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container padding={2} columnSpacing={3}>
                <Grid item>
                  <AiFillEdit cursor={'pointer'} onClick={() => { setSelectedProfileID(profile.id); setOpenEditModal(true); }}/>
                </Grid>
                <Grid item>
                  <AiFillDelete cursor={'pointer'} onClick={() => { setSelectedProfileID(profile.id); setOpenDeleteModal(true); }}/>
                </Grid>
                <Grid item>
                  {
                    profile.id === currentUser.active_profile_id ? <Grid item paddingLeft={1} paddingRight={1} bgcolor={"#1edc0f"} sx={{ display: 'inline-flex' }}>
                    active
                  </Grid> : null
                  }
                </Grid>
              </Grid>
            </Paper>
            <ProfileEditForm currentUser={currentUser} profile={profile} open={openEditModal && selectedProfileID === profile.id} handleClose={handleCloseProfileModal} />
            <ProfileDeleteForm currentUser={currentUser} profile={profile} open={openDeleteModal && selectedProfileID === profile.id} handleClose={handleCloseProfileModal} />
          </Grid>
        );
      })}
        <Grid item xs={6} md={3} lineHeight='10'>
          <ButtonBase sx={{height: '100%', width: '100%', cursor: 'pointer'}} onClick={() => { setOpenCreateModal(true); }}>
            <Paper elevation={0} sx={{backgroundColor: '#f2f2f2', height: '100%', width: '100%'}}>
              <Grid item xs padding={2} height={'100%'} display='flex' justifyContent={'center'} alignItems='center'>
                <MdAddCircleOutline fontSize={50}/>
              </Grid>
            </Paper>
          </ButtonBase>
        </Grid>
      </Grid>
      <ProfileCreateForm currentUser={currentUser} open={openCreateModal} handleClose={handleCloseProfileModal} />
    </Container>
  );
}