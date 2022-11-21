const Home = () => {
  let studentListRender = <div>my student lists</div>;
  let toRender = (
    <div>
      <div>Hello this is home page</div>
      {studentListRender}
    </div>
  );
  return toRender;
};

export default Home;
