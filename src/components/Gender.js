import {InputLabel, MenuItem, FormControl} from '@mui/material'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import {useState} from 'react'

const options = [
    {value:'Choose Gender', label:'Choose Gender'},
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' },
    { value: 'Other', label: 'Other'}
];

const Gender = () => {
    const [selectedGender, setSelectedGender] = useState('');
    const handleChange = (event) => {
        setSelectedGender(event.target.value);
    };

    return(
            <div>
                <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                <Select
                    className = 'drop'
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Gender"
                    variant = "standard"
                    onChange={handleChange}
                    style = {{marginTop:"-30px"}}
                    value = {selectedGender}
                >
                    {options.map((option) => (
                        <MenuItem key = {option.value} value = {option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    {/* <MenuItem disabled = {true} value="">
                        Choose Gender
                    </MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem> */}
                </Select>
       </div>
    )
}

export default Gender