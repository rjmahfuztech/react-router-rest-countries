import { Container } from '@material-ui/core';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CountryDetailInfo = (props) => {
    // console.log(props);
    const { name, nativeName, region, capital, subregion, flag } = props.info;
    
    return (
        <div>
            <Container maxWidth="sm">
                <Card>
                    <Card.Img variant="top" src={flag} />
                    <Card.Body>
                        <Card.Text>
                            Country Name: {name}
                        </Card.Text>
                        <Card.Text>
                            Native Name: {nativeName}
                        </Card.Text>
                        <Card.Text>
                            Capital: {capital}
                        </Card.Text>
                        <Card.Text>
                            Region: {region}
                        </Card.Text>
                        <Card.Text>
                            Sub Region: {subregion}
                        </Card.Text>
                    </Card.Body>
                        <Link to="/home">
                            <Button>Go Back</Button>
                        </Link>
                </Card>
            </Container>
        </div>
    );
};

export default CountryDetailInfo;