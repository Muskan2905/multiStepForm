import React from "react"
import { TextField } from '@material-ui/core'

const PhoneNumber = () => {
  return(
      <TextField
        id="phone-number"
        label="PhoneNumber"
        variant="outlined"
        placeholder="Phone Number"
        margin="dense"
        size = "small"
        name = "phoneNumber"
      />
  )
}
export default PhoneNumber