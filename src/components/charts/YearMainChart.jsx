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


export const YearMainChart = () => {
  const { records } = useRecordsContext();
	const thisYearRecords = records.filter(record => record.createdAt > moment().startOf('year').toISOString());
  
  const getMonths = () => {
    const data = {};
    moment.months().reverse().map(month => data[month] = 0);
    return data;
  }
  
  const months = getMonths();

  const chartInfoHandler = (data) => {
    const result = data.reduce((accum, curent) => {
        const date = moment(curent.createdAt).format('MMMM');
        if(!accum[date]) {
          accum[date] = curent.money;
        } else {
          accum[date] += curent.money;
        }
        return accum;
      }, months );
    
      const labels = [];
      const spents = [];
      Object.entries(result).map(([ date, money ]) => {
        labels.unshift(date);
        spents.unshift(money);
      });

      return { labels: labels, spents: spents };
  }
  const finalInfo = chartInfoHandler(thisYearRecords);
    
  const options = {
      plugins: {
          title: {
          display: true,
          text: 'This Year Spents'
          },
          legend: {
            display: false
          }
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
          data: finalInfo.spents,
          backgroundColor: 'rgb(234, 162, 26)',
          borderColor: 'rgb(234, 162, 26)'
          }
      ]
    };

    return (
      <div className="d-flex justify-content-center mx-auto" style={{maxWidth: '800px'}}>
        <Bar options={options} data={data} />
      </div>
    );
}