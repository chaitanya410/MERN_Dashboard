import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
// import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useState } from "react";
import axios from "axios"
import { baseURL } from "../../utils/constant";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const UpdateForm = () => {
    


    const isNonMobile = useMediaQuery("(min-width:600px)");
    const location = useLocation();
    const { data } = location.state;
    const [Name, setName] = useState(data.Name);
    const [Email, setEmail] = useState(data.Email);
    const [Phone, setPhone] = useState(data.Phone);
    const [Address, setAddress] = useState(data.Address);
    const [access, setAccess] = useState(data.access);
   
    const navigate = useNavigate();

    


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = { Name, Email,  Phone,  Address, access };

        try {
            // const response = axios.put(`${baseURL}/update/:id${data._id}`, formData);
            const response = await axios.put(`${baseURL}/update/${data._id}`, formData);


            if (response.ok) {
                console.log('User data Updated');
            } else {
                console.error('Error Updating user data');
            }
        } catch (error) {
            console.error('Error Updating user data:', error.response);
        }
        alert("User Updated Successfully !")
        setName(" ")
        setEmail(" ")
        setAddress(" ")
        setAccess(" ")
        setPhone(" ")
        navigate("/team")
    };

    return (
        <Box m="20px">
            <Header title="UPDATE PAGE" subtitle="Update User" />



            <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    
                    sx={{ margin:"70px 300px ",
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
                    }}
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Name"
                        value={Name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={Email}
                        name="email"
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={Address}
                        name="address"
                        sx={{ gridColumn: "span 4" }}
                    />

                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                        value={Phone}
                        name="phone"
                        sx={{ gridColumn: "span 4" }}
                    />
                                       
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Access"
                        onChange={(e) => setAccess(e.target.value)}
                        value={access}
                        name="access"
                        sx={{ gridColumn: "span 4" }}
                    />
                </Box>
                <Box display="flex" justifyContent="center" mt="20px">
                    <Button type="submit" color="secondary" variant="contained" >
                        Update User
                    </Button>
                </Box>
            </form>


        </Box>
    );
};



export default UpdateForm;