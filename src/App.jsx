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
import Button from '@mui/material/Button';

function App() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [eamil, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [course, setCourse] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(null);

  const [isFullnameInvalid, setIsFullnameInvalid] = useState(false);
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);
  const [isMobileNumberInvalid, setIsmobileNumberInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);


  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };


  return (
    <div className='page'>
      <div className="register-container p-5 bg-light border rounded">
        <h4 className='text-center heading'>STUDENT REGISTRATION FORM</h4>
        <div className='inner-div mt-4'>
          <div className='left-side '>
            <div className="mb-5">
              <TextField id="outlined-basic" label="Full Name" variant="outlined" className="w-100 mt-4 shadow" />
            </div>
            <div className="mb-5">
              <TextField id="outlined-basic" label="Address" variant="outlined" className='w-100 shadow' />
            </div>
            <div className="mb-5">
              <TextField id="outlined-basic" label="Email ID" variant="outlined" className='w-100 shadow' />
            </div>
            <div className="mb-5">
              <TextField id="outlined-basic" label="Mobile Number" variant="outlined" className='w-100 shadow' />
            </div>
          </div>
          <div className="right-side">
            <div className="mb-3">
              <h6 className="mt-3">Date of Birth</h6>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className=" w-100 shadow mb-3" renderInput={(props) => <input {...props} readOnly />}
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
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="mb-3">
              <Stack spacing={2} direction="column">
                <Button variant="contained" className='shadow bg-success'>SUBMIT</Button>
                <Button variant="contained" className='shadow'>RESET</Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default App
