function DashboardCard({ title, value, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h1>{value}</h1>
      <p>{children}</p>
    </div>
  );
}

export default DashboardCard;