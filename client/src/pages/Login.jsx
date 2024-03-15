import { Container,Paper,Typography,TextField,Button} from '@mui/material'
import React, { useState } from 'react'

function Login() {

    const [isLogin,setIsLogin] = useState(true)
    const toggleLogin = () => setIsLogin(!isLogin)



  return (
   <Container component={"main"} maxWidth="xs" sx={{height:"100vh", display:"flex",alignItems:"center",justifyContent:"center"}} >
    <Paper elevation={3} sx={{
        padding:4,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    }} >

        {isLogin ? (<>
        <Typography variant="h5" >Login

        </Typography>
        <form style={{width:"100%", marginTop:"1rem"}}>
            <TextField
            required fullWidth
            label="Username"
            margin='normal'
            variant='outlined'
            />
            <TextField
            required fullWidth
            label="Password"
            type="password"
            margin='normal'
            variant='outlined'
            />
            <Button variant="contained" color="primary" type="submit" > Login</Button>

            <Typography textAlign={"center"} margin={"1rem"}  >OR</Typography>

            <Button
            fullWidth
            variant='text'
            onClick={()=>toggleLogin}
            
            >Sign Up Instead</Button>

        </form>
        </>) :( <span>register</span> )}



    </Paper>

   </Container>
  )
}

export default Login