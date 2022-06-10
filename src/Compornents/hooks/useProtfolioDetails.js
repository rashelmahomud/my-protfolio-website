// import { useEffect, useState } from "react"

// const useProtfolioDetails = detailsId => {

//     const [service, setService] = useState({});

//     useEffect( () => {
//         const url = `details.json/details/${detailsId}`;
//         console.log(url);
//         fetch(url)
//         .then(res => res.json())
//         .then(data => setService(data))

//     } ,[detailsId] )

//     return [service, setService];
// }
// export default useProtfolioDetails;