// import React, { useState } from "react";
// import openEye from "../../../assets/eye-solid-full.svg";
// import closeEye from "../../../assets/eye-slash-solid-full.svg";
// import { Link } from "react-router-dom";

// export default function Login() {
//   const [displayPassword, setDisplayPassword] = useState(false);
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="flex flex-col items-center justify-center align-center bg-[#C1440E] p-10 m-50">
//         <h1 className="text-[#FFF8F0] font-bold text-4xl">Admin Login</h1>
//         <form className="items-center justify-center align-center flex flex-col p-5  gap-2">
//           <div className="items-center justify-center align-center flex flex-col">
//             <input
//               type="text"
//               placeholder="Email"
//               className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
//             />
//             <br />
//             <div className="flex w-130 bg-[#FFF8F0] border-[2px] border-[#2D2D2D] rounded-[5px]">
//               <input
//                 type={displayPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="text-[#2D2D2D] w-[90%] h-13 p-5 focus:outline-none"
//               />
//               <img
//                 src={displayPassword ? openEye : closeEye}
//                 className="w-[10%] h-[5%] p-1"
//                 onClick={() => setDisplayPassword(!displayPassword)}
//               />
//             </div>
//             <br />
//           </div>
//           <Link to="/admin-dashboard">
//             <button className="flex flex-col bg-[#FFF8F0] p-3 text-[#C1440E] justify-center items-center font-bold text-2xl rounded-md hover:bg-[#2D2D2D]">
//               Log In
//             </button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import openEye from "../../../assets/eye-solid-full.svg";
import closeEye from "../../../assets/eye-slash-solid-full.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [displayPassword, setDisplayPassword] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/admin/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // important for cookies
        body: JSON.stringify({ adminUsername, adminPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/admin-dashboard"); // redirect if success
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center align-center bg-[#C1440E] p-10 m-50">
        <h1 className="text-[#FFF8F0] font-bold text-4xl">Admin Login</h1>
        <form
          onSubmit={handleLogin}
          className="items-center justify-center align-center flex flex-col p-5 gap-2"
        >
          <div className="items-center justify-center align-center flex flex-col">
            <input
              type="text"
              placeholder="Username"
              value={adminUsername}
              onChange={(e) => setAdminUsername(e.target.value)}
              className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
            />
            <br />
            <div className="flex w-130 bg-[#FFF8F0] border-[2px] border-[#2D2D2D] rounded-[5px]">
              <input
                type={displayPassword ? "text" : "password"}
                placeholder="Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="text-[#2D2D2D] w-[90%] h-13 p-5 focus:outline-none"
              />
              <img
                src={displayPassword ? openEye : closeEye}
                className="w-[10%] h-[5%] p-1 cursor-pointer"
                onClick={() => setDisplayPassword(!displayPassword)}
              />
            </div>
            <br />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="flex flex-col bg-[#FFF8F0] p-3 text-[#C1440E] justify-center items-center font-bold text-2xl rounded-md hover:bg-[#2D2D2D]"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
