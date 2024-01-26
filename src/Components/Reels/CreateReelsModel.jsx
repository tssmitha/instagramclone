import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';
import { FaPhotoVideo } from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";
import { GoLocation } from "react-icons/go";

const ReelsModel = ({ onClose, isOpen }) => {
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState("");

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile && (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/"))) {
            setFile(droppedFile);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleOnChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
            setFile(file);
        }
    };

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    };

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1px,10px' }}>
                    <p style={{ marginLeft: '10px' }}>Create new reel</p>
                    <Button variant={"ghost"} size="sm" colorSchema={"blue"} style={{ margin: '10px' }}>
                        Share
                    </Button>
                </div>
                <hr />
                <ModalBody>
                    <div style={{ justifyContent:'space-between',paddingBottom:'5px', display:'flex'}}>
                        <div style={{ width: '50%' }}>
                            {!file && (
                                <div
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    style={{ height: '100%' }}
                                    className='drag-drop'
                                >
                                    <div>
                                        <FaPhotoVideo style={{ fontSize: '1.875rem' }} />
                                        <p>Drag Photos or videos here</p>
                                    </div>
                                    <label htmlFor="file-upload" className='custom-file-upload'>Select From Computer</label>
                                    <input className='fileInput' type="file" id='file-upload' accept='image/*,video/*' onChange={handleOnChange} />
                                </div>
                            )}
                            {file && <img style={{height:'100%'}} src={URL.createObjectURL(file)} alt="" />}
                        </div>
                        <div style={{height:'100%',width:'1px',border:'2px solid black '}}></div>
                        <div style={{width:'50%'}}>
                            <div style={{padding:'0rem 2rem'}}>
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
    );
};

export default ReelsModel;
