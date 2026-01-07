import React, { useState } from "react";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!certificateId.trim()) {
      return setError("Please enter a Certificate ID");
    }

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/certificate/verify/${certificateId}`
      );

      const data = await response.json();

      // if (!response.ok || !data?.isCertificateIssued) {
      //   setResult({
      //     isCertificateIssued: false,
      //     message: data?.message || "Invalid Certificate ID",
      //   });


      //   return;
      // }

      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  console.log(result);

  return (
    <div className="dashboard-verify p-3">
      <div className="verify-box">
        <h3 className="verify-title">Certificate Verification</h3>

        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            disabled={loading}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify Certificate"}
          </button>
        </form>

        {/* ERROR */}
        {error && <p className="error-text">{error}</p>}

        {/* RESULT */}
        {result && (
          <div
          
          >
            {result.success ? (
              <>
                <p><strong>Status:</strong> Valid ✅</p>
                <p><strong>Name:</strong> {result.data.name}</p>
                <p><strong>Internship Domain:</strong> {result.data.internship_domain}</p>
                <p>
                  <strong>Issued On:</strong>{" "}
                  {new Date(result.data.issuedAt).toDateString()}
                </p>
              </>
            ) : (
              <p> {result.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyCertificate;
