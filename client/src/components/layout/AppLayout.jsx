/* eslint-disable react/display-name */
import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";


const AppLayout = () => (WrappedComponent) => {
  // hingh order component returns wrapped component which in turn returns the function
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh-4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}
            bgcolor="primary.main"
          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{ display: { xs: "none", sm: "block" } }}
          >Third</Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
