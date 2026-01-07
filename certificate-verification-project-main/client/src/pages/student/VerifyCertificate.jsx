import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardHeader from "../../components/StudentHeader";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const VerifyCertificate = () => {
  const { id } = useParams(); // 👈 dynamic certificate id
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Dummy verification (later API call)
    if (id === "CERT-2025-REACT-001") {
      setResult({
        status: "verified",
        name: "Kalpna",
        course: "React Internship Program",
        issueDate: "12 Aug 2025",
        institute: "Tech Academy",
      });
    } else {
      setResult({ status: "invalid" });
    }
  }, [id]);

  return (
    <section className="student-dashboard">
      {/* HEADER */}
      <DashboardHeader
        title="Verify Certificate"
        subtitle="Certificate authenticity check"
      />

      <div className="container mt-4">
        <div className="card shadow-sm p-4">
          <h4 className="mb-3">Certificate ID</h4>
          <p className="fw-bold text-primary">{id}</p>

          {/* RESULT */}
          {result && (
            <>
              {result.status === "verified" ? (
                <div className="alert alert-success mt-3">
                  <h5 className="d-flex align-items-center mb-3">
                    <FaCheckCircle className="me-2" />
                    Certificate Verified
                  </h5>
                  <p><strong>Name:</strong> {result.name}</p>
                  <p><strong>Course:</strong> {result.course}</p>
                  <p><strong>Issue Date:</strong> {result.issueDate}</p>
                  <p><strong>Institute:</strong> {result.institute}</p>
                </div>
              ) : (
                <div className="alert alert-danger mt-3">
                  <h5 className="d-flex align-items-center">
                    <FaTimesCircle className="me-2" />
                    Invalid Certificate
                  </h5>
                  <p>No record found for this certificate.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default VerifyCertificate;
