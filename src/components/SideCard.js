import React, { Fragment } from 'react';

import {
    Button, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText
} from 'reactstrap';


const SideCard = () => (
    <Fragment>
        
        <Card>
            <CardBody>
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">目录</CardTitle>
                <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" 
                    style={{ fontSize: '0.8rem' }}>...</CardSubtitle>
                <CardText className="text-secondary mb-4" 
                    style={{ fontSize: '0.75rem' }}>...</CardText>
                <Button color="info" className="font-weight-bold" outline><a href="https://github.com/yxun/site-lab">Github</a></Button>
            </CardBody>
        </Card>
    </Fragment>
);

export default SideCard;
