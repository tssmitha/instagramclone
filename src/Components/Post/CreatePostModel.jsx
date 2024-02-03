import React, { useState } from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalBody} from '@chakra-ui/react';
import { FaPhotoVideo } from "react-icons/fa";
import "./CreatePostCard.css"
import { GrEmoji } from "react-icons/gr";
import { GoLocation } from "react-icons/go";

const CreatePostModel = ({ onClose, isOpen }) => {

    const [file, setFile] = useState();
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.file[0];
        if (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")) {
            setFile(droppedFile);
        }
    }

    const [ setIsDragOver] = useState(false);
    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        setIsDragOver(true);
    }

    const handleDragLeave = () => {
        setIsDragOver(false);
    }

    const handleOnChange = (e) => {
        const file = e.target.files[0];
        if ((file && file.type.startsWith("image/")) || (file && file.type.startsWith("video/"))){

            setFile(file);
        }
        else {
            setFile(null);
            alert("please select an image or video");
        }
    }
    const[caption,setCaption] = useState("");
    const handleCaptionChange=(e)=>{
        setCaption(e.target.value)
    }

    return (
        <div>
            <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1px,10px' }}>
                        <p style={{ marginLeft: '10px' }}>Create new post</p>
                        <Button variant={"ghost"} size="sm" colorSchema={"blue"} style={{ margin: '10px' }}>
                            Share
                        </Button>
                    </div>
                    <hr />
                    <ModalBody>
                        <div style={{ justifyContent:'space-between',paddingBottom:'5px', display:'flex'}}>
                            <div style={{ width: '50%' }}>
                                {!file && <div
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    style={{ height: '100%' }}
                                    className='drag-drop'
                                >
                                    <div>
                                        <FaPhotoVideo style={{ fontSize: '1.875rem' }} />
                                        <p>Drag Photos or videos here</p>
                                    </div>
                                    <label htmlFor="file-upload" className='custom-file-upload'>Select From Computer</label>
                                    <input className='fileInput' type="file" id='file-upload' accept='image/*,video/*' onChange={handleOnChange} />
                                </div>}
                                
                                    {file && <img style={{height:'100%'}} src={URL.createObjectURL(file)} alt="" />}

                            </div>
                            <div style={{height:'100%',width:'1px',border:'2px solid black '}}></div>
                            <div style={{width:'50%'}}>
                                <div style={{display:'flex',padding:'0rem 2rem'}}>
                                    <img style={{width:'2rem',height:'2rem',borderRadius:'50%'}} src="https://cdn.pixabay.com/photo/2017/08/02/14/59/cat-2571971_1280.jpg" alt="" />
                                    <p style={{ marginLeft: '4px', fontWeight: '600'}}>username</p>
                                </div>
                                <div style={{padding:'0rem, 2rem'}}>
                                    <textarea placeholder='write a caption' rows={'8'} className='captionInput' name='caption' onChange={handleCaptionChange}></textarea>
                                </div>
                                <div style={{display:'flex',justifyContent:'space-between',padding:'0,2px'}}>
                                <GrEmoji />
                                <p style={{opacity:'0.7'}}>{caption?.length} /2,2000</p>
                                </div>
                                <hr />
                                <div style={{padding:'2px',justifyContent:'space-between',alignItems:'center',display:'flex',border:'1px solid #e2e8f0'}}>
                                    <input type="text" placeholder='location' className='locationInput' name='location' />
                                    <GoLocation />
                                </div>
                            </div>
                        </div>

                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}

export default CreatePostModel