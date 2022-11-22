import '../styles/Home.css'
import schoolimg from '../assets/schoolimg.jpg'

const Home = () => {
  let someStatisticRender = <div>Some useful info to show</div>
  let toRender = (
    <div className="home-container">
      <div className="col-1">
        <h1>Browse Student & Courses Available</h1>
        {someStatisticRender}
      </div>
      <div className="col-2">
        <img src={schoolimg}></img>
      </div>
    </div>
  )
  return toRender
}

export default Home
