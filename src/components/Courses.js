import {InputLabel, MenuItem, FormControl} from '@mui/material'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import {useState} from 'react'

const options = [
    {value:'Choose Course', label:'Choose course'},
    { value: 'Physics', label: 'Physics' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'Mathematics', label: 'Mathematics'},
    { value: 'Business Studies', label: 'Business Studies' },
    { value: 'Economics', label: 'Economics' },
    { value: 'Computer Science', label: 'Computer Science'},
    { value: 'Aerospace', label: 'Aerospace' },
    { value: 'Accounting', label: 'Accounting' },
    { value: 'Robotics', label: 'Robotics'},
];
const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState('');
    const handleChange = (event) => {
        setSelectedCourse(event.target.value);
    };
    return(
            <div>
                <InputLabel id="demo-simple-select-standard-label">Course</InputLabel>
                <Select
                    className  = 'drop'
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="courses"
                    variant = 'standard'
                    onChange={handleChange}
                    style = {{marginTop:"-30px"}}
                    value = {selectedCourse}
                >
                    {options.map((option) => (
                        <MenuItem key = {option.value} value = {option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    {/* <MenuItem disabled={true} value="">
                        Choose Course
                    </MenuItem>
                    <MenuItem value={'Physics'}>Physics</MenuItem>
                    <MenuItem value={'Mathematics'}>Mathematics</MenuItem>
                    <MenuItem value={'Chemistry'}>Chemistry</MenuItem>
                    <MenuItem value={'BusinessStudies'}>Business Studies</MenuItem>
                    <MenuItem value={'Economics'}>Economics</MenuItem>
                    <MenuItem value={'ComputerScience'}>Computer Science</MenuItem>
                    <MenuItem value={'Aerospace'}>Aerospace</MenuItem>
                    <MenuItem value={'Accounting'}>Accounting</MenuItem>
                    <MenuItem value={'Robotics'}>Robotics</MenuItem> */}
                </Select>
            </div>      
    )
}

export default Courses