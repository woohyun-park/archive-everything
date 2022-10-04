import styles from "./Carousel.module.scss";

function Carousel() {
  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.carousel__wrap}>
          <div className={styles.carousel__bgCont}>
            <img
              className={styles.carousel__bg}
              src="https://res.cloudinary.com/dl5qaj6le/image/upload/v1664891643/archive/static/carousel_temp.png"
              alt="carousel__bg"
            />
            <div className={styles.carousel__bgOverlay}></div>
          </div>
          <div className={styles.carousel__cont}>
            <div className={styles.carousel__titleCont}>
              <div className={styles.carousel__title}>노티드</div>
            </div>
            <div className={styles.carousel__tagCont}>
              <div className={styles.carousel__mainTag}>#카페</div>
              <div className={styles.carousel__subTagCont}>
                <div className={styles.carousel__subTag}>#도넛</div>
                <div className={styles.carousel__subTag}>#디저트</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
