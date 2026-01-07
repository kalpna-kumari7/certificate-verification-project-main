import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardHeader from "../../components/StudentHeader";
import { FaEye, FaDownload, FaClock, FaCheckCircle } from "react-icons/fa";

const API = "https://certify-ztws.onrender.com";

const ViewCertificates = () => {
  const [filter, setFilter] = useState("all");
  const [loadingId, setLoadingId] = useState(null);

  const certificates = [
    {
      id: "CERT-2025-REACT-001",
      name: "React Internship Certificate",
      issueDate: "12 Aug 2025",
      status: "Verified",
    },
    {
      id: "CERT-2025-WEB-002",
      name: "Web Development Training",
      issueDate: "05 Jul 2025",
      status: "Pending",
    },
    {
      id: "CERT-2025-JAVA-003",
      name: "Java Programming Certificate",
      issueDate: "20 Jun 2025",
      status: "Verified",
    },
  ];

  const filteredCertificates =
    filter === "all"
      ? certificates
      : certificates.filter(
          (c) => c.status.toLowerCase() === filter
        );

  /* ================= SECURE DOWNLOAD ================= */
  const downloadCertificate = async (id) => {
  try {
    const response = await fetch(
      `https://certify-ztws.onrender.com/certificate/download/${id}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Certificate not found");
    }

    // Convert response to blob (PDF)
    const blob = await response.blob();

    // Create temporary URL
    const url = window.URL.createObjectURL(blob);

    // Create anchor & trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = `${id}.pdf`; // file name
    document.body.appendChild(a);
    a.click();

    // Cleanup
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <section className="student-dashboard">
      {/* HEADER */}
      <DashboardHeader
        name="Kalpna"
        studentId="STU-2025-021"
        title="Your Certificates"
        subtitle="View and download your issued certificates"
      />

      {/* CONTENT */}
      <div className="container mt-4">
        {/* FILTER */}
        <div className="d-flex gap-2 mb-3">
          {["all", "verified", "pending"].map((item) => (
            <button
              key={item}
              className={`btn btn-sm ${
                filter === item
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setFilter(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        {/* CERTIFICATES */}
        <div className="row g-3">
          {filteredCertificates.map((cert) => (
            <div className="col-md-6" key={cert.id}>
              <div className="card shadow-sm p-3 h-100">
                <h5 className="mb-1">{cert.name}</h5>
                <p className="text-muted mb-2">
                  Issued on: {cert.issueDate}
                </p>

                <span
                  className={`badge mb-3 ${
                    cert.status === "Verified"
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}
                >
                  {cert.status === "Verified" ? (
                    <>
                      <FaCheckCircle className="me-1" />
                      Verified
                    </>
                  ) : (
                    <>
                      <FaClock className="me-1" />
                      Pending
                    </>
                  )}
                </span>

                <div className="mt-auto">
                  {/* VERIFY */}
                  <NavLink
                    to={`/student/verify/${cert.id}`}
                    className="btn btn-outline-primary btn-sm me-2"
                  >
                    <FaEye className="me-1" />
                    Verify
                  </NavLink>

                  {/* DOWNLOAD */}
                  <button
                    className="btn btn-outline-success btn-sm"
                    disabled={
                      cert.status !== "Verified" ||
                      loadingId === cert.id
                    }
                    onClick={() => handleDownload(cert.id)}
                  >
                    <FaDownload className="me-1" />
                    {loadingId === cert.id
                      ? "Checking..."
                      : "Download"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <p className="text-center text-muted mt-4">
            No certificates found
          </p>
        )}
      </div>
    </section>
  );
};

export default ViewCertificates;
