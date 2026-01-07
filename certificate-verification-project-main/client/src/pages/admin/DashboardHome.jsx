import { NavLink } from "react-router-dom";
import { MdDomainVerification } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaFileExcel } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const DashboardHome = () => {
  return (
    <div className="dashboard d-flex">
      <div className="content">
        {/* HEADER */}
        <div className="content-header px-4 py-3 border-bottom">
          <h3 className="text-dark mb-0 "><b>Dashboard Overview</b></h3>
          <small className="text-muted">
            Manage students, certificates & verification
          </small>
        </div>

        <div className="content-area p-4">
          {/* STATS */}
          <div className="row g-3 mb-4">
            {[
              { title: "Total Students", count: "2100" },
              { title: "Certificates Issued", count: "1800" },
              { title: "Pending Certificates", count: "300" },
              { title: "Total Downloads", count: "4200" },
            ].map((item, i) => (
              <div key={i} className="col-sm-6 col-xl-3">
               <div className="stat-box shadow-sm p-4 rounded border-start border-4 border-bottom-0">
                  <h3>{item.count}</h3>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ACTION CARDS */}
          <h5 className="text-warning mb-3">Quick Actions</h5>
          <div className="row g-4">
            <ActionCard
              to="upload-student"
              icon={<FaFileExcel size={28} />}
              title="Upload Excel"
              desc="Upload student data using Excel file"
            />

            <ActionCard
              to="manage-student"
              icon={<PiStudentFill size={28} />}
              title="Manage Students"
              desc="View, edit and manage students"
            />

            <ActionCard
              to="/generate-certificate"
              icon={<GrCertificate size={28} />}
              title="Generate Certificate"
              desc="Create & issue certificates"
            />

            <ActionCard
              to="verify-certificate"
              icon={<MdDomainVerification size={28} />}
              title="Certificate Verification"
              desc="Verify certificate authenticity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionCard = ({ to, icon, title, desc }) => {
  return (
    <div className="col-sm-12 col-md-6 col-xl-3">
      <NavLink
        to={to}
        className="action-card d-block p-3 text-decoration-none shadow-sm rounded"
        style={{ transition: "all 0.2s" }}
      >
        <div className="action-icon mb-2">{icon}</div>
        <h6 className="mb-1">{title}</h6>
        <p className="mb-0 text-muted">{desc}</p>
      </NavLink>
    </div>
  );
};

export default DashboardHome;
