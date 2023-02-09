import { useRef, useState } from 'react'
import { Modal, } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube'

const ExploreVideoBox = ({ data }) => {
  const [show, setShow] = useState(false)
  const toggleModal = () => setShow(!show)
  const ref = useRef('')
  return (
    <>
      {/* THUMBNAIL SECTION */}
      <div className="image_box" onClick={toggleModal}  >
        <img
          className='imagebox'
          alt={'mountain bikes videos'}
          src={`https://img.youtube.com/vi/${data._id}/mqdefault.jpg`}
        />
        <h5>{data?.title}</h5>
        <h6><b>{data?.publishDate}</b></h6>
        <h6><a href="/see_more"><b>See more...</b></a></h6>  
      </div>
      {/* IMPLEMENTATION OF A BETTER NAVIGATION WITH REACCT POP UP MODAL */}
      <Modal
        show={show}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          className={`p-0 border-none headedHeader`}
          style={{ borderBottom: 'none', textAlign:"center"}}
        >
        </Modal.Header>
        <Modal.Body>
          <ReactPlayer
            className="react-player"
            config={{ file: { attributes: { controlsList: 'nodownload' } } }}
            onContextMenu={(e) => e.preventDefault()}
            url={`https://img.youtu.be/${data._id}`}
            // controls="true"
            width="100%"
            height="500px"
            muted={false}
            playing={true}
            ref={ref}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
export default ExploreVideoBox
