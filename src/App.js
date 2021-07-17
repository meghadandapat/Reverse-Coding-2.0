import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Submissions from './components/Submissions/Submissions';
import Testcase from './components/Testcase/Testcase';
import QuestionHub from './components/QuestionHub/QuestionHub';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Instructions from './components/Instructions/Instructions';
import Footer from './components/Footer/Footer';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Result from './components/Result/Result';
import Codingpage from './components/Coding/Codingpage';
import NotFound from './components/NotFound/NotFound';
import OurTeam from './components/WebTeam/OurTeam';


// Routers

import PrivateRoute from './components/utils/PrivateRoute';
import PublicRoute from './components/utils/PublicRoute';



function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
    <PublicRoute restricted={false} exact path="/" component={Login} />
    <PrivateRoute path="/submissions" component={Submissions} />
    <PrivateRoute path="/testcases" component={Testcase} />
    <PrivateRoute path="/questionhub" component={QuestionHub} />
    <PrivateRoute path="/instructions" component={Instructions} />
    <PrivateRoute path="/leaderboard" component={Leaderboard} />
    <PublicRoute path="/result" component={Result} />
    <PublicRoute path="/ourteam" component={OurTeam} />
    <PrivateRoute path="/coding/:id" component={Codingpage} />
    <Route component={NotFound} />
    </Switch>
    <Footer/>     
    </Router>
       
    </div>
  );
}

export default App;
