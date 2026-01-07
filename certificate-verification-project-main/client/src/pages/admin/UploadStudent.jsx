import React, { useState } from "react";
import * as XLSX from "xlsx";

const API = "https://certify-ztws.onrender.com";

const StudentUpload = () => {
  const [fileName, setFileName] = useState("");
  const [previewData, setPreviewData] = useState([]);
  const [excelFile, setExcelFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [message, setMessage] = useState("");

  /* ================= FILE HANDLER ================= */
  const handleFile = (file) => {
    if (!file) return;

    const allowedTypes = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "text/csv",
    ];

    if (!allowedTypes.includes(file.type)) {
      setMessage("❌ Please upload a valid Excel file");
      return;
    }

    setExcelFile(file);
    setFileName(file.name);
    setMessage("");

    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);
      setPreviewData(json.slice(0, 5));
    };

    reader.readAsBinaryString(file);
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files[0]);
  };

  /* ================= DRAG & DROP ================= */
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => setDragActive(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files[0]);
  };

  /* ================= UPLOAD ================= */
  const handleUpload = async () => {
    if (!excelFile) {
      setMessage("❌ Please select an Excel file");
      return;
    }

    const formData = new FormData();
    formData.append("excelFile", excelFile); // MUST match multer

    try {
      setLoader(true);
      setMessage("");

      const response = await fetch(`${API}/student/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Upload failed");
      }

      setMessage("✅ Excel uploaded successfully");
      setExcelFile(null);
      setFileName("");
      setPreviewData([]);
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoader(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="container my-4">
      <div className="card shadow border-0">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Admin • Student Excel Upload</h5>
        </div>

        <div className="card-body">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("excelInput").click()}
            className={`border border-2 rounded p-4 text-center mb-3
              ${dragActive ? "border-primary bg-light" : "border-secondary"}`}
            style={{ cursor: "pointer" }}
          >
            <p className="fw-semibold mb-1">Drag & Drop Excel file here</p>
            <p className="text-muted mb-0">or click to browse</p>

            <input
              id="excelInput"
              type="file"
              accept=".xlsx,.xls,.csv"
              hidden
              onChange={handleFileChange}
            />
          </div>

          {fileName && <p className="text-success">✔ {fileName}</p>}

          {previewData.length > 0 && (
            <pre className="bg-light p-2 rounded small">
              {JSON.stringify(previewData, null, 2)}
            </pre>
          )}

          <button
            className="btn btn-primary"
            onClick={handleUpload}
            disabled={loader}
          >
            {loader ? "Uploading..." : "Upload Excel"}
          </button>

          {message && <p className="mt-3 fw-semibold">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default StudentUpload;