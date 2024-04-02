import {
  Dialog,
  DialogTitle,Button,
  Stack,
  Typography, TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useInputValidation } from "6pp";
import UserItem from '../shared/UserItem'

import { sampleUsers } from "../../constants/sampleData";


const NewGroup = () => {

  const groupName = useInputValidation("")

  const [members,setMembers] = useState(sampleUsers)
  const [selectedMembers,setSelectedMembers] = useState([])

  const selectMemberHandler = (id) => {



    setSelectedMembers(prev=> prev.includes(id) ? prev.filter((currElement)=>currElement!==id) :  [...prev,id])
    console.log(selectedMembers)
  };
  const submitHandler = () => {};
  const closeHandler = () => {};

  return (
    <Dialog open onClose={closeHandler} >
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4" >New Group</DialogTitle>
        <TextField label="Group Name"
        value={groupName.value}
        onChange={groupName.changeHandler}
          
        />
        <Typography variant="body1" color="initial">Members</Typography>
        <Stack>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"} >
        <Button variant="text" color="error" size="large" >Cancel</Button>
        <Button variant="contained" size="large" onChange={submitHandler} >Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
