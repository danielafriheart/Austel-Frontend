import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
);

export const options = {
    tension: 0.5,
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", "Sep", "Oct", "Nov", "Dec"];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1200 })),
            borderColor: '#04EB76',
            backgroundColor: '#04EB76',
            fill: {
                target: "origin", // 3. Set the fill options
                above: "rgba(88,214,141, 0.095)"
            }
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1200 })),
            borderColor: 'rgb(236, 112, 99)',
            backgroundColor: 'rgb(236, 112, 99)',
            fill: {
                target: 'origin',
                above: "rgba(231, 76, 60 , 0.05)"
            }
        },
    ],
};

function Chart() {
    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}

export default Chart