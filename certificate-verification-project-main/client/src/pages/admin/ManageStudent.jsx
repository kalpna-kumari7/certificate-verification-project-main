import React, { useEffect, useState } from "react";

const ManageStudent = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editStudent, setEditStudent] = useState(null);
  const [loader, setLoader] = useState(false);
  const token = localStorage.getItem("token");

  /* ================= FETCH STUDENTS ================= */
  const fetchStudents = async () => {
    try {
      setLoader(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/student/all`, {
        method: "get",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setStudents(data.data || []);
    } catch (err) {
      console.error("Fetch error", err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  /* ================= SEARCH + FILTER ================= */
  const filteredStudents = students.filter((s) => {
    const matchSearch =
      s.name?.toLowerCase().includes(search.toLowerCase()) ||
      s.student_id?.toLowerCase().includes(search.toLowerCase());

    const matchStatus = statusFilter === "All" || s.certificate_status === statusFilter;

    return matchSearch && matchStatus;
  });

  /* ================= DELETE ================= */
  const handleDelete = async (studentId) => {
    if (!window.confirm("Are you sure to delete this student?")) return;

    try {
      setLoader(true);
      await fetch(`${import.meta.env.VITE_API_URL}/student/delete/${studentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      setStudents((prev) => prev.filter((s) => s.student_id !== studentId));
      alert("Student deleted successfully ✅");
    } catch (err) {
      alert("Delete failed ❌");
    } finally {
      setLoader(false);
    }
  };

  /* ================= VIEW ================= */
  const handleView = (student) => {
    alert(
      `Name: ${student.name}
Student ID: ${student.student_id}
Certificate Status: ${student.isCertificateIssued ? "issued" : "not issued"}`
    );
  };

  /* ================= UI ================= */
  return (
    <div className="container my-4">
      <div className="card shadow border-0">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Manage Students</h5>
        </div>

        {/* SEARCH & FILTER */}
        <div className="card-body border-bottom">
          <div className="row g-2">
            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Search by name or student ID"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <select
                className="form-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Certificate Status</option>
                <option value="Certificate Pending">Certificate Pending</option>
                <option value="Certificate Issued">Certificate Issued</option>
                <option value="Certificate Not Issued">Certificate Not Issued</option>
              </select>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Certificate Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {loader ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No records found
                  </td>
                </tr>
              ) : (
                filteredStudents.map((s) => (
                  <tr key={s.student_id}>
                    <td>{s.student_id}</td>
                    <td>{s.name}</td>
                    <td>
                      {/* <span
                        className={`badge ${
                          s.isCertificateIssued === "Certificate Issued"
                            ? "bg-success"
                            : s.isCertificateIssued ===
                              "Certificate Not Issued"
                            ? "bg-danger"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {s.isCertificateIssued}
                      </span> */}
                      {s.isCertificateIssued ? "Issued✅" : "not issued"}
                    </td>

                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline-info me-2"
                        onClick={() => handleView(s)}
                      >
                        View
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(s.student_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageStudent;
