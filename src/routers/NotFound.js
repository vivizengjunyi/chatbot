import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getAccessToken } from "../localstorage";

export default function NotFound() {

  const accessToken = getAccessToken();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "25%",
        textAlign: "center"
      }}
    >
      <Typography variant="h5" style={{ color: "rgb(16, 111, 128)" }}>
        Oops! This page is not found. <br />
        <Link to={accessToken ? "/" : "/signin"} className="btn btn-sm btn-signup">
          {accessToken ? "Vist Home Page" : "Go to Sign In"}
        </Link>
      </Typography>
    </Box>
  );
}