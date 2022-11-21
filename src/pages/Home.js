const Home = () => {
  let someStatisticRender = <div>Some useful info to show</div>;
  let toRender = (
    <div>
      <div>Hello this is home page</div>
      {someStatisticRender}
    </div>
  );
  return toRender;
};

export default Home;
