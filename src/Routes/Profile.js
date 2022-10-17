import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import Post from "../Post";
import { useState } from "react";

const tempProfile = {
  profile: "iamdooddi",
  profileImg:
    "https://res.cloudinary.com/dl5qaj6le/image/upload/v1666007949/archive/static/profile_temp.jpg",
  archiveCount: 812,
  followerCount: 9,
  followingCount: 19,
  introduction: "오래 속삭여도 좋을 이야기를 좋아합니다",
  grid: [
    {
      title: "노티드",
      mainTag: "카페",
      subTags: ["도넛", "디저트"],
      img: "https://res.cloudinary.com/dl5qaj6le/image/upload/v1664891643/archive/static/carousel_temp.png",
    },
    {
      title: "노티드",
      mainTag: "카페",
      subTags: ["도넛", "디저트"],
      img: "https://res.cloudinary.com/dl5qaj6le/image/upload/v1664891643/archive/static/carousel_temp.png",
    },
    {
      title: "노티드",
      mainTag: "카페",
      subTags: ["도넛", "디저트"],
      img: "https://res.cloudinary.com/dl5qaj6le/image/upload/v1664891643/archive/static/carousel_temp.png",
    },
  ],
};

function Profile() {
  const cx = classNames.bind(styles);
  const buttons = ["grid", "tag", "scrap"];
  const [pageNum, setPageNum] = useState(0);
  return (
    <div>
      <div className={styles.profileCont}>
        <div className={styles.profileTxtCont}>
          <h1 className={styles.profile}>{tempProfile.profile}</h1>
          <div className={styles.countCont}>
            <div>
              <div className={styles.countTxt}>아카이브</div>
              <div>{tempProfile.archiveCount}</div>
            </div>
            <div>
              <div className={styles.countTxt}>팔로워</div>
              <div>{tempProfile.followerCount}</div>
            </div>
            <div>
              <div className={styles.countTxt}>팔로잉</div>
              <div>{tempProfile.followingCount}</div>
            </div>
          </div>
        </div>
        <img className={styles.profileImg} src={tempProfile.profileImg} />
      </div>
      <div className={styles.introduction}>{tempProfile.introduction}</div>
      <div className={styles.buttonCont}>
        {buttons.map((each, i) => (
          <div
            className={cx({
              button: true,
              "button--selected": i === pageNum ? true : false,
            })}
            onClick={() => setPageNum(i)}
          >
            {each}
          </div>
        ))}
      </div>
      <div className={styles.postCont}>
        {pageNum === 0 ? (
          tempProfile.grid.map((each) => <Post type="thumbnail" data={each} />)
        ) : pageNum === 1 ? (
          <>tag</>
        ) : pageNum === 2 ? (
          <>scrap</>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Profile;
