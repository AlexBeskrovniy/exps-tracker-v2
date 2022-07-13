import moment from 'moment';

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

const getInfoForChart = async () => {
    try {
       const res = await fetch('http://localhost:3001/api/infochart', {
           method: 'GET'
       });
       const data = await res.json();
       return data;
    } catch (err) {
        console.error(err);
    }
}

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

const info = await getInfoForChart();
const finalInfo = chartInfoHandler(info);
  
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

export const MainChart = () => {
    return (
        <Bar options={options} data={data} />
    );
}

