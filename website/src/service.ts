import { http } from "./helper/http";

const fakeData = [
  [
    {
      date: "9-03-2024",
      slot: 1,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "9-03-2024",
      slot: 2,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "9-03-2024",
      slot: 3,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "9-03-2024",
      slot: 4,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "9-03-2024",
      slot: 5,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "9-03-2024",
      slot: 6,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "9-03-2024",
      slot: 7,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "9-03-2024",
      slot: 8,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "9-03-2024",
      slot: 9,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "9-03-2024",
      slot: 10,
      winningPoint: 0,
      winningPatti: 453,
    },
  ],
  [
    {
      date: "8-03-2024",
      slot: 1,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "8-03-2024",
      slot: 2,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "8-03-2024",
      slot: 3,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "8-03-2024",
      slot: 4,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "8-03-2024",
      slot: 5,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "8-03-2024",
      slot: 6,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "8-03-2024",
      slot: 7,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "8-03-2024",
      slot: 8,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "8-03-2024",
      slot: 9,
      winningPoint: 0,
      winningPatti: 453,
    },
    {
      date: "8-03-2024",
      slot: 10,
      winningPoint: 0,
      winningPatti: 453,
    },
    
    
  ],
];

// export async function getResults() {
//   return await Promise.resolve(fakeData);
// }

const transformRealData = (realData) => {
  // Group the real data by date
  const groupedData = realData.reduce((acc, item) => {
    const date = new Date(item.timestamp).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  // Convert grouped data to the desired format
  const formattedData = Object.entries(groupedData).map(([date, data]) => ({
    date,
    data: data.map(({ slot, winSinglePatti, winThreePatti }) => ({
      slot: parseFloat(slot),
      winningPoint: winSinglePatti,
      winningPatti: winThreePatti,
    })),
  }));

  return formattedData;
};

export async function getResults() {
  const { data } = await http().get("/user/allResult");

  const formattedData = transformRealData(data.data);
  console.log("results---",formattedData)


  return formattedData;
}
