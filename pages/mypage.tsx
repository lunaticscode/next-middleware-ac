import { NextPage } from "next";

const Mypage: NextPage = () => {
  return <h1>This is MyPage</h1>;
};
export default Mypage;

const sleep = async (): Promise<void> =>
  await new Promise((resolve) => setTimeout(() => resolve(), 3000));

export const getServerSideProps = async () => {
  await sleep();
  return {
    props: {
      testData: "data",
    },
  };
};
