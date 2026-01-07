// import React, { useEffect, useState } from "react";
// import DashboardHeader from "../../components/StudentHeader";

// const API = "https://certify-ztws.onrender.com";

// const StudentDashboardHome = () => {
//   const studentId = "STU-2025-021"; // 🔑 later auth se aayega

//   const [stats, setStats] = useState({
//     total: 0,
//     verified: 0,
//     pending: 0,
//   });

//   const [loading, setLoading] = useState(true);

//   /* ================= FETCH STUDENT DASHBOARD DATA ================= */
//   const fetchStudentData = async () => {
//     try {
//       const res = await fetch(`${API}/student/${studentId}`);
//       const data = await res.json();

//       const certificates = data.data?.certificates || [];

//       const verified = certificates.filter(
//         (c) => c.status === "Verified" || c.status === "Success"
//       ).length;

//       const pending = certificates.filter(
//         (c) => c.status !== "Verified" && c.status !== "Success"
//       ).length;

//       setStats({
//         total: certificates.length,
//         verified,
//         pending,
//       });
//     } catch (err) {
//       console.error("Student dashboard error", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStudentData();
//   }, []);

//   return (
//     <section className="student-dashboard">
//       {/* DASHBOARD HEADER */}
//       <DashboardHeader
//         name="Kalpna"
//         studentId={studentId}
//         title="Welcome back 👋"
//         subtitle="Track your certificates and activities here"
//       />

//       {/* MAIN CONTENT */}
//       <main className="student-dashboard-content container mt-4">
//         {/* INFO CARD */}
//         <div className="card shadow-sm p-4 mb-4">
//           <h4 className="mb-2">Student Dashboard</h4>
//           <p className="text-muted mb-0">
//             From here you can view certificates, check verification status,
//             and download issued certificates.
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="row g-3">
//           <StatCard
//             title="Total Certificates"
//             value={loading ? "..." : stats.total}
//             color="primary"
//           />

//           <StatCard
//             title="Verified"
//             value={loading ? "..." : stats.verified}
//             color="success"
//           />

//           <StatCard
//             title="Pending"
//             value={loading ? "..." : stats.pending}
//             color="warning"
//           />
//         </div>
//       </main>
//     </section>
//   );
// };

// /* ================= SMALL COMPONENT ================= */

// const StatCard = ({ title, value, color }) => (
//   <div className="col-md-4">
//     <div className="card text-center p-3 shadow-sm h-100">
//       <h5>{title}</h5>
//       <p className={`fs-4 fw-bold text-${color}`}>
//         {value}
//       </p>
//     </div>
//   </div>
// );

// export default StudentDashboardHome;


import React, { useEffect, useState } from "react";
import DashboardHeader from "../../components/StudentHeader";

const API = "https://certify-ztws.onrender.com";

const StudentDashboardHome = () => {
  const studentId = "STU-2025-021"; // 🔑 later login se aayega

  const [stats, setStats] = useState({
    total: 0,
    verified: 0,
    pending: 0,
  });

  const [studentName, setStudentName] = useState("");
  const [loading, setLoading] = useState(true);

  /* ================= FETCH STUDENT DASHBOARD DATA ================= */
  const fetchStudentData = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token"); // if protected

      const res = await fetch(`${API}/student/${studentId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // remove if not required
        },
      });

      const result = await res.json();

      const student = result?.data || {};
      const certificates = student.certificates || [];

      const verified = certificates.filter(
        (c) =>
          c.status === "Certificate Issued" ||
          c.status === "Verified" ||
          c.status === "Success"
      ).length;

      const pending = certificates.filter(
        (c) =>
          c.status !== "Certificate Issued" &&
          c.status !== "Verified" &&
          c.status !== "Success"
      ).length;

      setStudentName(student.name || "");

      setStats({
        total: certificates.length,
        verified,
        pending,
      });
    } catch (err) {
      console.error("Student dashboard error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <section className="student-dashboard">
      {/* DASHBOARD HEADER */}
      <DashboardHeader
        name={studentName}
        studentId={studentId}
        title="Welcome back 👋"
        subtitle="Track your certificates and activities here"
      />

      {/* MAIN CONTENT */}
      <main className="student-dashboard-content container mt-4">
        {/* INFO CARD */}
        <div className="card shadow-sm p-4 mb-4">
          <h4 className="mb-2">Student Dashboard</h4>
          <p className="text-muted mb-0">
            From here you can view certificates, check verification status,
            and download issued certificates.
          </p>
        </div>

        {/* STATS */}
        <div className="row g-3">
          <StatCard
            title="Total Certificates"
            value={loading ? "..." : stats.total}
            color="primary"
          />
          <StatCard
            title="Issued / Verified"
            value={loading ? "..." : stats.verified}
            color="success"
          />
          <StatCard
            title="Pending"
            value={loading ? "..." : stats.pending}
            color="warning"
          />
        </div>
      </main>
    </section>
  );
};

/* ================= SMALL COMPONENT ================= */

const StatCard = ({ title, value, color }) => (
  <div className="col-md-4">
    <div className="card text-center p-3 shadow-sm h-100">
      <h5>{title}</h5>
      <p className={`fs-4 fw-bold text-${color}`}>{value}</p>
    </div>
  </div>
);

export default StudentDashboardHome;
