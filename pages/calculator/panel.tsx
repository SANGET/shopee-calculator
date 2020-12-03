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
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

import { getRate } from './getRate'

const currencyInfo = [
  {
    alias: '台湾',
    scur: 'TWD'
  },
  {
    alias: '台湾',
    scur: 'IDR'
  },
]

const targetCurrencyInfo = [
  {
    alias: '人民币',
    scur: 'CNY'
  },
]

interface CalculatorState {
  buyingPrice?: number
}
export default class Calculator extends React.Component<{}, CalculatorState> {
  constructor(props) {
    super(props)
    this.state = {}
  }
  calc = (e) => {
    console.log(e);
  }

  getExchangeRate = () => {

  }
  
  render() {
    const { buyingPrice } = this.state
    return (
      <Container maxWidth="sm">
        <Paper className="calculator-container" style={{padding: 20}}>
          <h3>参数输入</h3>
          <form action={this.calc}>
            <Grid container spacing={3}>
              <Grid item>
                <TextField label="采购价格" id="buyingPrice" />
              </Grid>
              <Grid item>
                <TextField label="商品重量（克）" id="commodityWeight" />
              </Grid>
              <Grid item>
                <TextField label="手续费%" />
              </Grid>
              <Grid item>
                <TextField label="附加费" />
              </Grid>
              <Grid item>
                <TextField label="利润%" />
              </Grid>
              <Grid item>
                <TextField label="包装重量（克）" />
              </Grid>
              <Grid item>
                <TextField label="折扣%" />
              </Grid>
              <Grid item>
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
              </Grid>
              <Grid item>
                <TextField label="汇率" />
              </Grid>
              <Grid item>
                <TextField label="物流" />
              </Grid>
            </Grid>
            <Button
              variant="contained" color="primary" disableElevation
            >提交</Button>
          </form>
        </Paper>
        <Paper className="result-area" style={{padding: 20}}>
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