import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {TableCell, TableSortLabel} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";


export default function ClientTableHead(props) {

    const { order, orderBy, onRequestSort, headCells} = props;

    const createSortHandler = (event, property) => {

        onRequestSort(event, property);
    };


    return (
        <TableHead>
            <TableRow>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={(event) => {createSortHandler(event, headCell.id)}}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

ClientTableHead.propTypes = {

    headCells: PropTypes.array.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};
