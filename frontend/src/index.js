import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Dashboard from "./scenes/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/forms";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import Login from "./scenes/login";
import { CreateUser } from "./components/CreateUser";
import UpdateForm from "./scenes/forms/UpdateForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/" element={<App />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />        
          <Route path="contacts/" element={<Contacts />} />
          <Route path="invoices/" element={<Invoices />} />
          <Route path="form/" element={<Form />} />
          <Route path="/updateform/:id" element={<UpdateForm />} />
          <Route path="calendar/" element={<Calendar />} />
          <Route path="faq/" element={<FAQ />} />
          <Route path="bar/" element={<Bar />} />
          <Route path="pie/" element={<Pie />} />
          <Route path="line/" element={<Line />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/CreateUser" element={<CreateUser />} />
        </Route>
      </Routes>

     
    </BrowserRouter>
  </React.StrictMode>
);
 