import { Dialog,DialogTitle,Stack,TextField,InputAdornment,List, ListItem, ListItemText} from '@mui/material'
import {Search as SearchIcon} from "@mui/icons-material"
import React, { useState } from 'react'
import {useInputValidation} from "6pp"
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../../constants/sampleData'
const SearchDialog = () => {

  const search = useInputValidation("")
  let isLoadiingSendFriendRequest = false;
  const addFriendHandler = (id) =>{
    console.log(id)

  } ;
const [users,setUsers] = useState(sampleUsers)

  return (
    <Dialog open >
<Stack p={"2rem"} direction={"column"} width={"25rem"}  >
  <DialogTitle textAlign={"center"}  > Find People</DialogTitle>
  <TextField
    id=""
    label=""
    value={search.value}
    onChange={search.changeHandler}
    variant='outlined'
    size='small'
    inputProps={{
    startAdornment:(
      <InputAdornment position="start">
        <SearchIcon/>
      </InputAdornment>
  )
    }}
  />

  <List>
    {users.map((user)=>(
     <UserItem user={user} key={user._id} handler={addFriendHandler}
     handlerIsLoading={isLoadiingSendFriendRequest} />
    ))}

  </List>

</Stack>
    </Dialog>
  )
}

export default SearchDialog