import Chart from "chart.js/auto";
import { CategoryScale, Filler, LineElement, LinearScale, PointElement } from "chart.js";
import { useState } from "react";
import 'chartjs-plugin-annotation'
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-moment'

Chart.register(CategoryScale,LineElement,LinearScale,PointElement,Filler);
 
export default function LineChart({data}) {
    const timestamps = data?.map((entry) => entry.Timestamp);
    const profitPercentages = data?.map((entry) =>
      parseFloat(entry.ProfitPercentage)
    );
    const createGradient = (ctx) => {
        const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(37, 205, 37, 0.4)');
        gradient.addColorStop(1, 'rgba(37, 205, 37, 0)');
        return gradient;
      };
    // Create chart data
    const chartData = {
      labels: timestamps,
      datasets: [
        {
          label: "Profit Percentage",
          data: profitPercentages,
          borderColor: 'rgba(37, 205, 37, 1)',
          backgroundColor: createGradient,
          borderWidth: 1,
          fill:true
        },
        
      ],
    };

   
 
  return (
<div className="chart-container">
     
      <Line 
        data={chartData}
        
        
        height={'160px'}
        options={{
            
            plugins:{
                legend:{
                    display:false
                },
            },
            // responsive:true,
            maintainAspectRatio:false,
            scales:{
                
                x:{
                    
                    // offset:true,
                    type:'time',
                    time:{
                        unit:"year"
                    },
                    min:'2016-07-08 06:00:00',
                    ticks:{
                        color:'#7D7D7D',
                        font:{
                            size:'10px',
                            weight:500,
                            lineHeight:'12.1px',

                        }
                    },
                    grid:{
                        color:'#D9D9D9'
                    }
                },
                y:{
                    grid:{
                        color:'#D9D9D9'
                    }
                }
            },
            elements:{
                point:{
                    pointStyle:false
                },
                line:{
                    borderDash:[3,3]
                }
            },
            // layout:{
            //     padding:{
            //         // left:20
            //     }
            // }
        }
        
    }
    
      />
    </div>
  );
}