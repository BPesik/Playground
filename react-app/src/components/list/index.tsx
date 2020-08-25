import React from "react";
import styled from "@emotion/styled";

const ListItem = styled.li`
    padding: 8px;

    :hover {
        background: grey;
        color: white;
    }
`;

const UnorderedList = styled.ul`
    list-style: none;
    font-family: Arial;
    padding: 8px;
`;

function renderItems(items: string[], onClick: () => void) {
    let listItems = [];

    for (let i = 0; i < items.length; i++){
        listItems.push(
            <ListItem key={`listItem-${i}`} onClick={onClick}>
                {items[i]}
            </ListItem>
        )
    }

    return listItems;
}

type ListProps = {
    items: string[];
    onClick: () => void;
};

function List({ items, onClick }: ListProps) {
    return (
        <UnorderedList>
            {renderItems(items, onClick)}
        </UnorderedList>
    );
};

export default List;
