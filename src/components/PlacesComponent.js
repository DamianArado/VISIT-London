import React from 'react';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDestinations({ destination, onClick }) {
    return (
        <Card>
            <Link to={`/places/${destination.id}`} >
                <CardImg width="100%" src={destination.image} alt={destination.name} />
                <CardImgOverlay>
                    <CardTitle>{destination.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Places = (props) => {
    const places = props.destinations.map((destination) => {
        return (
            <div className="col-12 col-md-5 m-1" key={destination.id}>
                <RenderDestinations destination={destination} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Places</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Places to Visit - </h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {places}
            </div>
        </div>
    );
}

export default Places;