import {InputLabel, MenuItem, FormControl} from '@mui/material'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import {useState} from 'react'

const options = [
    {value:'Choose Degree', label:'Choose Degree'},
    { value: 'Matriculation', label: 'Matriculation' },
    { value: 'High School', label: 'High School' },
    { value: 'Diploma', label: 'Diploma'},
    { value: 'UnderGraduate', label: 'UnderGraduate' },
    { value: 'PostGraduate', label: 'PostGraduate' }
];

const Degree = () => {
    const [selectedDegree, setSelectedDegree] = useState('');
    const handleChange = (event) => {
        setSelectedDegree(event.target.value);
    };
    return(
            <div>
                <InputLabel id="demo-simple-select-standard-label">Degree</InputLabel>
                <Select
                    className = 'drop'
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="degree"
                    variant = "standard"
                    onChange={handleChange}
                    style = {{marginTop:"-30px"}}
                    value = {selectedDegree}
                >
                    {options.map((option) => (
                        <MenuItem key = {option.value} value = {option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                    {/* <MenuItem disabled={true} value="">
                        Choose Degree
                    </MenuItem>
                    <MenuItem value={'Matriculation'}>Matriculation</MenuItem>
                    <MenuItem value={'High School'}>High School</MenuItem>
                    <MenuItem value={'Diploma'}>Diploma</MenuItem>
                    <MenuItem value={'UnderGraduate'}>UnderGraduate</MenuItem>
                    <MenuItem value={'PostGraduate'}>PostGraduate</MenuItem> */}
                </Select>
            </div>
    )
}

export default Degree