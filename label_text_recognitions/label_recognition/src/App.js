import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Images from './components/Images';
import Webcamera from './components/Webcamera';
import Settings from './components/Settings';
import About from './components/About';
import FAQs from './components/FAQs';
import Careers from './components/Careers';
import Search from './components/Search';
import {Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import * as actions from './actions';
import { withRouter } from 'react-router-dom';


class App extends Component {
  constructor(){
    super()
    this.state = {
      images: []
    }
  }
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.fetchUser();
    }
      this.props.fetchImages()
      


  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
            <Route path={`/${this.props.name}/images`} component={ () => <Images/>} />
            <Route path={`/${this.props.name}/settings`} component={Settings} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path={`/${this.props.name}/search`} component={Search} />
            <Route path={`/${this.props.name}`} component={Webcamera} />
            <Route path="/about" component={About} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/careers" component={Careers} />
        </Switch>
      <Footer />
    </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  name: state.auth.currentUser.username
});

export default withRouter(connect(mapStateToProps, actions)(App));
