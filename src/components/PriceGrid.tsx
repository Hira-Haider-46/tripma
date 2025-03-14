interface PriceData {
  dates: string[];
  prices: {
    date: string;
    values: number[];
  }[];
}

const priceData: PriceData = {
  dates: ["2/12", "2/13", "2/14", "2/15", "2/16"],
  prices: [
    { date: "3/7", values: [837, 592, 592, 1308, 837] },
    { date: "3/8", values: [837, 592, 592, 1308, 837] },
    { date: "3/9", values: [624, 592, 592, 592, 592] },
    { date: "3/10", values: [1308, 624, 624, 837, 837] },
    { date: "3/11", values: [592, 624, 1308, 837, 624] },
  ],
};

const PriceGrid: React.FC = () => {
  return (
    <>
      <h2 className="text-base font-semibold text-gray-500 mb-4">
        Price grid <span className="text-gray-400">(flexible dates)</span>
      </h2>
      <div className="overflow-x-auto rounded-md border border-gray-300">
        <table className="w-full text-gray-500">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-r border-gray-300"></th>
              {priceData.dates.map((date, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 border-b border-gray-300 ${
                    index === priceData.dates.length - 1 ? "" : "border-r"
                  }`}
                >
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {priceData.prices.map((row, rowIndex) => (
              <tr key={rowIndex} className="text-center">
                <td
                  className={`px-4 py-2 font-semibold border-r border-gray-300 ${
                    rowIndex === priceData.prices.length - 1 ? "" : "border-b"
                  }`}
                >
                  {row.date}
                </td>
                {row.values.map((price, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-4 py-2 ${
                      rowIndex === priceData.prices.length - 1 ? "" : "border-b"
                    } ${
                      colIndex === row.values.length - 1 ? "" : "border-r"
                    } border-gray-300`}
                  >
                    ${price}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PriceGrid;