import { Typography, Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../utils/constant";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import Button from "@mui/material/Button";


export const CreateUser = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  

  const [name, setName] = useState(" ");
  const [id, setID] = useState(" ");
  const [age, setAge] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [updateUi, setUpdateUI] = useState(false);
  const [tasks, setTasks] = useState([]);

  // // useEffect(() => {
  // //   axios.get(`${baseURL}/get`).then((res) => {
  // //     console.log(res.data);
  // //     setTasks(res.data)
  // //   });
  // // }, [updateUi]);

  const handleAdd = () => {
    const data1 = {
      Name: name,
      Age: age,
      Password:password,
      Email: email,
      Address: address,
      Phone: phone,
      id: id,
    };
    console.log("data1", data1);
    alert("User Created successfully")

    axios.post(`${baseURL}/save`, data1).then((res) => {
      console.log(res.data);
      setName(" ");
      setID(" ");
      setAge(" ");
      setPhone(" ");
      setAddress(" ");
      setEmail(" ");
      setPassword(" ");
    });
  };
  
  
  return (
    <Box
      classname="container"
     
    >
      <Box classname="mainBox" sx={{margin:"40px 300px 40px 300px"}}>
        <Typography variant="h2">Manage User Page</Typography>
        <Box classname="textfiledBox">
          <Box marginTop="20px">
            <TextField
              fullWidth
              name="name"
              type="text"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box marginTop="20px">
            <TextField
              fullWidth
              name="id"            
              type="id"
              label="id"
              value={id}
              onChange={(e) => setID(e.target.value)}
            />
          </Box>
          <Box marginTop="20px">
            <TextField
              fullWidth
              name="phone"            
              value={phone}
              type="text"
              label="phone"
              onChange={(e) => setPhone(e.target.value)}
            ></TextField>
          </Box>
          <Box marginTop="20px">
            <TextField
              fullWidth
              name="age"            
              value={age}
              type="text"
              label="Age"
              onChange={(e) => setAge(e.target.value)}
            ></TextField>
          </Box>
          <Box marginTop="20px">
            <TextField
              fullWidth
              value={email}
              name="email"            
              type="text"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Box>
          <Box marginTop="20px">
            <TextField
              fullWidth
              value={password}
              name="password"
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Box>
          
          <Box marginTop="20px">
            <TextField
              fullWidth
              value={address}
              type="text"
              label="Address"
              onChange={(e) => setAddress(e.target.value)}
            ></TextField>
          </Box>

          <Box marginTop="10px">
            <Button
              type="submit"
              id="add"
              onClick={handleAdd}
              sx={{ backgroundColor: "#009966", color: "white" }}
            >
              Add User
            </Button>

            
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
