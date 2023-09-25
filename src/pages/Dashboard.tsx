import 'chart.js/auto';

import { Bar, Doughnut } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';

import Card from '../components/core/Card';
import DashboardLayout from '../layouts/DashboardLayout';
import { faker } from '@faker-js/faker';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: '#088b96',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: '#c79507',
    },
  ],
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const doughnutOptions = {
    data: {
      datasets: [
        {
          data: [11, 39, 50],
          backgroundColor: ['#088b96', '#0081F7', '#c79507'],
          label: 'Dataset 1',
        },
      ],
      labels: ['Shoes', 'Shirts', 'Bags'],
    },
    options: {
      responsive: true,
      cutoutPercentage: 80,
    },
    legend: {
      display: false,
    },
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-center w-full h-full ">
        <section className="w-full p-4 space-y-4 ">
          <div className="flex flex-wrap w-full space-x-4 space-y-4 text-slate-500 dark:text-slate-300 rtl:space-x-reverse ">
            <Card className="flex-1 first:mt-4 first:ml-4">
              <div className="flex items-center h-32 space-x-4 rtl:space-x-reverse">
                <div className="flex items-center justify-center p-2 bg-green-300 rounded-full w-14 h-14">
                  <span className="i-solar-ticket-broken text-2xl text-green-700 "></span>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-black">$5.670</h1>
                  <span className="text-xs ">Earned this month</span>
                </div>
              </div>
            </Card>
            <Card className="flex-1">
              <div className="flex items-center justify-center h-32 space-x-4 rtl:space-x-reverse min-w-max">
                <div className="flex items-center justify-center p-2 rounded-full w-14 h-14 bg-slate-100">
                  <span className="i-solar-user-broken text-2xl text-slate-500"></span>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-black">+78</h1>
                  <span className="text-xs ">New clients</span>
                </div>
              </div>
            </Card>
            <Card className="flex-1">
              <div className="flex items-center justify-center h-32 space-x-4 rtl:space-x-reverse min-w-max">
                <div className="flex items-center justify-center p-2 bg-yellow-200 rounded-full w-14 h-14">
                  <span className="i-solar-box-broken text-2xl text-yellow-500"></span>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-black">+1426</h1>
                  <span className="text-xs ">Articles sold</span>
                </div>
              </div>
            </Card>
            <Card className="flex-1">
              <div className="flex items-center justify-center h-32 space-x-4 rtl:space-x-reverse min-w-max">
                <div className="flex items-center justify-center p-2 bg-pink-200 rounded-full w-14 h-14">
                  <span className="i-solar-chat-dots-broken text-2xl text-pink-500"></span>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-black">28</h1>
                  <span className="text-xs ">Pending contacts</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col w-full space-x-4 space-y-4 rtl:pl-1 md:flex-row charts rtl:space-x-reverse">
            <Card className="flex items-center md:w-4/12 first:mt-4 first:ml-4">
              <Doughnut {...doughnutOptions} />
            </Card>
            <Card className="md:w-8/12">
              <Bar options={options} data={data} />
            </Card>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
