import styles from "./Carousel.module.scss";

const tempCarousel = {
  title: "노티드",
  mainTag: "카페",
  subTags: ["도넛", "디저트"],
  imgs: [
    "https://res.cloudinary.com/dl5qaj6le/image/upload/v1664891643/archive/static/carousel_temp.png",
  ],
};

function Carousel() {
  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.wrap}>
          <div className={styles.bgCont}>
            <img className={styles.bg} src={tempCarousel.imgs[0]} alt="bg" />
            <div className={styles.bgOverlay}></div>
          </div>
          <div className={styles.cont}>
            <div className={styles.titleCont}>
              <div className={styles.title}>{tempCarousel.title}</div>
            </div>
            <div className={styles.tagCont}>
              <div className={styles.mainTag}>#{tempCarousel.mainTag}</div>
              <div className={styles.subTagCont}>
                <div className={styles.subTag}>#{tempCarousel.subTags[0]}</div>
                <div className={styles.subTag}>#{tempCarousel.subTags[1]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
