import React, { useState } from "react";

const API = "https://certify-ztws.onrender.com";

const DownloadCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API}/certificate/download/${certificateId}`);

      if (!response.ok) {
        throw new Error("Invalid Certificate ID or file not found");
      }

      // Server sends PDF
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${certificateId}.pdf`;
      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-verify p-3">
      <div className="verify-box">
        <h3 className="verify-title">Download Certificate</h3>

        <form onSubmit={handleDownload}>
          <input
            type="text"
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Downloading..." : "Download Certificate"}
          </button>
        </form>

        {error && <p className="text-danger mt-2">❌ {error}</p>}
      </div>
    </div>
  );
};

export default DownloadCertificate;
