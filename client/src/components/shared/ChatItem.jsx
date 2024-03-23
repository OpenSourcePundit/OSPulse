/* eslint-disable react/prop-types */
import { memo } from "react";
import { Link } from "../styles/styledComponents";
import { Typography, Stack, Box } from "@mui/material";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link
      sx={{ padding: "0" }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
        <AvatarCard avatar={avatar}/>
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography variant="body1">
              {newMessageAlert?.count} New Messages{" "}
            </Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor:"green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
