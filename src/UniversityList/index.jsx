import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'semantic-ui-react';
import UniversityListItem from './UniversityListItem' 
import Pagination from './Pagination';
import constants from '../constants';

const UniversityList = () => {
    const { path, pageLimit, totalHeader } = constants;
    const params = new URLSearchParams(window?.location?.search).get('page');

    const [page, setPage] = useState(Number(params) || 1);
    const [total, setTotal] = useState(0);
    const [universities, setUniversities] = useState([]);
    
    const handlePagination = (nextPage) => {
        window.history.pushState({}, 'Universities', `/?page=${nextPage}`);
        setPage(nextPage);
    };

    useEffect(() => {
        const handleUniversityList = async () => {
            const url = `${path}?_page=${page}&_limit=${pageLimit}`;
            axios.get(url)
                .then(response => {
                    setTotal(Number(response.headers[totalHeader]));
                    setUniversities(response.data);
                });
        };
        handleUniversityList();
    }, [page, path, pageLimit, totalHeader]);

    return (
        <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th colSpan="3">Universities</th>
                </tr>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
            {!!universities.length && universities.map((university, index) => (
                <React.Fragment  key={`unversity-${index+1}`}>
                    <UniversityListItem university={university} index={((page - 1) * pageLimit) + index } />
                </React.Fragment>
            ))}
            </tbody>
        </Table>
        <Pagination
            handlePagination={handlePagination}
            limit={pageLimit}
            total={total}
            page={page}
        />
        </Container>
    )
}

export default UniversityList;
