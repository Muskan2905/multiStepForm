//Importing libraries

import React, {useState} from 'react'
import {Typography, TextField, Button, Stepper, Step, StepLabel} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useForm, FormProvider, useFormContext, Controller} from 'react-hook-form'

//import PhoneInput from 'react-phone-number-input'
import PhoneNumber from './PhoneNumber'
import Dob from './Dob'
import Gender from './Gender'
import Name from './Name'
import Occupation from './Occupation'
import FileInput from './FileInput'
import Degree from './Degree'
import Class from './Class'
import Courses from './Courses'


const useStyles = makeStyles((theme) => ({
    button: {
      marginRight: theme.spacing(1),
    },
    
    // Step: {
    //     "& .MuiStepIcon-active": { color: "red" },
    //     "& .MuiStepIcon-completed": { color: "green" },
    //     "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" }
    // }
}));


const stepsInfo = () => {
    return(
        [
            'Personal Information',
            'Education',
            'Documents',
            'Course',
        ]
    )
}

const PersonalInformation = () => {
    const {control} = useFormContext();
    return(
        <>
            <div className = 'step-one'>
            <div className = 'one'>
            {/* ---------studentInfo---------- */}
                <div className = 'info' id= "student-info">
                    <div className = 'info-part'>
                        <label htmlFor = "student-info">Student's Name</label>
                    </div>
                    <div className = 'info-part' style = {{marginTop:"-10px"}}>
                        <div className = 'name'>
                            <Name />
                        </div>
                        <div className = 'dob'>
                            <Dob required/>
                        </div>
                        <div className = 'gender'>
                            <Gender required style={{width:'300px'}}/>
                        </div>
                        <div className = 'phone'>
                            <PhoneNumber required/>
                        </div>
                        <div className = 'email'>
                            <Controller control = {control} name="emailAddress" render = {({field}) => (
                                <TextField
                                required
                                id="email"
                                type="email"
                                label="E-mail"
                                variant="outlined"
                                placeholder="email"
                                size = "small"
                                margin="dense"
                                {...field}/>
                            )}/>
                        </div>
                    </div>
                </div>
            {/* ---------fatherInfo---------- */}
                <div className = 'info' id='father-info'>
                    <div className = 'info-part'>
                        <label htmlFor='father-info'>Father's Name</label>
                    </div>
                    <div className = 'info-part' style = {{marginTop:"-10px"}}>
                        <div className = 'name'>
                            <Name />
                        </div>
                        <div className = 'occupation'>
                            <Occupation />
                        </div>
                        <div className = 'phone'>
                            <PhoneNumber required/>
                        </div>
                    </div>
                </div>
            {/* ---------MotherInfo---------- */}
                <div className = 'info' id='mother-info'>
                    <div className = 'info-part'>
                        <label htmlFor='mother-info'>Mother's Name</label>
                    </div>
                    <div className = 'info-part' style = {{marginTop:"-10px"}}>
                        <div className = 'name'>
                            <Name />
                        </div>
                        <div className = 'occupation'>
                            <Occupation />
                        </div>
                        <div className = 'phone'>
                            {/* <PhoneInput 
                                required
                                placeholder = "Phone"
                                value = {phone}
                                onChange = {setPhone}
                                inputComponent = {PhoneNumber}
                            /> */}
                            <PhoneNumber required/>
                        </div>
                    </div>
                </div>
            {/* ---------guardianInfo---------- */}
                <div className = 'info' id='guardian-info'>
                    <div className = 'info-part'>
                        <label htmlFor='guardian-info'>Guardian's Name</label>
                    </div>
                    <div className = 'info-part' style = {{marginTop:"-10px"}}>
                        <div className = 'name'>
                            <Name name = 'firstName'/>
                        </div>
                        <div className = 'occupation'>
                            <Occupation />
                        </div>
                        <div className = 'phone'>
                            <PhoneNumber required/> 
                        </div>
                    </div>
                </div>
            {/* ---------homeAddressInfo---------- */}
                <div className = 'info' id='address-info'>
                    <div className='info-part'>
                        <label htmlFor='address-info'>Home Address</label>
                    </div>
                    <div className='info-part'>
                        <div className = 'pincode' style = {{marginTop:"-10px", marginBottom :"10px"}}>
                            <Controller control = {control} name="pincode" render = {({field}) => (
                                <TextField
                                required
                                id="pincode"
                                label="Pincode"
                                variant="outlined"
                                placeholder="Pincode"
                                size = "small"
                                margin="dense"
                                name="pincode"
                                type ="number"
                                {...field}/>
                            )}/>
                        </div>
                        <div className = 'countryAndState span'>
                        <span className = 'span-one'>
                            <Controller control = {control} name="country" render = {({field}) =>(
                                <TextField
                                    required
                                    id="country"
                                    label="Country"
                                    variant="outlined"
                                    placeholder="Country"
                                    size = "small"
                                    margin="dense"
                                {...field}/>
                            )}/>
                        </span>
                        <span className = 'span-two'>
                            <Controller control = {control} name="state" render = {({field}) => (
                                <TextField
                                required
                                id="state"
                                label="State"
                                variant="outlined"
                                placeholder="State"
                                size = "small"
                                margin="dense"
                                {...field}/>
                            )}/>
                        </span>
                        </div>
                        <div className = 'cityAndDistrict span'>
                        <span className = 'span-one'>
                            <Controller control = {control} name="city" render = {({field}) => (
                                <TextField
                                required
                                id="city"
                                label="City"
                                variant="outlined"
                                placeholder="City"
                                size = "small"
                                margin="dense"
                                {...field}/>
                            )}/>
                        </span>
                        <span className = 'span-two'>
                            <Controller control = {control} name="district" render = {({field}) => (
                                <TextField
                                    id="district"
                                    label="District"
                                    variant="outlined"
                                    placeholder="District"
                                    size = "small"
                                    margin="dense"
                                {...field}/>
                            )}/>
                        </span>
                        </div>
                        <div className = 'areaAndColony span'>
                        <span className = 'span-one'>
                            <Controller control = {control} name="area" render = {({field}) => (
                                <TextField
                                    required
                                    id="area"
                                    label="Area"
                                    variant="outlined"
                                    placeholder="Area"
                                    size = "small"
                                    margin="dense"
                                {...field}/>
                            )}/>
                        </span>
                        <span className = 'span-two'>
                            <Controller control = {control} name="colony" render = {({field}) => (
                                <TextField
                                    id="colony"
                                    label="Colony"
                                    variant="outlined"
                                    placeholder="Colony"
                                    size = "small"
                                    margin="dense"
                                {...field}/>
                            )}/>
                        </span>
                        </div>
                        <div className = 'houseNo'>
                            <Controller control = {control} name="houseNumber" render = {({field}) => (
                                <TextField
                                    required
                                    id="house-number"
                                    label="HouseNumber"
                                    variant="outlined"
                                    placeholder="House Number"
                                    size = "small"
                                    margin="dense"
                                {...field}/>
                            )}/>
                        </div>
                    </div>
                </div>      
            </div>
            <div className = 'two'>
                <div className = 'profilePhoto'>
                    <FileInput />
                </div>
            </div>
        </div>
        </>
    )
}

const Education = () => {
    const {control} = useFormContext()
    return(
        <>
            <div className = 'step-two box info'>
                <div className = 'info-part'>
                    <label className = 'edu'>Education</label>
                </div>
                <div className = 'info-part education-info'>
                    <div className = 'institution'>
                        <Controller control = {control} name="institute" render = {({field}) => (
                            <TextField
                            required
                            id="institute"
                            label="Institute"
                            variant="outlined"
                            placeholder="Institute"
                            size = "small"
                            margin="dense"
                            {...field}/>
                        )}/>
                    </div>
                    <div className = 'place'>
                        <Controller control = {control} name="place" render = {({field}) => (
                            <TextField
                                required
                                id="place"
                                label="Place"
                                variant="outlined"
                                placeholder="Place"
                                size = "small"
                                margin="dense"
                            {...field}/>
                        )}/>
                    </div>
                    <div className = 'degree'>
                        <Degree required/>
                    </div>
                    <div className = 'class'>
                        <Class required/>
                    </div>
                    <div className = 'grade'>
                        <Controller control = {control} name="grade" render = {({field}) => (
                            <TextField
                            required
                            id="grade"
                            label="Grade"
                            variant="outlined"
                            placeholder="Grade"
                            size = "small"
                            margin="dense"
                            type = "number"
                            {...field}/>
                        )}/>
                    </div>
                </div>    
            </div>
        </>
    )
}

const Documents = () => {
    const {control} = useFormContext()
    return(
        <>
            <div className = 'step-three box'>
            {/* ---------IdentityInfo---------- */}

                <div className = 'identity-info info'>
                    <div className = 'info-part'>
                        <label className = "doc">Identity Card(Aadhar/Voter)</label>
                    </div>
                    <div className = 'info-part identity' style = {{marginTop:"-10px", marginLeft:"-20px"}}>
                        <Controller control = {control} name="idNumber" render = {({field}) => (
                            <TextField
                            id="id-number"
                            label="Identity Number"
                            variant="outlined"
                            placeholder="Identity Number"
                            size = "small"
                            margin="dense"
                            style = {{marginBottom:"10px"}}
                            {...field}/>
                        )}/>
                       <FileInput/>
                    </div>
                </div>
            {/* ---------MarksheetsInfo---------- */}
                <div className = 'marksheet-info info'>
                    <div className = 'info-part'>
                        <label className = "doc">Marksheet</label>
                    </div>
                    <div className = 'marksheet info-part' style = {{marginTop:"-10px", marginLeft:"-20px"}}>
                        <Class style = {{marginBottom:"20px"}}/>
                        <FileInput />   
                    </div>
                </div>
            {/* ---------coverLetterInfo---------- */}
                <div className = 'coverletter-info info'>
                    <div className = 'info-part'>
                        <label className = "doc">Coverletter</label>
                    </div>
                    <div className = 'coverLetter info-part' style = {{marginLeft:"-20px"}}>
                        <FileInput />
                    </div>
                </div>
            </div>
        </>
    ) 
}

const Course = () => {
    return (
        <>
            <div className = 'step-four box'>
            {/* ---------ProgramInfo---------- */}
                <div className = 'program-info info'>
                    <div className = 'info-part'>
                        <label className = 'courseLabel'>Preffered Program</label>
                    </div>
                    <div className = 'program info-part' style = {{marginTop:"-10px"}}>
                        <Class/>
                    </div>
                </div>
            {/* ---------MajorCourseInfo---------- */}
                <div className = 'majorcourse-info info'>
                    <div className = 'info-part'>
                        <label className = 'courseLabel'>Major Course</label>
                    </div>
                    <div className = 'Major Course info-part' style = {{marginTop:"-10px"}}>
                        <Courses />
                    </div>
                </div>
             {/* ---------AdditionalCourseInfo---------- */}
                <div className = 'additionalcourse-info info'>
                    <div className = 'info-part'>
                        <label className = 'courseLabel'>Additional Course</label>
                    </div>
                    <div className = 'Additional Course info-part' style = {{marginTop:"-10px"}}>
                        <Courses />
                    </div>
                </div>
            </div>       
        </>
    )
}



const stepContent = (step) => {
    switch(step){

        case 0:
            return  <PersonalInformation />

        case 1:
            return  <Education />

        case 2:
            return  <Documents />

        case 3:
            return  <Course />

        default: return 'unknown step';
    }
}


const StepByStep = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = stepsInfo();
    const methods = useForm({
        defaultValues : {
            firstName : "",
            lastName : "",
            dob:"",
            phoneNumber:"",
            gender:"",
            emailAddress:"",
            occupation:"",
            pincode:"",
            country:"",
            state:"",
            city:"",
            district:"",
            area:"",
            colony:"",
            houseNumber:"",
            selectedDocument:"",
            institute:"",
            place:"",
            degree:"",
            class:"",
            grade:"",
            idNumber:"",
            course:"",
        }
    });

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };
    

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };
    
    const handleNext = (data) => {
        console.log(data);
        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
            setSkippedSteps([...skippedSteps, activeStep]);
    }
        setActiveStep(activeStep + 1);
    };
    // const onSubmit = (data) => {
    //     console.log(data);
    // }
    return(
        <div>
            <Stepper alternativeLabel activeStep={activeStep} className = "stepper">
                {steps.map((step, index) => {
                const labelProps = {};
                const stepProps = {};
                if (isStepOptional(index)) {
                    labelProps.optional = (
                    <Typography
                        variant="caption"
                        align="center"
                        style={{ display: "block" }}
                    >
                    </Typography>
                    );
                }
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step {...stepProps} key={index}>
                    <StepLabel {...labelProps}>{step}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>

            {activeStep === steps.length ? (
            <Typography variant="h6" align="center" style = {{marginTop : '50px'}}>
            Thank You for submitting the form. You will receive further update soon from us via email.
            </Typography>
            ) : (
            <>
            <FormProvider {...methods}>
                <form onSubmit = {methods.handleSubmit(handleNext)}>
                    <Button
                        className={classes.button}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        style = {{marginTop :"20px", marginBottom :"20px", width:"40px", height:"30px"}}
                    >
                        back
                    </Button>
                    {isStepOptional(activeStep) && (<Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleSkip}
                        style = {{marginTop :"20px", marginBottom :"20px", backgroundColor:"black", color:"white", width:"40px", height:"30px"}}
                        >
                        skip
                    </Button>)}
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        style = {{marginTop :"20px", marginBottom :"20px", backgroundColor:"black", color:"white", width:"40px", height:"30px"}}
                    >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                    {stepContent(activeStep)}
                    <Button
                        className={classes.button}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        style = {{width:"40px", height:"30px"}}
                    >
                        back
                    </Button>
                    {isStepOptional(activeStep) && (
                        <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleSkip}
                        style = {{backgroundColor:"black", color:"white", width:"40px", height:"30px"}}
                        >
                        skip
                        </Button>
                    )}
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        //onClick={handleNext}
                        type = "submit"
                        style = {{backgroundColor:"black", color:"white", width:"40px", height:"30px"}}
                    >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </form>
                </FormProvider>
            </>
        )}
        </div>
    )
}

export default StepByStep