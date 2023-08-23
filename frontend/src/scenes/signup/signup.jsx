import React from "react";
import { Grid, Avatar } from "@mui/material";
import { TextField, Typography, Button, Box } from "@mui/material";

const SignUp = () => {
  return (
    <Grid m="30px 30px 30px 30px">
      <Grid margin="10px">
        <Avatar></Avatar>
        <h1>Sign Up</h1>
        <Typography variant="caption">Create Account</Typography>
      </Grid>
      <form>
        <Grid>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label=" Name"
            name="Name"
            sx={{ gridColumn: "span 4", margin: "10px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email  "
            name="email"
            sx={{ gridColumn: "span 4", margin: "10px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Contact Number"
            name="contact"
            sx={{ gridColumn: "span 4", margin: "10px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="password"
            label="Password"
            name="password"
            sx={{ gridColumn: "span 4", margin: "10px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            sx={{ gridColumn: "span 4", margin: "10px" }}
          />
          <Box display="flex" justifyContent="center" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Sign Up
            </Button>
          </Box>
        </Grid>
      </form>
    </Grid>
  );
};
export default SignUp;
