//!nimagadir stylarrni tog'rilolmadim

// import  { useState, useEffect } from 'react';
// import movieIcon from '../../icons/movieIcon.svg';

// function TrendingMovies() {
//   const apiKey = 'Z06JP4Z-N3NMDS9-N2MV574-9T28R04';
//   const apiUrl = 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&top250';

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl, {
//           method: 'GET',
//           headers: {
//             'X-API-KEY': apiKey,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const jsonData = await response.json();
//         setData(jsonData.docs);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [apiUrl, apiKey]);

//   return (
//     <div>
//       <h2 className="text-3xl mb-6">Trending</h2>
//       <div className="w-[80vw] overflow-x-auto overflow-y-hidden flex gap-4">
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           data.map((el, index) => (
//             <div key={index} className="relative h-40 w-60">
//               <img
//                 className="absolute rounded-lg"
//                 src={el.backdrop.previewUrl}
//                 alt="movie picture"
//               />
//               <div className="text-white absolute">
//                 <div className="flex gap-3">
//                   <span> {el.year} </span> ● <img src={movieIcon} alt="" />
//                   <span> {el.type} </span> ● <span> {el.ageRating} </span>
//                 </div>
//                 <h2> {el.alternativeName} </h2>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default TrendingMovies;

import  { useState, useEffect } from 'react';
import movieIcon from '../../icons/movieIcon.svg';

function TrendingMovies() {
  const apiKey = 'Z06JP4Z-N3NMDS9-N2MV574-9T28R04';
  const apiUrl = 'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&top250';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData.docs);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, apiKey]);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-7">Trending</h2>
      <div className="w-[83vw] flex overflow-x-auto h-64 gap-36 mb-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((el, index) => (
            <div key={index} className="">
              <img
                className="w-[250px] mt-14 scale-[1.6] rounded-lg"
                src={el.backdrop.previewUrl}
                alt="movie picture"
              />
              <div className="">
                <div className="flex gap-4 mt-10">
                  <span> {el.year} </span> ● <img src={movieIcon} alt="" />
                  <span> {el.type} </span> ● <span> {el.ageRating} </span>
                </div>
                <h2> {el.alternativeName} </h2>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TrendingMovies;
