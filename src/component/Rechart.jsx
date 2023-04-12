import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis} from 'recharts'


  const assingment = [
    {
      name: 'milestone 1',
      marks: 57,
     
    },
    {
      name: 'milestone 2',
      marks: 58,
      
    },
    {
      name: 'milestone 3',
      marks: 58,
      
    },
    {
      name: 'milestone 4',
      marks: 60,
      
    },
    {
      name: 'milestone 5',
      marks: 56,
      
    },
    {
      name: 'milestone 6',
      marks: 58,
      
    },
    {
      name: 'milestone 7',
      marks: 48,
      
    },
  ];  

const Rechart = () => {
    return (
        <ResponsiveContainer width="80%" aspect={2} >
            <BarChart data = {assingment} >
                <XAxis dataKey='name' />
                <YAxis/>

                <Bar dataKey='marks' fill='red'></Bar>
            </BarChart>
        
      </ResponsiveContainer>
    );
};

export default Rechart;