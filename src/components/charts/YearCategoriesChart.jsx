import moment from 'moment';
import { useDataContext } from '../../providers/DataProvider';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const YearCategoriesChart = () =>{
    const { records } = useDataContext();
	const thisYearRecords = records.filter(record => record.createdAt > moment().startOf('year').toISOString());
    const finalInfo = () => {
        const result = thisYearRecords.reduce((accum, record) => {
            const name = record.categoryName ? record.categoryName : "No category"
            if (!accum[name]) {
                accum[name] = record.money;
            } else {
                accum[name] += record.money;
            }
            return accum;
        }, {});
        
        const labels = [];
        const spents = [];
        Object.entries(result).map(([ name, money ]) => {
            labels.unshift(name);
            spents.unshift(money);
        });

        return { labels: labels, spents: spents }
    }
    
    const chartInfo = finalInfo();

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'This Year Spents By Categories'
            },
            legend: {
                position: 'bottom',
                labels: {
                    padding: 15,
                    usePointStyle: true
                }
              }
        },
        responsive: true,
        interaction: {
            intersect: false
        }
      };

    const data = {
        labels: chartInfo.labels,
        datasets: [
          {
            data: chartInfo.spents,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(24, 95, 15, 0.2)',
                'rgba(18, 59, 196, 0.2)',
                'rgba(161, 12, 136, 0.2)',
                'rgba(53, 127, 161, 0.2)',
                'rgba(238, 205, 58, 0.2)',
                'rgba(243, 76, 10, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(24, 95, 15, 1)',
                'rgba(18, 59, 196, 1)',
                'rgba(161, 12, 136, 1)',
                'rgba(53, 127, 161, 1)',
                'rgba(238, 205, 58, 1)',
                'rgba(243, 76, 10, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div className="d-flex justify-content-center mx-auto" style={{maxWidth: '500px'}}>
            <Doughnut options={options} data={data} />
        </div>
    );
}