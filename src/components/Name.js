import React from 'react'
import { TextField} from '@material-ui/core'

const Name = () => {
    return (
        <div className = 'span name'>
            <span className = 'span-one'>
                    <TextField
                    required
                    id="first-name"
                    label="First Name"
                    variant="outlined"
                    placeholder="First Name"
                    margin="dense"
                    size = "small"
                    name = "firstName"
                    />
            </span>
            <span className = 'span-two name'>
                    <TextField
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    placeholder="Last Name"
                    margin="dense"
                    name="lastName"
                    />
            </span>
        </div>
    )
}

export default Name