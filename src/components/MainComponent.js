import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import Places from './PlacesComponent';
import DestinationDetail from './DestinationDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent'
import Contact from './ContactComponent';
import About from './AboutComponent'
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        destinations: state.destinations,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (destinationId, rating, author, comment) => dispatch(addComment(destinationId, rating, author, comment))
});


class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        const HomePage = () => {
            return (
                <Home
                    destination={this.props.destinations.filter((destination) => destination.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DestinationWithId = ({ match }) => {
            return (
                    <DestinationDetail destination={this.props.destinations.filter((destination) => destination.id === parseInt(match.params.destinationId, 10))[0]}
                        comments={this.props.comments.filter((comment) => comment.destinationId === parseInt(match.params.destinationId, 10))}
                        addComment={this.props.addComment}
                    />
            );
        };


        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/places"
                        component={() => <Places destinations={this.props.destinations} />}
                    />
                    <Route path='/places/:destinationId' component={DestinationWithId} />
                    <Route exact path='/aboutus'
                        component={() => <About leaders={this.props.leaders} />}
                    />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
