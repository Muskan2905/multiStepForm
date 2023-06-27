
// import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
// import dayjs from 'dayjs'
// import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
// import {DatePicker} from '@mui/x-date-pickers/DatePicker'

// const Dob = () => {
//     return(
//         <LocalizationProvider dateAdapter = {AdapterDayjs}>
//             <DatePicker />
//         </LocalizationProvider>
//     )
// }

// export default Dob



import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



const Dob = () => {
    const [date, setDate] = useState(new Date());
    return(
        <>
            <DatePicker name ="dob" className = 'birth' selected = {date} onChange={date => setDate(date)} />
        </>
    )
}


export default Dob