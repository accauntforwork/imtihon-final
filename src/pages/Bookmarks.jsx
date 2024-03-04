import { useEffect, useState } from "react";
import List from "../Components/List"

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(storedBookmarks);
  }, []);

  return (
    <div>
      <div className="p-[36px]">
      <h2 className="mb-10 text-3xl">Bookmarks</h2>
      <List docs={bookmarks} />
      </div>
    </div>
  )
}

export default Bookmarks