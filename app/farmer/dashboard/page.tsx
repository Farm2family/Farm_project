"use client";

import { useRouter } from "next/navigation";
import "./dashboard.css";

function Page() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>🌾 Farmer Dashboard</h1>
        <p>Welcome to the Farm2Family Farmer Portal</p>

        <div className="dashboard-stats">
          <div className="stat-box">
            <h3>Products</h3>
            <span>0</span>
          </div>

          <div className="stat-box">
            <h3>Orders</h3>
            <span>0</span>
          </div>

          <div className="stat-box">
            <h3>Revenue</h3>
            <span>₹0</span>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Page;    