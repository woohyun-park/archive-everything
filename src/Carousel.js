import "./Carousel.scss";

function Carousel() {
  return (
    <>
      <div className="carousel">
        <div className="carousel__wrap">
          <div className="carousel__bgCont">
            <img
              className="carousel__bg"
              src="http://tnnews.co.kr/wp-content/uploads/2020/06/KakaoTalk_20200626_1805315040.jpg"
              alt="carousel__bg"
            />
            <div className="carousel__bgOverlay"></div>
          </div>
          <div className="carousel__cont">
            <div className="carousel__titleCont">
              <div className="carousel__title">노티드</div>
            </div>
            <div className="carousel__tagCont">
              <div className="carousel__mainTag">#카페</div>
              <div className="carousel__subTagCont">
                <div className="carousel__subTag">#도넛</div>
                <div className="carousel__subTag">#디저트</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
