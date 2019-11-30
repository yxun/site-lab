import React, { Fragment } from 'react';

import {
    Button, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const banner = process.env.PUBLIC_URL + '/images/logo512.png';

const SideCard = () => (
    <Fragment>
        
        <Card>
            <CardImg top width="100%" src={banner} alt="banner" />
            <CardBody>
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Site Lab</CardTitle>
                <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" 
                    style={{ fontSize: '0.8rem' }}>Try and Learn</CardSubtitle>
                <CardText className="text-secondary mb-4" 
                    style={{ fontSize: '0.75rem' }}>Work In Progress</CardText>
                <Button color="info" className="font-weight-bold" outline><a href="https://github.com/yxun">View Profile</a></Button>
            </CardBody>
        </Card>
    </Fragment>
);

export default SideCard;
