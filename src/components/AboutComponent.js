import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLeader({ leader }) {
    return (
        <Media tag="li">
            <Media left middle>
                <Media object src={leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
        </Media>
    )
}

function About(props) {
    const leaders = props.leaders.map((leader) => {
        return (
            <div key={leader.id} className="col-12 mt-5">
                <RenderLeader leader={leader} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
            <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2021, Visit London® quickly established itself as a travel advisory icon par excellence in The Great Britain. With its unique way of conducting tours that can be found nowhere else, it enjoys patronage from the A-list clientele in the whole of Great Britain. Featuring one of the best places in the world, you never know where you will arrive while wandering.</p>
                    <p>The organisation traces its humble beginnings to <em>Find Cafe®</em>, and hence, a successful chain was started by our CEO, Mr. Mohammad Humayun Khan, that featured many times in the world's best travel magazines like The Lonely Planet, The National Geographic, to name a few. Our CEO, Mohammad Humayun Khan, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of Britain with the intention of giving their children the best future. </p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">30 January 2021</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Find Cafe® Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$7,173,766,377</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">77</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">A mind that is stretched by a new experience can never go back to its old dimensions.</p>
                                <footer className="blockquote-footer">Life lessons by,
                                <cite title="Source Title">Oliver Wendell Holmes</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;