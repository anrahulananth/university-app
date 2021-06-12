import React from 'react';
import { Button, Container, Select } from 'semantic-ui-react';
const Pagination = ({
    handlePagination,
    limit,
    total,
    page
}) => {
    const options = [...Array(Math.ceil(total/limit))].map((item, index) => ({
        key: `option${index+1}`, text: index+1, value: index+1
    }))
    return (
        <Container>
            <Button
                className="align-right"
                variant="outline-primary"
                disabled={page === 1}
                onClick={() => handlePagination(page-1)}
            >
                Previous
            </Button>
            Current Page:
            &nbsp;
            <Select
                value={page}
                options={options}
                onChange={(e, { value }) => handlePagination(value)}
            />
            &nbsp;
            <Button
                className="align-left"
                variant="outline-primary"
                disabled={(page+1)*limit >= total}
                onClick={() => handlePagination(page+1)}
            >
                Next
            </Button>
        </Container>
            
    );
}

export default Pagination
