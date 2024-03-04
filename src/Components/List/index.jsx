import movieIcon from "../../icons/movieIcon.svg";
import tvSeriesIcon from "../../icons/tvSeriesIcon.svg";
import oval from "../../icons/Oval.svg";
import bookmarkIcon from "../../icons/noSelectedBookmarkIcon.svg";

function List(props) {
  const { docs } = props;

  const handleBookmarkClick = (movie) => {
    const existingBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    const isBookmarked = existingBookmarks.some((item) => item.id === movie.id);

    if (!isBookmarked) {
      const updatedBookmarks = [...existingBookmarks, movie];
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      alert("Bookmark added!");
    } else {
      alert("This movie is already bookmarked!");
    }
  };

  return (
    <div className="flex flex-wrap gap-7 ">
      {docs.map((movie, index) => (
        <div key={index} className="w-72 mb-6  relative">
          <img
            id="addBookmark"
            className="w-4 top-4 right-4 absolute cursor-pointer"
            src={bookmarkIcon}
            onClick={() => handleBookmarkClick(movie)}
          />
          <img
            className="rounded-lg"
            src={movie.backdrop.previewUrl}
            alt={movie.name}
          />
          <div
            className="cursor-pointer"
            onClick={() => document.getElementById(movie.id).showModal()}
          >
            <div className="p-1 flex gap-2 opacity-75">
              {movie.year}
              <img src={oval} alt="" />
              {
                <img
                  src={movie.type == "movie" ? movieIcon : tvSeriesIcon}
                  alt="icon"
                />
              }
              <img src={oval} alt="" />
              {movie.type}
            </div>
            <h2 className="px-1 text-lg font-medium">{movie.name}</h2>
          </div>

          <dialog id={movie.id} className="modal">
            <div className="modal-box bg-black">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={movie.poster.url} alt="Movie" />
                </figure>
                <div className="card-body bg-black">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>{movie.description}</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      ))}
    </div>
  );
}

export default List;
