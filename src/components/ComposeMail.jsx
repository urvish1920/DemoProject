import React from "react";
import {
  Box,
  Button,
  Dialog,
  InputBase,
  styled,
  TextField,
} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";

const dialogstyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};
const Headers = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  background: "#f2f6fc",
  "& > p": {
    fontSize: 14,
    fontWeight: 500,
    padding: "0px 15px",
  },
  "& > svg": {
    padding: "12px 15px",
  },
});

const ReceipientsWrapperr = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 14,
    borderBottom: "1px solid #F5F5F5",
    marginTop: 10,
  },
});

const Footer = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  alignItems: "center",
});

const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  borderRadius: 20,
  fontWeight: 500,
  textTransform: "none",
  width: 100,
});

const ComposeMail = ({ openDialog, setOpenDialog }) => {

  const config = {
    Host: 'smtp.elasticemail.com',
    Username: 'urvishpatel@yopmail.com',
    Password: '1DD0766B9DC893D9A677B0209E42E0AE02F6',
    Port: 2525
  }

  const closeComponentMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  const sendMail = (e) => {
    e.preventDefault();

    if (window.Email) { //email is attach with window so that why we do first we check window.email is there or not 
      window.Email.send({
        ...config,
        To: 'urvishpatel192011@gmail.com',
        From: 'urvishpatel192011@gmail.com',
        Subject: "This is the subject",
        Body: "And this is the body"
      }).then(
        message => alert(message)
      );
      setOpenDialog(false);
    }
  };
  return (
    <div>
      <Dialog open={openDialog} PaperProps={{ sx: dialogstyle }}>
        <Headers>
          <p>New Message</p>
          <Close
            fontSize="small"
            onClick={(e) => {
              closeComponentMail(e);
            }}
          />
        </Headers>
        <ReceipientsWrapperr>
          <InputBase placeholder="Receipients" />
          <InputBase placeholder="Subject" />
        </ReceipientsWrapperr>
        <TextField
          multiline
          rows={20}
          sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        />
        <Footer>
          <SendButton
            onClick={(e) => {
              sendMail(e);
            }}
          >
            Send
          </SendButton>
          <DeleteOutline onClick={() => setOpenDialog(false)} />
        </Footer>
      </Dialog>
    </div>
  );
};

export default ComposeMail;
