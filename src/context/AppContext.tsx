import { ReactNode, createContext } from "react";

export interface DataItem {
  title: string;
  body: string;
  srcImg: string;
  id: number;
  active: boolean;
  pos: number;
}

export const AppContext = createContext<DataItem[]>([]);

export function AppProvider({ children }: { children: ReactNode }) {
  const data: DataItem[] = [
    {
      title: "5 key enterprise tech trends for 2023 and beyond",
      body: "From the digital transformation to immersive customer experiences, discover the trends that will shape business in 2023 and beyond in this case study.",
      srcImg: "../src/assets/img0.svg",
      id: 1,
      active: true,
      pos: 1,
    },
    {
      title: "Building your own digital transformation roadmap for the future",
      body: "Find practical advice on building your own digital roadmap according to industry best practices in this whitepaper.",
      srcImg: "../src/assets/img1.svg",
      id: 2,
      active: true,
      pos: 2,
    },
    {
      title: "The journey to the cloud: challenges and pitfalls ahead",
      body: "Learn how Caribbean businesses can prepare for the cloud transition, avoid common mistakes and achieve the benefits of agility and cost savings in this whitepaper.",
      srcImg: "../src/assets/img2.svg",
      id: 3,
      active: true,
      pos: 3,
    },
    {
      title: "There is no cloud without connectivity: all you need to know",
      body: "Discover the crucial role a robust and secure network infrastructure plays in the success of cloud computing adoption.",
      srcImg: "../src/assets/img3.svg",
      id: 4,
      active: true,
      pos: 4,
    },
    {
      title: "The journey to the cloud: Challenges and Pitfalls Ahead",
      body: "Tortor risus integer pellentesque gravid eleifen nullam. Nisi ornare blandit volutpat tincidunt. Consectetur id arcu ut massa.",
      srcImg: "../src/assets/img4.svg",
      id: 5,
      active: false,
      pos: 5,
    },
  ];

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}
