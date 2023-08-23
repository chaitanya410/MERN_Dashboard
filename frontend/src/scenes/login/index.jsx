//  allow us to split girds into four section which is min 0 and max 1fr dedicated unit for grids each column can have 1 fraction of space  (grid template columns)
// import { Box, Button, TextField,useTheme } from "@mui/material";
// import { Formik } from "formik";
// import { tokens } from "../../theme";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";
// import { useNavigate,Link } from "react-router-dom";
// // import Topbar from "../global/Topbar";


// const Login = () => {
  
  
//   const isNonMobile = useMediaQuery("(min-width:600px)");
//   const navigate = useNavigate();
//   const theme  = useTheme();
//   const colors = tokens(theme.palette.mode)

//   // const loginHandler = () => {
//   //   // alert("logged in ");
//   //   navigate("/dashboard");
//   // };

//   const phoneRegExp =
//     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

//   const checkoutSchema = yup.object().shape({
//     email: yup.string().email("invalid email").required("required"),
//     contact: yup
//       .string()
//       .matches(phoneRegExp, "Phone number is not valid")
//       .required("required"),
//   });
//   const initialValues = {
//     email: "chait123@gmail.com",
//     contact: "4445556662",
//     password: "asdasdad",
//   };

//   return (
//     <>
    
   
//     <Box m="20px" justifyItems="center" sx={{width:"500px", alignItems:"center" , marginLeft:"550px", marginTop:"100px", height:"500px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
//       <center><Header title="USER LOGIN" subtitle="login"   /></center>

//       <Formik initialValues={initialValues} validationSchema={checkoutSchema}>
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (

        
//           <form onSubmit={handleSubmit}  >
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//               sx={{
//                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" ,},
//               }}
//             >
//               <TextField
//               required
//                 variant="filled"
//                 type="text"
//                 label="Email"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.email}
//                 name="email"
//                 error={!!touched.email && !!errors.email}
//                 helperText={touched.email && errors.email}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 required
//                 fullWidth
//                 variant="filled"
//                 type="password"
//                 label="Password"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.password}
//                 name="password"
//                 error={!!touched.password && !!errors.password}
//                 helperText={touched.password && errors.password}
//                 sx={{ gridColumn: "span 4" }}
//               />
//             </Box>
//             <Box display="flex" justifyContent="center" mt="20px" >
//               <Button
//                 type="submit"            
//                 color="primary"
//                 onClick={()=>{
//                   navigate("/admin")
//                         }}
//                 variant="contained"
//               >
//                 LOGIN
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//     </Box>
//     </>
   
//   );
// };

// export default Login;

// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { baseURL } from "../../utils/constant";


// const Login = () => {
//     const isNonMobile = useMediaQuery("(min-width:600px)");
//     const navigate = useNavigate()


//     const handleFormSubmit = (values) => {
//         // console.log(values);
//         handleLogin(values);

//     };
//     const checkoutSchema = yup.object().shape({
//         email: yup.string().email("invalid email").required("required"),
//         password: yup.string()
//             .min(8, 'Password must be at least 8 characters')
//             .required('Password is required'),

//     });
//     const initialValues = {
//         email: "admin@gmail.com",
//         password: "Admin@123",

//     };
//     // const handleLogin = (values) => {
//     //     if (values.email === "admin@gmail.com" && values.password === "Admin@123") {
//     //         navigate('/admin');
//     //         console.log('Login Successful!');
//     //     }
//     //     else if (values.password !== "Admin@123") {
//     //         console.log('Invalid password');
//     //     }
//     //     else if (values.email !== "admin@gmail.com") {
//     //         console.log('Invalid Email');
//     //     }
//     //     else {
//     //         console.log("Invalid Email and Password!!")
//     //     }
//     // };

//     const handleLogin = async (values) => {
//         try {
//             const response = await axios.post(`${baseURL}/verifyTask`, { email: values.email });
            
//             if (response.status === 200) {
//                 // Email verified, navigate to dashboard
//                 navigate('/dashboard');
//             } else if (response.status === 404) {
//                 // Email not found
//                 console.log('Email not found');
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <Box m="20px">
//             <Header title="LOGIN USER" subtitle="Login into your User Profile" />

//             <Formik
//                 onSubmit={handleFormSubmit}
//                 initialValues={initialValues}
//                 validationSchema={checkoutSchema}
//             >
//                 {({
//                     values,
//                     errors,
//                     touched,
//                     handleBlur,
//                     handleChange,
//                     handleSubmit,

//                 }) => (
//                     <form onSubmit={handleSubmit}>
//                         <Box
//                             display="grid"
//                             gap="30px"
//                             gridTemplateColumns="repeat(1, minmax(0, 1fr))"
//                             sx={{
//                                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//                             }}
//                         >


//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 type="text"
//                                 label="Email"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.email}
//                                 name="email"
//                                 error={!!touched.email && !!errors.email}
//                                 helperText={touched.email && errors.email}
//                                 sx={{ gridColumn: "span 2" }}
//                             />
//                             <TextField
//                                 fullWidth
//                                 variant="filled"
//                                 type="password"
//                                 label="Password"
//                                 onBlur={handleBlur}
//                                 onChange={handleChange}
//                                 value={values.password}
//                                 name="password"
//                                 error={!!touched.password && !!errors.password}
//                                 helperText={touched.password && errors.password}
//                                 sx={{ gridColumn: "span 2" }}
//                             />


//                         </Box>
//                         <Box display="flex" justifyContent="center" mt="20px">
//                             <Button type="submit" color="secondary" variant="contained" onSubmit={handleLogin()}>
//                                 Login
//                             </Button>
//                         </Box>
//                     </form>
//                 )}
//             </Formik>
//         </Box>
//     );
// };





// export default Login;


import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseURL from "../../utils/constant"
import { Margin } from "@mui/icons-material";

const Login = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
     
      const verifyResponse = await axios.post(`http://localhost:5000/api/verifyTask`, values);
      const { isValid, message } = verifyResponse.data;

      if (isValid) {
         
        navigate("/admin");
      } else {
        alert("Invalid Credentials");
        
      }
    } catch (error) {
      console.error("Error verifying email:", error);
    }
  };

  const checkoutSchema = yup.object().shape({
    Email: yup.string().email("Invalid email").required("Email is required"),  
  });

  const initialValues = {
    Email: "",
    Password:" ",
  };

  return (
    <Box >
    <Box m="20px" sx={{width:"400px",margin:"auto",marginTop:"60px" ,boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",}}>
      <center><h2>User login</h2></center>

      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={handleLogin} // Handle submit now calls handleLogin
        
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(1, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
               
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Email}
                name="Email"
                error={!!touched.Email && !!errors.Email}
                helperText={touched.Email && errors.Email}
                sx={{ gridColumn: "span 2", width:"300px",margin:"auto"}}
              />
              <TextField
                required
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Password}
                name="Password"
                error={!!touched.Password && !!errors.Password}
                helperText={touched.Password && errors.Password}
                sx={{ gridColumn: "span 2", width:"300px",margin:"auto"}}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="20px" >
              <Button color="primary" variant="contained" type="submit" sx={{marginBottom:"20px"}}>
                    Login              
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
    </Box>
  );
};

export default Login;


