import { useState } from 'react'
import './App.css'
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

function App() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [course, setCourse] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const [isFullnameInvalid, setIsFullnameInvalid] = useState(false);
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);
  const [isMobileNumberInvalid, setIsmobileNumberInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);


  const handleValidationForName = (tag) => {
    const { name, value } = tag
    console.log(value.match(/^[a-zA-Z ]{2,50}$/));
    if (!!value.match(/^[a-zA-Z ]{2,50}$/)) {
      if (name == "fullname") {
        setFullName(value)
        setIsFullnameInvalid(false)
      }

    } else {
      if (name == "fullname") {
        setFullName(value)
        setIsFullnameInvalid(true)
      }

    }
  }
  const handleValidationForAddress = (tag) => {
    const { name, value } = tag
    console.log(value.match(/^[a-zA-Z0-9\s,.'-()]*$/));
    if (!!value.match(/^[a-zA-Z0-9\s,.'-()]*$/)) {
      if (name == "address") {
        setAddress(value)
        setIsAddressInvalid(false)
      }
    } else {
      if (name == "address") {
        setAddress(value)
        setIsAddressInvalid(true)
      }
    }
  }
  const handleValidationForEmailID = (tag) => {
    const { name, value } = tag
    console.log(value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/));
    if (!!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      if (name == "email") {
        setEmail(value)
        setIsEmailInvalid(false)
      }
    } else {
      if (name == "email") {
        setEmail(value)
        setIsEmailInvalid(true)
      }
    }

  }

  const handleValidationForNumber = (tag) => {
    const { name, value } = tag
    if (!!value.match(/^(\+?[0-9]{1,3}\-?)?[0-9]{10}$/)) {
      if (name == "Number") {
        setNumber(value)
        setIsmobileNumberInvalid(false)
      }

    } else {
      if (name == "Number") {
        setNumber(value)
        setIsmobileNumberInvalid(true)
      }
    }

  }

  const handleDateChange = (date) => {
    setDate(date);
  }
  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);

  }
  const isFormIncomplete = !gender || !date || !course;

  const uploadDetails = () => {
    alert("Uploaded Successfully");
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const resetForm = () => {
    setFullName('')
    setAddress('')
    setEmail('')
    setNumber('')
    setDate(null)
    setCourse('')
    setGender('')
    setIsFullnameInvalid(false)
    setIsAddressInvalid(false)
    setIsEmailInvalid(false)
    setIsmobileNumberInvalid(false)
  }



  return (
    <div className='page'>
      <div className="register-container p-5 bg-light border rounded">
        <h4 className='text-center heading-main'>STUDENT REGISTRATION FORM</h4>
        <div className='inner-div mt-4'>
          <div className='left-side '>
            <div className="mb-5">
              <TextField value={fullName} onChange={e => handleValidationForName(e.target)} id="outlined-basic" name='fullname' label="Full Name" variant="outlined" className="w-100 mt-4 shadow" />
            </div>
            {isFullnameInvalid && <div className="text-danger mb-3">Invalid Name!!</div>}
            <div className="mb-5">
              <TextField value={address} onChange={e => handleValidationForAddress(e.target)} id="outlined-basic" name='address' label="Address" variant="outlined" className='w-100 shadow' />
            </div>
            {isAddressInvalid && <div className="text-danger mb-3">Invalid Address!!</div>}
            <div className="mb-5">
              <TextField value={email} onChange={e => handleValidationForEmailID(e.target)} id="outlined-basic" name='email' label="Email ID" variant="outlined" className='w-100 shadow' />
            </div>
            {isEmailInvalid && <div className="text-danger mb-3">Invalid Email Id!!</div>}
            <div className="mb-5">
              <TextField value={number} onChange={e => handleValidationForNumber(e.target)} id="outlined-basic" name='Number' label="Mobile Number" variant="outlined" className='w-100 shadow' />
            </div>
            {isMobileNumberInvalid && <div className="text-danger mb-3">Invalid Mobile!! <br /> Mobile number should contain only 10-14 characters</div>}
          </div>
          <div className="right-side">
            <div className="mb-3">
              <h6 className="mt-3">Date of Birth</h6>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={date} onChange={handleDateChange} className=" w-100 shadow mb-3" renderInput={(props) => <input {...props} readOnly />}
                />
              </LocalizationProvider>
            </div>
            <div className="mb-3">
              <FormControl fullWidth className='shadow mb-3'>
                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={course}
                  label="Course"
                  onChange={handleCourseChange}
                >
                  <MenuItem value={10}>Biology Science</MenuItem>
                  <MenuItem value={20}>Computer Science</MenuItem>
                  <MenuItem value={30}>Commerce</MenuItem>
                  <MenuItem value={40}>Humanities</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="mb-3">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="mb-3">
              <Stack spacing={2} direction="column">
                <Button onClick={handleShow} variant="contained" className='shadow bg-success'>SUBMIT</Button>
                <Button onClick={resetForm} variant="contained" className='shadow'>RESET</Button>
              </Stack>
            </div>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Please confirm details </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="details">
                  <div className="modal-heading">
                    <h5 className="fullname">Full Name</h5>
                    <h5 className="fullname">Address</h5>
                    <h5 className="fullname">Mobile Number</h5>
                    <h5 className="fullname">Email ID</h5>
                    <h5 className="fullname">Date of Birth</h5>
                    <h5 className="fullname">Gender</h5>
                    <h5 className="fullname">Course</h5>
                  </div>
                  <div className="fillers">
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {fullName}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {address}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {number}
                    </h6>
                    <h6 className="ps-3 content">{email}</h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {date ? date.format("DD-MM-YYYY") : ""}{" "}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {gender}
                    </h6>
                    <h6
                      className="ps-3 content"
                      style={{ textTransform: "capitalize" }}
                    >
                      {course === 10
                        ? "Biology"
                        : course === 20
                        ? "Computer Science"
                        : course === 30
                        ? "Commerce"
                        : course===40
                        ?"Humanities"
                      :"" }
                    </h6>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    handleClose();
                    resetForm();
                    uploadDetails();
                  }}
                  variant="primary"
                >
                  Upload
                </Button>
              </Modal.Footer>
            </Modal>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
