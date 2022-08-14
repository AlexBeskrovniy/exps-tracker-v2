import moment from 'moment';
import { useRecordsContext } from '../../providers/RecordsProvider';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const chartInfoHandler = (data) => {
    const result = data.reduce((accum, curent) => {
        const date = moment(curent.createdAt).format('MMM Do YY');
        if(!accum[date]) {
          accum[date] = curent.money;
        } else {
          accum[date] += curent.money;
        }
        return accum;
      }, {});
    
      const labels = [];
      const spents = [];
      Object.entries(result).map(([ date, money ]) => {
        labels.unshift(date);
        spents.unshift(money);
      });

      return { labels: labels, spents: spents };
  }

export const MainChart = () => {
  const { records } = useRecordsContext();
	const thisMonthRecords = records.filter(record => record.createdAt > moment().startOf('month').toISOString());
  const finalInfo = chartInfoHandler(thisMonthRecords);
    
  const options = {
      plugins: {
          title: {
          display: true,
          text: 'Spents'
          },
      },
      responsive: true,
      interaction: {
          intersect: false
      }
    };
    
  const data = {
      labels: finalInfo.labels,
      datasets: [
          {
          label: 'This month',
          data: finalInfo.spents,
          backgroundColor: 'rgb(234, 162, 26)',
          borderColor: 'rgb(234, 162, 26)'
          }
      ]
    };

    return (
        <Bar options={options} data={data} />
    );
}

