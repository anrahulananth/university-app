import React from 'react'

const ListItem = ({ university, index }) => {
    const { name, country, web_pages: [link = ''] = [] } = university;
    let url = link;
    if (!/^(https|http)?:\/\//i.test(url)) url = 'http://' + url;
    return (
        <tr>
            <td>{index+1}</td>
            <td>{link ? (<a href={url} target="_blank" rel="noreferrer">{name}</a>) : {name}}</td>
            <td>{country}</td>
        </tr>
    );
};

export default ListItem;
