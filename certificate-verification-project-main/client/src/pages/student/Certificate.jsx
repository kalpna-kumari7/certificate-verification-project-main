// import React, { useState } from "react";

// const API = "https://certify-ztws.onrender.com";

// const Certificate = ({ studentId }) => {
//   const [loading, setLoading] = useState(false);

//   const handleDownload = async () => {
//     try {
//       setLoading(true);

//       const token = localStorage.getItem("token"); 

//       const response = await fetch(
//         `${API}/certificate/download/${studentId}`,
//         {
//           method: "GET",
//         }
//       );

//       if (!response.ok) {
//         alert("Certificate download failed ❌");
//         return;
//       }

//       const blob = await response.blob();

//       const url = window.URL.createObjectURL(blob);

//       // 👇 Auto download
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `${studentId}_certificate.pdf`; // file name
//       document.body.appendChild(a);
//       a.click();

//       // 👇 Cleanup
//       a.remove();
//       window.URL.revokeObjectURL(url);
//     } catch (err) {
//       console.error("Download error", err);
//       alert("Something went wrong ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       className="btn btn-success"
//       onClick={handleDownload}
//       disabled={loading}
//     >
//       {loading ? "Downloading..." : "⬇ Download Certificate"}
//     </button>
//   );
// };

// export default Certificate;
