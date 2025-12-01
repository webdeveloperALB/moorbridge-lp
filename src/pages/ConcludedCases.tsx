import { useState, useEffect } from "react";

interface CaseData {
  id: number;
  caseNumber: string;
  clientName: string;
  scamType: string;
  amountRecovered: string;
  dateCompleted: string;
  duration: string;
  successRate: string;
}

const scamTypes = [
  "Investments",
  "Remote Jobs",
  "Romance Scam",
  "Memecoins/Rugpull",
  "Ponzi Scheme",
  "Recovery",
  "Phishing Scams",
  "Fake Giveaways and Airdrops",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function generateRandomCase(id: number): CaseData {
  const today = new Date();

  const daysAgo = Math.floor(Math.random() * 90) + 1;
  const caseDate = new Date(today);
  caseDate.setDate(caseDate.getDate() - daysAgo);

  const month = caseDate.getMonth();
  const day = caseDate.getDate();
  const year = caseDate.getFullYear();

  const amount = Math.floor(Math.random() * 450000) + 15000;
  const duration = Math.floor(Math.random() * 70) + 15;
  const successRate = Math.floor(Math.random() * 30) + 70;

  return {
    id,
    caseNumber: `MC-${year}-${String(id).padStart(3, "0")}`,
    clientName: "Confidential Client",
    scamType: scamTypes[Math.floor(Math.random() * scamTypes.length)],
    amountRecovered: `$${amount.toLocaleString()}`,
    dateCompleted: `${months[month]} ${day}, ${year}`,
    duration: `${duration} days`,
    successRate: `${successRate}%`,
  };
}

export default function ConcludedCases() {
  const [cases, setCases] = useState<CaseData[]>(() =>
    Array.from({ length: 6 }, (_, i) => generateRandomCase(i + 1))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCases(Array.from({ length: 6 }, (_, i) => generateRandomCase(i + 1)));
    }, 180000);

    return () => clearInterval(interval);
  }, []);

  const calculateStats = () => {
    const totalRecovered = cases.reduce((sum, c) => {
      const amount = parseInt(c.amountRecovered.replace(/[$,]/g, ""));
      return sum + amount;
    }, 0);

    const avgSuccess = Math.round(
      cases.reduce((sum, c) => sum + parseInt(c.successRate), 0) / cases.length
    );

    const avgDuration = Math.round(
      cases.reduce((sum, c) => sum + parseInt(c.duration), 0) / cases.length
    );

    return {
      totalCases: cases.length + 118,
      totalRecovered: `$${(totalRecovered / 1000000 + 8.1).toFixed(1)}M+`,
      avgSuccess: `${avgSuccess}%`,
      avgDuration: `${avgDuration} days`,
    };
  };

  const stats = calculateStats();

  const statsDisplay = [
    { label: "Total Cases Resolved", value: `${stats.totalCases}+` },
    { label: "Total Recovered", value: stats.totalRecovered },
    { label: "Average Success Rate", value: stats.avgSuccess },
    { label: "Average Resolution Time", value: stats.avgDuration },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#172963] mb-4 tracking-tight">
            Concluded Cases
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A testament to our commitment and expertise in digital asset
            recovery. Each case represents a successful partnership in
            reclaiming what was rightfully yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsDisplay.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#172963] transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="text-3xl font-bold text-[#172963] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#172963] to-[#2a3f7f] px-6 py-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Recent Success Stories
            </h2>
            <p className="text-blue-100">
              Our latest victories in digital asset recovery
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Case Number
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Scam Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Amount Recovered
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Success Rate
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date Completed
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cases.map((caseItem, index) => (
                    <tr
                      key={caseItem.id}
                      className={`transition-colors hover:bg-blue-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#172963] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {caseItem.id}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">
                              {caseItem.caseNumber}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-medium">
                          {caseItem.clientName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {caseItem.scamType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-green-600">
                          {caseItem.amountRecovered}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-semibold text-gray-900">
                            {caseItem.successRate}
                          </div>
                          <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: caseItem.successRate }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {caseItem.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {caseItem.dateCompleted}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#172963] to-[#2a3f7f] rounded-2xl shadow-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Have You Been Scammed?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Don't let criminals get away with your hard-earned assets. Our
            expert team is ready to help you recover what's yours.
          </p>
          <a href="/">
            <button className="bg-white text-[#172963] hover:bg-gray-100 transition-all px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              File a New Case
            </button>
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p className="leading-relaxed">
            All case details are anonymized to protect client confidentiality.
            Results may vary depending on individual circumstances.
            <br />
            Moorbridge Cyber Security maintains the highest standards of privacy
            and security.
          </p>
        </div>
      </div>
    </div>
  );
}
