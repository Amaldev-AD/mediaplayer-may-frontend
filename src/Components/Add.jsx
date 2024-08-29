import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { uploadVideoAPI } from '../../services/allAPI';


function Add({setUploadVideoResponse}) {

  const [uploadVideo, setuploadVideo] = useState({id:"",name:"",url:"",link:""})
 

  const getYoutubelink = (e) => {
    const {value} = e.target
   if(value.includes("v=")){
    let VID = value.split("v=")[1].slice(0,11)
    console.log(`https://www.youtube.com/embed/${VID}`);
    setuploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
   }else{
    setuploadVideo({...uploadVideo,link:""})
   }
    
  }
  
  const handleAdd = async () => {
    const {id,name,url,link} = uploadVideo
    if(!id || !name || !url || !link){
      alert("please fill the missing field")
    }
    else {
      // video uploaded to json server
      const result = await uploadVideoAPI(uploadVideo)
      
      if(result.status>=200 && result.status<=300){
        alert("video uploaded")
        handleClose()

        // empty fields
        setuploadVideo({id:"",name:"",url:"",link:""})
        setUploadVideoResponse(result.data)

      }else{
        alert(result.message)
      }
      
    }
  }

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex mb-5 mt-5 align-items-center gap-2">
        <h2>Upload Videos</h2>
        <Button onClick={handleShow} className='btn' style={{ backgroundColor: 'transparent', border: 'none', fontSize: '27px' }}><i class="fa-solid fa-arrow-up-from-bracket"></i></Button>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <FloatingLabel
            controlId="floatingInput"
            label="Video Id"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter Video Id" onChange={(e) => setuploadVideo({...uploadVideo,id:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingName" label="Video Name"className="mb-3">
            <Form.Control type="text" placeholder="Enter Video Name" onChange={(e) => setuploadVideo({...uploadVideo,name:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingName" label="Image Url"className="mb-3">
            <Form.Control type="text" placeholder="Image Url" onChange={(e) => setuploadVideo({...uploadVideo,url:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingName" label="Video Url"className="mb-3">
            <Form.Control type="text" placeholder="Video Url" onChange={getYoutubelink} />
          </FloatingLabel>

        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd} >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
