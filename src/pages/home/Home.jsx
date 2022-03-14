import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="home-container">
            <Navbar />
            <div className="widgets">
              <Widgets type="user" />
              <Widgets type="order" />
              <Widgets type="profit" />
              <Widgets type="balance" />
            </div>
            <div className="charts">
              <Feature className="feature" />
              <Chart className="chart" aspect={2 / 1}/>
            </div>
            <div className="list-container">
              <div className="list-title">Latest Transactions</div>
              <Table />
            </div>
        </div>
    </div>
  )
}

export default Home