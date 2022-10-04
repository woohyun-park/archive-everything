import Carousel from "./Carousel";
import styles from "./Post.module.scss";
import { MdMoreHoriz } from "react-icons/md";

const tempPost = {
  profile: "iamdooddi",
  profileImg:
    "https://res.cloudinary.com/dl5qaj6le/image/upload/v1664891276/archive/static/profile_temp.png",
  date: "6시간 전",
};

function Post() {
  return (
    <>
      <div className={styles.post}>
        <div className={styles.post__firstCont}>
          <div className={styles.post__profileCont}>
            <img
              className={styles.post__profileImg}
              src={tempPost.profileImg}
              alt="post__profileImg"
            ></img>
            <div className={styles.post__profile}>
              <div className={styles.post__profileTxt}>{tempPost.profile}</div>
              <div className={styles.post__date}>{tempPost.date}</div>
            </div>
          </div>
          <MdMoreHoriz className={styles.post__more} size={"24px"} />
        </div>
        <Carousel />
      </div>
    </>
  );
}

export default Post;
