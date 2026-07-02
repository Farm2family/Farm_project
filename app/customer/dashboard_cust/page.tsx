"use client";

import { useRouter } from "next/navigation";


function Page() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    
        <div>

        <button
  onClick={handleLogout}
  style={{
    backgroundColor: "#d32f2f",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  }}
>
  Logout
</button>
      </div>
   
  );
}

export default Page;    