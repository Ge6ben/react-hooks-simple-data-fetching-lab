import React,{useEffect ,useState} from 'react'

export default function App() {
    // const [state, setState] = useState(false)
    const [imgUrl, setImgUrl] = useState(null)
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json()
             )
            .then((data)=> setImgUrl(data.message))
    
    }, [])
    if (!imgUrl)
        return <p>Loading...</p>
    return (
        <div>
            <img src={imgUrl} alt="A Random Dog"/>
        </div>
    )
}
















// import React, { useState, useEffect } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   //since the id values are the same as the keys in formData, we can write an abstract setFormData here
//   function handleChange(event) {
//     setFormData({
//       ...formData,
//       [event.target.id]: event.target.value,
//     });
//     }
//     useEffect(() => {
//         fetch("https://reqres.in/api/users", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 name: 'Panda 1',
//                 phone:'000011'
//             })
//         })
//               .then((res) => {
//                 return res.json();
//               })
//               .then((data) => console.log(data))
//               .catch((error) => console.log(error.message))
          
//     },[])
    
//     console.log(formData);

//   return (
//     <form>
//       <input
//         type="text"
//         id="username"
//         value={formData.username}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         id="password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <button type="submit" >
//         Submit
//       </button>
//     </form>
//   );
// }
// export default App;
