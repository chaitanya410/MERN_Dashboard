// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// // import Header from "../../components/Header";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// // import baseURL from "../../utils/constant"
// // import { Margin } from "@mui/icons-material";

// const Login = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");
//   const navigate = useNavigate();

//   const handleLogin = async (values) => {
//     try {

//       const verifyResponse = await axios.post(`http://localhost:5000/api/verifyTask`, values);
//       const { isValid, message } = verifyResponse.data;

//       if (isValid) {

//         navigate("/admin");
//       } else {
//         alert("Invalid Credentials");

//       }
//     } catch (error) {
//       console.error("Error verifying email:", error);
//     }
//   };

//   const checkoutSchema = yup.object().shape({
//     Email: yup.string().email("Invalid email").required("Email is required"),
//   });

//   const initialValues = {
//     Email: "",
//     Password:" ",
//   };

//   return (
//     <Box >
//     <Box m="20px" sx={{width:"400px",margin:"auto",marginTop:"60px" ,boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",}}>
//       <center><h2>User login</h2></center>

//       <Formik
//         initialValues={initialValues}
//         validationSchema={checkoutSchema}
//         onSubmit={handleLogin} // Handle submit now calls handleLogin

//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(1, minmax(0, 1fr))"
//               sx={{
//                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//               }}
//             >
//               <TextField

//                 variant="filled"
//                 type="text"
//                 label="Email"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.Email}
//                 name="Email"
//                 error={!!touched.Email && !!errors.Email}
//                 helperText={touched.Email && errors.Email}
//                 sx={{ gridColumn: "span 2", width:"300px",margin:"auto"}}
//               />
//               <TextField
//                 required
//                 fullWidth
//                 variant="filled"
//                 type="password"
//                 label="Password"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.Password}
//                 name="Password"
//                 error={!!touched.Password && !!errors.Password}
//                 helperText={touched.Password && errors.Password}
//                 sx={{ gridColumn: "span 2", width:"300px",margin:"auto"}}
//               />
//             </Box>
//             <Box display="flex" justifyContent="center" mt="20px" >
//               <Button color="primary" variant="contained" type="submit" sx={{marginBottom:"20px"}}>
//                     Login
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//     </Box>
//     </Box>
//   );
// };

// export default Login;

import { Box, Button, TextField, Checkbox, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const [keepSignedIn, setKeepSignedIn] = useState(
    localStorage.getItem("keepSignedIn") === "true"
  );

  const handleLogin = async (values) => {
    try {
      const verifyResponse = await axios.post(
        `http://localhost:5000/api/verifyTask`,
        values
      );
      const { isValid, message } = verifyResponse.data;

      if (isValid) {
        // Store the email in local storage
        localStorage.setItem("email", values.Email);
        localStorage.setItem("password", values.Password);

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
    Password: yup.string().required("Password is required"),
  });

  const initialValues = {
    // Email: localStorage.getItem('email') ? localStorage.getItem('email'): '' ,
    // Password: localStorage.getItem("Password") ? localStorage.getItem("password"): '',
    Email: localStorage.getItem("email") || "",
    Password: localStorage.getItem("password") || "",
  };

  return (
    <Box sx={{ backgroundColor: "#1F2022" }} height="100%" mt="-60px">
      <Box
        m="20px"
        sx={{
          width: "400px",
          margin: "auto",
          backgroundColor: "white",
          marginTop: "60px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h4" sx={{ marginTop: "20px" }}>
            LOGIN
          </Typography>
        </Box>

        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={handleLogin}
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
                  sx={{ gridColumn: "span 2", width: "300px", margin: "auto" }}
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
                  sx={{ gridColumn: "span 2", width: "300px", margin: "auto" }}
                />
              </Box>
              <Box display="flex" justifyContent="center" mt="20px">
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  sx={{ marginBottom: "20px" }}
                >
                  Login
                </Button>
              </Box>
              <Box>
                <Checkbox
                  onChange={(event) => {
                    // const checked=event.target.checked;
                    // setKeepSignedIn(checked);
                    // localStorage.setItem("keepSignedIn",checked.toString());

                    const checked = event.target.checked;
                    setKeepSignedIn(checked);
                    localStorage.setItem("keepSignedIn", checked.toString());

                    if (!checked) {
                      localStorage.removeItem("email");
                      localStorage.removeItem("password");
                    } else {
                      localStorage.setItem("email", values.Email);
                      localStorage.setItem("password", values.Password);
                    }
                  }}
                />
                <span> keep me sign in </span>
              </Box>
              <Box display="flex" justifyContent="center" mt="20px">
                <Button
                  color="success"
                  variant="contained"
                  type="submit"
                  sx={{ marginBottom: "20px" }}
                  onClick={() => {
                    navigate("/team");
                  }}
                >
                  Create New Account
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




