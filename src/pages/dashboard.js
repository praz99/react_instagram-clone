import React, { useEffect } from 'react';

function Dashboard() {
  useEffect(() => {
    document.title = 'Instagram';
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
