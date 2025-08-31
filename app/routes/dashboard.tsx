import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div className="text-2xl font-bold m-2">
      Hey, welcome to the dashboard page!
      <Outlet />
    </div>
  )
};
