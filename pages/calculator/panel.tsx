import React from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

export class Calculator extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Paper className="calculator-container">
          <h3>参数输入</h3>
          <Grid>
            <FormControl className={clsx()}>
              <Input
                id="standard-adornment-weight"
                value={'values.weight'}
                // onChange={handleChange('weight')}
                endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
            </FormControl>
            <TextField label="采购价格" />
            <TextField label="商品重量（克）" />
          </Grid>
          <Grid>
            <TextField label="手续费%" />
            <TextField label="附加费" />
            <TextField label="利润%" />
          </Grid>
          <Grid>
            <TextField label="包装重量（克）" />
            <TextField label="折扣%" />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <TextField label="汇率" />
            <TextField label="物流" />
          </Grid>
        </Paper>
        <Paper className="result-area">
          <h3>计算结果</h3>
          <TextField label="实际运费" />
          <TextField label="销售价格" />
          <TextField label="卖家承担的运费" />
          <TextField label="利润" />
        </Paper>
      </Container>
    )
  }
}