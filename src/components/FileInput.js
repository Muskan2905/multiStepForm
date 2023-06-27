import {Box } from "@material-ui/core"
import {useState, useEffect} from 'react'
import {BsFillCloudUploadFill} from 'react-icons/bs'


const FileInput = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] =  useState(null);

    useEffect(() => {
        if(selectedImage){
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    },[selectedImage]);

    return (
        <>
                <div>
                    <input 
                    accept = "image/*" 
                    type = "file" 
                    id = "selectImage"
                    onChange = {e => setSelectedImage(e.target.files[0])}    
                    />
                    <label htmlFor = "selectImage">
                        <BsFillCloudUploadFill style = {{color:'black', cursor:'pointer', marginRight:"-10px"}}/>
                    </label>
                    {imageUrl && selectedImage && (
                        <Box mt = {2} textAlign = "center">
                            <div>Image Preview : </div>
                            <img src = {imageUrl} alt = {selectedImage.name} height = "100px" name="selectedDocument"/>
                        </Box>
                    )}
                </div>
        </>
    )
}

export default FileInput