import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, Loader } from 'semantic-ui-react';
import UniversityList from '../UniversityList';
import constants from '../../constants';

const { path } = constants;

const UniversityListContainer = () => {
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        axios.get(path)
            .then(res => {
                setUniversities(res.data)
            });
    }, []);

    return (
        <Container>
            <Header as='h1' className="center">Universities of India</Header>
            {
                !!universities.length ? (
                    <UniversityList universitiesList={universities} />
                ) : (
                    <Loader active inline='centered' />
                )
            }
        </Container>
    );
};

export default UniversityListContainer;
