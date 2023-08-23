import React from 'react'
import { useTheme, Button,  Box } from "@mui/material";
import { tokens } from "../theme";
import { useNavigate } from 'react-router-dom';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
// import { baseURL } from '../utils/constant';

const UpdateButton = ({ id, data }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()
    const handleUpdate = () => {
        console.log(id, data);
        navigate(`/updateform/${id}`, { state: { data } })
    }
    return (
        <Box>
            <Button
                variant="contained"
                color="primary"
                sx={{ backgroundColor: colors.greenAccent[600], mx: "5px" }}
                startIcon={<DriveFileRenameOutlineIcon />}
                onClick={handleUpdate}
            >
                {/* <Typography color={colors.grey[100]} sx={{ textTransform: 'lowercase' }}></Typography> */}
            </Button>
        </Box>
    )
}

export default UpdateButton