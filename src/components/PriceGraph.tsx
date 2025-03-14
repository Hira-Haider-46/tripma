import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import buy from "../assets/buy.png";

interface ChartData { date: string; price: number }

const chartData: ChartData[] = [ { date: "2/10", price: 700 }, { date: "2/11", price: 800 }, { date: "2/12", price: 950 }, { date: "2/13", price: 870 }, { date: "2/14", price: 620 }, { date: "2/15", price: 750 }, { date: "2/16", price: 690 } ];

const PriceGraph: React.FC = () => {
  return (
    <>
      <div className="lg:pl-15">
        <h2 className="text-base font-semibold text-gray-500 mt-8">
          Price history
        </h2>
        <div className="w-full overflow-x-auto">
          <div className="ml-[-5.5%] mt-4 min-w-[400px]">
            <ResponsiveContainer width="100%" height={230}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="date" fontSize={14} />
                <YAxis fontSize={14} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#6366F1"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="lg:pl-16 pr-3">
        <div className="mt-6 mb-2 flex flex-row items-center gap-5 text-gray-500">
          <p className="font-medium text-lg">Price rating</p>
          <img src={buy} alt="buy" />
        </div>
        <p className="text-gray-500 my-2">
          We recommend booking soon. The average cost of this flight is $750,
          but could rise 18% to $885 in two weeks.
        </p>
        <p className="text-gray-400">
          Tripma analyzes thousands of flights, prices, and trends to ensure you
          get the best deal.
        </p>
      </div>
    </>
  );
};

export default PriceGraph;