import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addVideoCategoryAPI, deleteCategoryAPI, getVideoAPI, getVideoCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import Videocard from './Videocard';
FloatingLabel

function Category({dropVideoResponse}) {
  const [categoryName,setCategoryName] = useState('')
  const [allCategories, setAllCategories] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleAdd = async () => {
    if(categoryName){
      const result = await addVideoCategoryAPI({categoryName,allVideos:[]})
      if(result.status >= 200 && result.status< 300){
        handleClose()
        setCategoryName('')
        getCategories()
      }else{
        alert(result.message)
      } 
    }
  }

  useEffect(() => {
    getCategories()
    
    
  },[dropVideoResponse])
  const getCategories = async () => {
    const {data} = await getVideoCategoryAPI()
    setAllCategories(data)
   
    
  }

  const removeCategory = async(id) =>{
    await deleteCategoryAPI(id)
    getCategories()
  }

  const dragOver = (e) => {
    console.log("video card dragged over the category");
    e.preventDefault()
    
  }

  const videoDropped = async(e,categoryId) => {
    const videoId = e.dataTransfer.getData("VideoId")
    console.log("Video id"+videoId,"Dropped into the" +categoryId);
    const {data} = await getVideoAPI(videoId)
    const selectedCategory = allCategories.find(item => item.id===categoryId)
    selectedCategory.allVideos.push(data)

    const res = await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
    
  }

  const videoDragStarted=(e,videoId,categoryId) => {
    let dataShare = {videoId,categoryId}
    
    
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }

  
 
  
  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className='btn btn-info'>Add Category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel controlId="floatingName" label="Category"className="mb-3">
            <Form.Control type="text" onChange={(e) => setCategoryName(e.target.value)} placeholder="Enter Category Name" />
          </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

     { 
      allCategories?.length>0?allCategories.map(category => (
        <div droppable='true' onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e,category?.id)} className="border rounded p-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>{category?.categoryName}</h5>
          <button onClick={() => removeCategory(category?.id) } className='btn'><i class="fa-solid fa-trash"></i></button>
        </div>

        <Row>
          {
            category?.allVideos?.length>0?category?.allVideos.map(card => (
              <Col sm={12} draggable onDragStart={e => videoDragStarted(e,card.id,category.id)} className='mb-3'>
                <Videocard video={card} insideCategory={true} />
              </Col>
            )):null
          }
        </Row>

      </div>
      )):<p>Nothing to display</p>
      }
    </>
  )
}

export default Category
