import DashboardLayout from "./components/DashboardLayout";
import DashboardCard from "./components/DashboardCard";

function App() {
  return (
    <DashboardLayout>
      <div className="grid">

        <DashboardCard title="Total Users" value="1204">
          Active users this month
        </DashboardCard>

        <DashboardCard title="Projects" value="32">
          Ongoing projects
        </DashboardCard>

        <DashboardCard title="Revenue" value="$3,200">
          Last 30 days revenue
        </DashboardCard>

        <DashboardCard title="Active Sessions" value="89">
          Users online right now
        </DashboardCard>

      </div>
    </DashboardLayout>
  );
}

export default App;