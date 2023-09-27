
import { useLoaderData } from "react-router-dom";
import { storeDonateIds } from "./DonationList";
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';


const Statistics = () => {
    const donationList = useLoaderData();
  
    const donatedListToShow = storeDonateIds;  
  const data = [
    { name: 'Total Donation', value: donationList.length},
    { name: 'Donated', value: donatedListToShow.length},
  ];

  const COLORS = ['#FFBB28', '#00C49F'];
  // console.log('Donated');

  return (
    <div>
         <div className="flex items-center justify-center gap-7">
            <p className="border bg-[#d6873d] rounded-xl  text-white p-4">Total  {donationList.length}</p>
            <p className="border bg-[#3a92cd] rounded-xl text-white p-4">Donated {donatedListToShow.length}</p>
        </div>
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={120} fill="#8884d8">
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            </PieChart>
        </ResponsiveContainer>
       
    </div>
  );
};
export default Statistics;