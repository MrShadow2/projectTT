import React from 'react'
import {useEffect, useState} from 'react';
import { saveAs } from 'file-saver';
import { CSVLink, CSVDownload } from "react-csv";
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
const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Word Count Chart', 
      },
    },
  };


  const Sample = ({mostOccurringWords}) => {
    console.log(mostOccurringWords) 
    const [chart, setChart] = useState(null);
    
    const words = mostOccurringWords.map(pair => pair.word);
    const counts = mostOccurringWords.map(pair => pair.count);
    console.log(words)
    console.log(counts)

    const data = {
        labels: words,
        datasets: [
            {
                label: 'Word Count',
                data: counts,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
            },
        ],
    };



      
      const headers = [
        { label: "Word", key: "word" },
        { label: "Count", key: "count" },
        ];
    return (
       <div className='container'>
              <Bar data={data} options={options} onLoad={(chart) => setChart(chart)} />

              <CSVLink data={mostOccurringWords} headers={headers} >
                 <button className='neumorphic-button' >Export</button>
              </CSVLink>
       </div>
    );
}

export default Sample


