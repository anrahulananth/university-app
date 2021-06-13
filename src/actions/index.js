export const UNIVERSITIES = {
    GET_NEXT_UNIVERSITIES: 'GET_NEXT_UNIVERSITIES'
};

export const getNextUniversities = (universities) => ({
    type: UNIVERSITIES.GET_NEXT_UNIVERSITIES,
    universities
});
