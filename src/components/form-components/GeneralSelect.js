import React from 'react';
import PropTypes from 'prop-types';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

const GeneralSelect = (props) => {

    const {value, handleChange, label, setData, dataList} = props;

    return (

        <Box sx={{ minWidth: 120 }}>

            <FormControl fullWidth>

                <InputLabel id="demo-simple-select-label">{label}</InputLabel>

                <Select
                    labelId={label}
                    id={label}
                    value={value}
                    label={label}
                    onChange={event => handleChange(setData, event)}
                >
                    {dataList.map((data, index) => (

                        <MenuItem key={index} value={data}>{data}</MenuItem>
                    ))}
                </Select>

            </FormControl>
        </Box>
    );
};

GeneralSelect.propTypes = {

    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
    dataList: PropTypes.array.isRequired,
};

export default GeneralSelect;
