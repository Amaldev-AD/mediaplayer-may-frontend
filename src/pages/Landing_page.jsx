import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing_page() {

  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit, consectetur voluptatem, asperiores dolore magni veritatis officia exercitationem natus molestiae harum temporibus numquam reprehenderit sint quis quasi voluptates illum quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aliquam nisi ipsa, ipsam laudantium non tempora nostrum amet laboriosam voluptatibus debitis temporibus reiciendis neque voluptas. Maxime, eius veritatis. Alias, ut.</p>
          <Button onClick={() => navigateByUrl('/home')} className="btn btn-info">Started</Button>
        </Col>
        <Col lg={5}>
          <img src="https://media3.giphy.com/media/eSCpVwCRSmLMk/giphy.gif?cid=6c09b9529cyf1ylsldj0hc1a8u4vy5u5nlxzzsn9znbzdm2o&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
        </Col>
        <Col></Col>
      </Row>
      
      <Row className='w-100'>
        <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
          <h5 className='text-center'>Features</h5>

          <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-around w-100'>
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" height={'250px'}  src="https://i.gifer.com/8fvu.gif" />
            <Card.Body>
              <Card.Title style={{color:'pink'}}>Managing videos</Card.Title>
              <Card.Text className='mt-3'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" height={'250px'} src="https://38.media.tumblr.com/f48016e68a3d3ef836e9149721e0674a/tumblr_nki2dwTrrt1scq05jo1_500.gif" />
            <Card.Body>
              <Card.Title style={{color:'pink'}}>Categorized videos</Card.Title>
              <Card.Text className='mt-3' >
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" height={'250px'} src="https://i.pinimg.com/originals/14/8e/af/148eaf9f97c69b25abc69d1ed5f51f58.gif" />
            <Card.Body>
              <Card.Title style={{color:'pink'}}>Watch History</Card.Title>
              
              <Card.Text className='mt-3'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
          </div>
        </div>
      </Row>

      <div className="container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center mb-5">

        <div className="col-lg-5 py-3">
          <h4 className='text-warning'>Simple,powerful & Fast</h4>
          <h6 className='mb-5 mt-4'><span>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia ea debitis animi aspernatur soluta! Corporis, dolores, laborum magnam quis, esse aperiam quidem officia ratione ipsum fugiat nesciunt natus dicta.</h6>
          <h4 className='text-warning'>Simple,powerful & Fast</h4>
          <h6 className='mb-5 mt-4'><span>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia ea debitis animi aspernatur soluta! Corporis, dolores, laborum magnam quis, esse aperiam quidem officia ratione ipsum fugiat nesciunt natus dicta.</h6>
          <h4 className='text-warning'>Simple,powerful & Fast</h4>
          <h6 className=' mt-4'><span>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia ea debitis animi aspernatur soluta! Corporis, dolores, laborum magnam quis, esse aperiam quidem officia ratione ipsum fugiat nesciunt natus dicta.</h6>
        </div>
        <div className="col-lg-5 ms-5 ">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/pkJk7Wxmvhk?si=09_p2_72ncCYNIgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>


    </>
  )
}

export default Landing_page
