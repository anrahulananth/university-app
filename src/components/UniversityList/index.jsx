import React, { useEffect, useState, useRef } from 'react';
import { Table } from 'semantic-ui-react';
import UniversityListItem from './UniversityListItem' 
import Pagination from '../Pagination';
import { getNextUniversities } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import constants from '../../constants';

const { pageLimit } = constants;

const UniversitiesListComp = ({
    universitiesList
}) => {
    const dispatch = useDispatch();
    const memo = useRef({});
    const universities = useSelector(state => (state && state.universities) || {});
    const params = queryString.parse(window.location.search);
    const [page, setPage] = useState(Number(params.page) || 1);
    const handlePagination = (nextPage) => {
        window.history.pushState({}, 'Universities', `/?page=${nextPage}`);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setPage(nextPage);
    };

    useEffect(() => {
        if (!memo.current[page]) {
            memo.current[page] = [...universitiesList].splice((page-1) * pageLimit, pageLimit);
        } 
        dispatch(getNextUniversities(memo.current[page]));
    }, [page, universitiesList, dispatch]);

    return (
        <>
            <Table striped celled>
                <thead>
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
                total={universitiesList.length}
                page={page}
            />
        </>
    );
};

export default UniversitiesListComp;
