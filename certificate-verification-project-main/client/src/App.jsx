import { RouterProvider } from "react-router-dom";
import  router from "./routes/App.routes";
import "./assets/css/ui.css";
import "./assets/css/admindashboard.css";
import "./assets/css/VerifyCertificate.css";
import "./assets/css/DashboardHome.css";
import "./assets/css/UploadStudent.css";
import "./assets/css/StudentSidebar.css";
import "./assets/css/Team.css";



function App() {
  return <RouterProvider router={router} />;
}

export default App;
