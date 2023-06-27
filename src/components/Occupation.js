import React from 'react'
import { TextField } from '@material-ui/core'


const Occupation = () => {
    return (
        <>
            <TextField
            id="occupation"
            label="Occupation"
            variant="outlined"
            placeholder="Occupation"
            margin="dense"
            size = "small"
            />

        </>
    )
}

export default Occupation