import { NextPage } from 'next/types';
import DashboardLayout from '../../layouts/DashboardLayout';
import DataViewLayout from '../../layouts/DataViewLayout';

const ChartsPage: NextPage = () => (
  <DashboardLayout>
    <DataViewLayout title="Charts">
      <h1>Chart Page</h1>
    </DataViewLayout>
  </DashboardLayout>
);

export default ChartsPage;
