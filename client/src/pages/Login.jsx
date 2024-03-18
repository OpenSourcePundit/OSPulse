import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/styledComponents";
import {useFileHandler, useInputValidation, useStrongPassword} from '6pp'
import { usernameValidator } from "../utils/validators";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    console.log(isLogin);
    setIsLogin(!isLogin);
  };

  const name = useInputValidation("")
  const bio = useInputValidation("")
  const username = useInputValidation("",usernameValidator)
  const password = useStrongPassword()

  const avatar = useFileHandler("single",10)

  const handleSignUp = (e) =>{
    e.preventDefault();
  }
  const handleLogin = (e) =>{
    e.preventDefault();
  }

  return (
   <div style={{backgroundImage:"linear-gradient(rgba(200,200,200,0.5),rgba(120,110,220,0.5))"}}>
     <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={()=>handleLogin}> 
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" variant="caption" >
                  {username.error}
                </Typography>
              )
              }
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>

              <Typography textAlign={"center"} margin={"1rem"}>
                OR
              </Typography>

              <Button fullWidth variant="text" onClick={() => toggleLogin()}>
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">SignUp</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={()=>handleSignUp}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                  src={avatar.preview}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": { bgcolor: "rgba(0,0,0,0.7)" },
                  }}

                  component="label"
                >
                  <>
                    <CameraAltIcon/>
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>
              {avatar.error && (
                <Typography color="error" variant="caption" m={"1rem auto"} width={"fit-content"} display={"block"} >
                  {avatar.error}
                </Typography>
              )
              }

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
               {name.error && (
                <Typography color="error" variant="caption" >
                  {name.error}
                </Typography>
              )
              }
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
               {bio.error && (
                <Typography color="error" variant="caption" >
                  {bio.error}
                </Typography>
              )
              }
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" variant="caption" >
                  {username.error}
                </Typography>
              )
              }

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
               {password.error && (
                <Typography color="error" variant="caption" >
                  {password.error}
                </Typography>
              )
              }
              <Button fullWidth variant="contained" color="primary" type="submit">
                SignUp
              </Button>

              <Typography textAlign={"center"} margin={"1rem"}>
                OR
              </Typography>

              <Button fullWidth variant="text" onClick={() => toggleLogin()}>
                Log In Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
   </div>
  );
}

export default Login;
