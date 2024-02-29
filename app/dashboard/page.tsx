import { Metadata } from 'next';
import DashboardClient from './client';

export const metadata: Metadata = {
  title: 'celerCV | Dashboard',
  description: ''
};

const Dashboard = () => {
  return <DashboardClient />;
};

export default Dashboard;
