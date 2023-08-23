import { Box, Typography, useTheme,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import axios from "axios"
import { baseURL } from "../../utils/constant";
import {useState,useEffect} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "../../css/modal.css"
import UpdateButton from "../../components/UpdateBtn";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tasks,setTasks]=useState([]);
  // const [showModal,setShowModal]=useState(false);





  // const closeModal=()=>setShowModal(false)

 
  // const MyModal=()=>{
  //   return(
      
  //     <>
    
  //      <div className="modal-wrapper"></div>
  //      <div className="modal-container">
  //            <input placeholder="Name" type="text"></input><br/>
  //            <input placeholder="Email" type="text"></input><br/>
  //            <input placeholder="id" type="text"></input><br/>
  //            <input placeholder="Address" type="text"></input><br/>
  //            <input placeholder="password" type="text"></input><br/>
  //       <Button 
  //        sx={{backgroundColor:"black",color:"white" , marginTop:"10px"}} 
  //        onClick={()=>
  //        setShowModal(false)
        
  //         }> click me</Button>          
                   
  //       </div>
       
  //     </>
  //   )
  // }



  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async () =>{
    try{
      axios.get(`${baseURL}/get`).then((res) => {
        console.log(res.data);
        setTasks(res.data)
      });
    }catch(error){
      console.log("Error Fetching Data")
    }
  }

  const handleDelete=(id)=>{
     axios.post(`${baseURL}/delete/${id}`);
    // alert(id);
    fetchData()
   }

  const columns = [
    { field: "id", headerName: "ID" },
    
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
    {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: ({ row: tasks }) => {

      return(
        <>
        {/* <Button sx={{ backgroundColor: "#009966", color: "white" }}  onClick={() => setShowModal(true)} > < DriveFileRenameOutlineIcon  id={tasks._id} /></Button>
        {showModal &&   <MyModal />} */}
        <UpdateButton id={tasks._id} data={tasks} />

        <Box>
        <Button onClick={()=>handleDelete(tasks._id)} sx={{ backgroundColor: "#009966", color: "white",marginLeft:"10px" }}  ><DeleteIcon/></Button>              
        </Box>
        </>


      )
    },
  },
];

return (
  <Box m="20px">
    <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          
        }}
      >
        <DataGrid  rows={tasks} columns={columns} getRowId={(tasks) => tasks._id} />
      </Box>
    </Box>
)
}

export default Team;
