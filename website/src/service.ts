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



export async function getResults() {
  const { data } = await http().get("/user/allResult");
  console.log("results",data)
  return data;
}
