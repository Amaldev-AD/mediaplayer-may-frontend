import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Col, Row } from 'react-bootstrap'
import { getAlluploadedVideosAPI, getVideoCategoryAPI, updateCategoryAPI } from '../../services/allAPI'

function View({uploadVideoResponse,setDropVideoResponse}) {

  const [deleteVideoResponse,setDeleteVideoResponse] = useState(false) 

  const [allVideos, setAllVideos] = useState([])

  useEffect(() => {
    getAllVideos()
    setDeleteVideoResponse(false)
  }, [uploadVideoResponse,deleteVideoResponse ])

  const getAllVideos = async () => {
    const result = await getAlluploadedVideosAPI()
    
    if (result.status === 200) {
      
      setAllVideos(result.data)

    } else {
      console.log("api failed");
      setAllVideos([])

    }



  }
  // console.log(allVideos);
  const DragOver = (e) => {
    e.preventDefault()
  }

  const videoDropped = async(e) => {
    const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("data"))
    // console.log(videoId,categoryId);
    const {data} = await getVideoCategoryAPI()
    const selectedCategory = data.find(item => item.id === categoryId)
    const result= selectedCategory.allVideos.filter(video => video.id!==videoId)
    
    let {id,categoryName} = selectedCategory
    
    
    let newCategory = {id,categoryName,allVideos:result}
    
    const res = await updateCategoryAPI(categoryId,newCategory)
    
    setDropVideoResponse(res)
    

  }

  return (
    <>
      <Row droppable="true" onDragOver={e=>DragOver(e)} onDrop={e=>videoDropped(e)}>
        {
          allVideos?.length > 0 ? allVideos.map((video) => (
            <Col sm={12} md={4} lg={3} xl={3} className='mb-4'>
              <Videocard video = {video} setDeleteVideoResponse={setDeleteVideoResponse}  />
            </Col>
          )):<p className='text-danger fw-bolder'> Nothing to Display</p>
        
        }


      </Row>
    </>
  )
}

export default View
