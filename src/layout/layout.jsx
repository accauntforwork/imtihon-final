import movieicon from "../icons/movieLogo.svg";
import { Outlet, useNavigate } from "react-router-dom";
import mainMenyNavbarIcon from "../icons/mainMenyNavbarIcon.svg";
import movieNavbarIcon from "../icons/movieNavbarIcon.svg";
import tvSeriesNavbarIcon from "../icons/tvSeriesNavbarIcon.svg";
import bookmarksNavbarIcon from "../icons/bookmarksNavbarIcon.svg";

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex bg-[#10141E] text-white p-8">
        <div className=" py-10 sticky top-10 px-8 flex flex-col items-center justify-between h-[90vh]  w-[96px] bg-[#161D2F] rounded-[20px]">
          <div>
              <img src={movieicon} alt="movie icon" />
            <div className="flex flex-col gap-10 mt-20 w-9">
              <img
                src={mainMenyNavbarIcon}
                alt=""
                onClick={() => navigate("/mainmeny")}
                className="cursor-pointer"
              />
              <img
                src={movieNavbarIcon}
                alt=""
                onClick={() => navigate("/movies")}
                className="cursor-pointer"

              />
              <img
                src={tvSeriesNavbarIcon}
                alt=""
                onClick={() => navigate("/tvseries")}
                className="cursor-pointer"

              />
              <img
                src={bookmarksNavbarIcon}
                alt=""
                onClick={() => navigate("/bookmarks")}
                className="cursor-pointer"

              />
            </div>
          </div>
        </div>
        <div className="menu">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Layout;
