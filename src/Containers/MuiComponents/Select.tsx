import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Typography } from '@mui/material';
import "./MuiComponent.css";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface MultipleSelectPlaceholderProps {
    placeholder: any;
    data?:string;
    fullwidth?:boolean;
    renderData?:any;
    onChange?:any;
    named?:any;
    className?:any;
    value?:any;
  }
  


function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {

    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,

  };
}

export const MultipleSelectPlaceholder: React.FC<MultipleSelectPlaceholderProps> = ({placeholder,data,fullwidth,renderData,onChange,named,className,value}) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      
      typeof value === 'string' ? value.split(',') : value,
    );
    onChange(event);
  };

  return (
    <div>
      <FormControl fullWidth={fullwidth ? true:false}>
        <Select
       
          displayEmpty
          name={named}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (value ? value : (<Typography className='text-secondary'>{placeholder}</Typography>));
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
      
          className={data? 'rounded-select select_margins':`select_margins ${className}`}
        >
       
          {renderData.map((name:any) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
         >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
