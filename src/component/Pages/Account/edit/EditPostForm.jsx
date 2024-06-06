import styles from "./EditPostForm.module.scss";
import CancelIcon from "@material-ui/icons/Cancel";
import { useEffect, useState } from "react";
import Button from "../Button"; 

export const EditPostForm = (props) => {

//   const [postTitle, setPostTitle] = useState(props.selectedPost.title)
//   const [postDesc, setPostDesc] = useState(props.selectedPost.description)

//   const handlePostTitleChange = (e) => {
//     setPostTitle(e.target.value)
//   };

//   const handlePostDescChange = (e) => {
//     setPostDesc(e.target.value)
//   };

//   const savePost = (e) => {
//     e.preventDefault()
//     const post = {
//       id: props.selectedPost.id,
//       title: postTitle,
//       description: postDesc,
//       liked: props.selectedPost.liked,
//     }

//     props.editBlogPost(post);
//     props.handleEditFormHide()
//   }


  const handleEditFormHide = props.handleEditFormHide;
  return (
    <>
      <form className={styles.editPostForm}
    //    onSubmit={savePost}
       >
        <button className={styles.hideBtn}
        onClick={handleEditFormHide}
        >
          <CancelIcon />
        </button>
        <h2>Редактирование команды</h2>
        <div>
          <input
            className={styles.editFormInput}
            type="text"
            name="postTitle"
            placeholder="Название команды"
            // value={postTitle}
            // onChange={handlePostTitleChange}
            required
          />
        </div>
        <div>
          <textarea
            className={styles.editFormInput}
            name="postDescription"
            placeholder="Описание команды"
            // value={postDesc}
            // onChange={handlePostDescChange}
            rows={8}
            required
          />
        </div>
        <div>
          <button
            className={styles.blackBtn}
            type="submit"
          >
            <Button text={'Сохранить'}/>
          </button>
        </div>
      </form>
      <div onClick={handleEditFormHide} className={styles.overlay}></div>
    </>
  );
}