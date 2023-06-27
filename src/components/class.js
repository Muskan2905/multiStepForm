import {InputLabel, MenuItem, FormControl} from '@mui/material'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import {useState} from 'react'

const options = [
    {value:'Choose Class', label:'Choose Class'},
    { value: '10th', label: '10th' },
    { value: '12th', label: '12th' },
    { value: 'BTech/BE', label: 'BTech/BE'},
    { value: 'BArch', label: 'BArch' },
    { value: 'BA', label: 'BA' },
    { value: 'BCA', label: 'BCA'},
    { value: 'MTech', label: 'MTech' },
    { value: 'MBA', label: 'MBA' },
    { value: 'MCA', label: 'MCA'},
];

const Class = () => {
    const [selectedClass, setSelectedClass] = useState('');
    const handleChange = (event) => {
        setSelectedClass(event.target.value);
    };
    return(
            <div>
                <InputLabel id="demo-simple-select-standard-label">Class</InputLabel>
                <Select
                    className = 'drop'
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    variant = "standard"
                    label="class"
                    onChange={handleChange}
                    style = {{marginTop:"-30px"}}
                    value = {selectedClass}
                >
                    {options.map((option) => (
                        <MenuItem key = {option.value} value = {option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    {/* <MenuItem disabled={true} value="">
                        Choose Class
                    </MenuItem>
                    <MenuItem value={'10th'}>10th</MenuItem>
                    <MenuItem value={'12th'}>12th</MenuItem>
                    <MenuItem value={'BTech/BE'}>BTech/BE</MenuItem>
                    <MenuItem value={'BArch'}>BArch</MenuItem>
                    <MenuItem value={'BA'}>BA</MenuItem>
                    <MenuItem value={'BCA'}>BCA</MenuItem>
                    <MenuItem value={'MTech'}>MTech</MenuItem>
                    <MenuItem value={'MCA'}>MCA</MenuItem>
                    <MenuItem value={'MBA'}>MBA</MenuItem> */}
                </Select>
            </div>
    )
}

export default Class
