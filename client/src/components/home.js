import React from 'react';
import '../styles/home.css';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import ComingSoon from '../components/ComingSoon';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';
import ApplyNewPan from '../components/PanApp';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import About from './About';
class Home extends React.Component {

    render() {


        return (<section className="header-area header-two mb-100">
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route path='/' exact={true} component={About} ></Route>
                    <Route path='/About' exact={true} component={About} ></Route>
                    <Route path='/Services' exact={true} component={Services} ></Route>
                    <Route path='/ITFiling' exact={true} component={ComingSoon} ></Route>
                    <Route path='/Marriage' exact={true} component={ComingSoon} ></Route>
                    <Route path='/Contact' exact={true} component={Contact} ></Route>
                    <Route path='/Pricing' exact={true} component={Pricing} ></Route>
                    <Route path='/Pan' exact={true} component={ApplyNewPan} ></Route>

                </Switch>
            </Router>
        </section>)
    }

}
export default Home;