import React, { useContext } from "react"
import "./Article.css"
import { useParams, useNavigate } from "react-router-dom"
import { ArticleContext } from "./ArticleProvider"
import { Link } from "react-router-dom"
import { Button } from "bootstrap"
import { useState } from "react"
import { Modal } from "bootstrap"

export const ArticleCard = ({article}) => {
    const {getAnimalById, deleteArticle} = useContext(ArticleContext)
    const navigate = useNavigate()
    const {articleId} = useParams

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    const handleTimestamp = ""
    
    const handleDelete = () => {
        deleteArticle(article.id)
        .then(() => {
          navigate("/articles")
        })
      }
    
    return (
    <section className="article">
        <h3 className="articleTitle">{article.title}</h3>
        <div className="articleSynopsis">{article.synopsis}</div>
        <a href={article.url} target="_blank" className="articleURL">Read Article<br></br></a>
        <button onClick={() => {
    navigate(`/articles/edit/${article.id}`)}}
    >Edit</button>
    <button onClick={handleDelete}>Delete Article</button>
    
     <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </section>
)
}

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

