import Carousel from "./Carousel";
import "./Post.scss";
import { MdMoreHoriz } from "react-icons/md";

const tempPost = {
  profile: "iamdooddi",
  profileImg:
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/25f6cc38-a49f-45cf-a3a6-578cb0408203/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T034452Z&X-Amz-Expires=86400&X-Amz-Signature=05d1e8e6fa38af6f9e9da9ec32b1c6feb94187c636770f27ec9baa8789f34745&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",
  date: "6시간 전",
};

function Post() {
  return (
    <>
      <div className="post">
        <div className="post__firstCont">
          <div className="post__profileCont">
            <img className="post__profileImg" src={tempPost.profileImg}></img>
            <div className="post__profile">
              <div className="post__profileTxt">{tempPost.profile}</div>
              <div className="post__date">{tempPost.date}</div>
            </div>
          </div>
          <MdMoreHoriz className="post__more" size={"24px"} />
        </div>
        <Carousel />
      </div>
    </>
  );
}

export default Post;
