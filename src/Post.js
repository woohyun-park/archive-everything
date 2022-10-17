import Carousel from "./Carousel";
import styles from "./Post.module.scss";
import { MdMoreHoriz, MdModeComment } from "react-icons/md";
import {
  BsHeart,
  BsChat,
  BsBookmark,
  BsHeartFill,
  BsChatFill,
  BsBookmarkFill,
} from "react-icons/bs";

const tempPost = {
  profile: "iamdooddi",
  profileImg:
    "https://res.cloudinary.com/dl5qaj6le/image/upload/v1664891276/archive/static/profile_temp.png",
  date: "6시간 전",
  likeCount: 8,
  likeDesc: "blu_galore님 외 7명이 좋아합니다",
  commentCount: 12,
};

function Post({ type = "normal", data = tempPost }) {
  const onProfileClick = () => {
    console.log("onProfileClick");
  };
  const onPostClick = () => {
    console.log("onPostClick");
  };
  const onMoreClick = () => {
    console.log("onMoreClick");
  };
  const onLikeClick = () => {
    console.log("onLikeClick");
  };
  const onCommentClikc = () => {
    console.log("onCommentClick");
  };
  const onSaveClick = () => {
    console.log("onSaveClick");
  };
  const onLikeTextClick = () => {
    console.log("onLikeTextClick");
  };
  const onCommentTextClick = () => {
    console.log("onLikeTextClick");
  };
  return type === "normal" ? (
    <>
      <div className={styles.post}>
        <div className={styles.firstCont}>
          <div className={styles.profileCont}>
            <img
              className={styles.profileImg}
              src={data.profileImg}
              alt="profileImg"
              onClick={onProfileClick}
            ></img>
            <div className={styles.profile}>
              <div className={styles.profileTxt} onClick={onProfileClick}>
                {data.profile}
              </div>
              <div className={styles.date}>{data.date}</div>
            </div>
          </div>
          <MdMoreHoriz className={styles.more} size={"24px"} />
        </div>
        <Carousel />
        <div className={styles.secondCont}>
          <div className={styles.secondContLeft}>
            <div className={styles.likeCont}>
              <BsHeart className={styles.like} size="24px" />
              <div className={styles.likeTxt}>좋아요 {data.likeCount}</div>
            </div>
            <div className={styles.commentCont}>
              <BsChat className={styles.comment} size="24px" />
              <div className={styles.commentTxt}>댓글 {data.commentCount}</div>
            </div>
          </div>
          <BsBookmark className={styles.save} size="24px" />
        </div>
        <div className={styles.likeWho}>{data.likeDesc}</div>
      </div>
    </>
  ) : type === "thumbnail" ? (
    <Carousel type="thumbnail" />
  ) : (
    <></>
  );
}

export default Post;
