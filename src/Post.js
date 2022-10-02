import "./Post.scss";

function Post() {
  return (
    <>
      <div className="post">
        <div className="post__wrap">
          <div className="post__bgCont">
            <img
              className="post__bg"
              src="http://tnnews.co.kr/wp-content/uploads/2020/06/KakaoTalk_20200626_1805315040.jpg"
              alt="post__bg"
            />
            <div className="post__bgOverlay"></div>
          </div>
          <div className="post__cont">
            <div className="post__title">노티드</div>
            <div className="post__tagCont">
              <div className="post__mainTag">#카페</div>
              <div className="post__subTagCont">
                <div className="post__subTag">#도넛</div>
                <div className="post__subTag">#디저트</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
