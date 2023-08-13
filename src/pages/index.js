import styles from '@/styles/Home.module.css'
import Navbar from '../../components/navbar'
import PostCard from '../../components/postcard'
import Activeuser from '../../components/activeuser'
import { posts } from '../../utils/posts'
import withAuth from '../../utils/withAuth'
import { FcPlanner, FcStatistics, FcCloseUpMode, FcAdvertising, FcTemplate, FcHome, FcPuzzle, FcGlobe } from "react-icons/fc";
import FileUpload from '../../components/fileuploader'
import { MdCollections, MdVideoCall, MdOutlineEventNote } from "react-icons/md";
import ModalBox from '../../components/modalbox'
import { useEffect, useState } from 'react'
import instance from '../../utils/axios'

export default withAuth(function Home() {

  const users = [
    {
      "name": "Ann augustine",
      "avatar": "/assets/avatars/ann.jpg"
    },
    {
      "name": "Aron dupa",
      "avatar": "/assets/avatars/Aron.jpg"
    },
    {
      "name": "Gregor Thomas",
      "avatar": "/assets/avatars/gregor.jpg"
    },
    {
      "name": "Imran hashmi",
      "avatar": "/assets/avatars/imran.jpg"
    },
    {
      "name": "John Lucas",
      "avatar": "/assets/avatars/john.jpg"
    },
    {
      "name": "Eddin Marquez",
      "avatar": "/assets/avatars/marquez.jpg"
    },
    {
      "name": "Jones mendis",
      "avatar": "/assets/avatars/mendis.jpg"
    },
    {
      "name": "Mia johnas",
      "avatar": "/assets/avatars/mia.jpg"
    },
    {
      "name": "Noel rebera",
      "avatar": "/assets/avatars/noel.jpg"
    },
    {
      "name": "Samuel R",
      "avatar": "/assets/avatars/samuel.jpg"
    },
    {
      "name": "Sangeetha Krishnan",
      "avatar": "/assets/avatars/sangeetha.jpg"
    },
    {
      "name": "Sanidhul",
      "avatar": "/assets/avatars/sanidhul.jpg"
    },
  ]

  // const [post,setPost] = useState([])

  // const getPosts = async() =>{
  //   const data = await instance.get('/post')
  //   console.log(data)
  //   setPost(data.data)
  // }

  // useEffect(() => {
  //   getPosts()
  // }, [])

  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Navbar currentPage="home" />
      <div className={styles.home}>
        <div className={styles.sidebar}>
          <span><FcHome />Groups</span>
          <span><FcPuzzle />Activities</span>
          <span><FcAdvertising />Community</span>
          <span><FcTemplate />Pages</span>
          <span><FcPlanner />Events</span>
          <span><FcStatistics />Grow Audience</span>
          <span><FcGlobe />Explore</span>
          <span><FcCloseUpMode />Promotions</span>
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.btngroup}>
              <img className={styles.profileImage} src="/assets/avatars/gregor.jpg" />
              <input className={styles.text} type="button" value="Write something" onClick={handleClick} />
            </div>
            <div className={styles.options}>
              <FileUpload type="button" text="Photo" icon={MdCollections} iconColor="green" onClick={handleClick} />
              <FileUpload type="button" text="Video" icon={MdVideoCall} iconColor="red" />
              <FileUpload type="button" text="Create Event" icon={MdOutlineEventNote} iconColor="yellow" />
            </div>
          </div>
          {
            posts.map((item, index) => {
              return (
                <PostCard key={index} {...item} />
              )
            })
          }
        </div>
        <div className={styles.activeUsers}>
          <h3>Active users</h3>
          {
            users.map((item, index) => {
              return (
                <Activeuser key={index} {...item} />
              )
            })
          }
        </div>
      </div>
      {showModal && <ModalBox onClick={closeModal} />}
    </>
  )
}
)