import React from 'react'
import MuiTextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Form } from 'react-final-form';
import { TextField, Select } from 'mui-rff';
import clsx from 'clsx';

import { getRate } from './getRate'

const currencyInfo = [
  {
    label: '台湾',
    value: 'TWD'
  },
  {
    label: '印尼',
    value: 'IDR'
  },
]

const targetCurrencyInfo = [
  {
    alias: '人民币',
    scur: 'CNY'
  },
]

interface FormData {
  hello: string;
}

interface CalculatorState {
  buyingPrice?: number
  currency?: number
  calcResult?: {
    /** 真实运费 */
    realFreight?: number
    salePrice?: number
    /** 卖家承担的运费 */
    customFreight?: number
    /** 最终利润 */
    realProfix?: number
  }
}

interface CalculatorProps {
  buyingPrice?: number
}

export default class Calculator extends React.Component<CalculatorProps, CalculatorState> {
  constructor(props: CalculatorProps) {
    super(props)
    this.state = {
      // currency: 
      calcResult: {
        customFreight: 0,
        realFreight: 0,
        realProfix: 0,
        salePrice: 0,
      }
    }
  }
  calc = async (values: FormData) => {
    // console.log(values);
    this.setState({
      calcResult: {
        customFreight: 0,
        realFreight: 0,
        realProfix: 0,
        salePrice: 0,
      }
    })
  }

  validate = (values: FormData) => {
    if (!values.hello) {
      return { hello: 'Saying hello is nice.' };
    }
    return;
  }

  getExchangeRate = () => {

  }
  
  render() {
    const { buyingPrice, currency, calcResult } = this.state
    return (
      <Container maxWidth="sm">
        <Paper className="calculator-container" style={{padding: 20}}>
          <h3>参数输入</h3>
          <Form
            onSubmit={this.calc}
            initialValues={{}}
            validate={this.validate}
            render={({ handleSubmit, values }) => {
              return (
                <form onSubmit={handleSubmit} noValidate>
                  <TextField label="采购价格" name="buyingPrice" required={true} />
                  <TextField label="商品重量（克）" name="commodityWeight" required={true} />
                  <TextField label="手续费" name="handlingFee" required={true} />
                  <TextField label="附加费" name="additionalFee" required={true} />
                  <TextField label="利润率" name="profix" required={true} />
                  <TextField label="包装重量（克）" name="weightOfPack" required={true} />
                  <TextField label="折扣" name="discount" required={true} />
                  <Select
                    label="站点选择"
                    name="currency"
                    data={currencyInfo}
                  />
                  <Button
                    type="submit"
                    variant="contained" color="primary" disableElevation
                    onClick={() => this.calc(values)}
                  >
                    提交
                  </Button>
                </form>
              )
            }}
          />
        </Paper>
        <Paper className="result-area" style={{padding: 20}}>
          <h3>计算结果</h3>
          <MuiTextField label="实际运费" value={calcResult.realFreight} />
          <MuiTextField label="销售价格" value={calcResult.salePrice} />
          <MuiTextField label="卖家承担的运费" value={calcResult.customFreight} />
          <MuiTextField label="利润" value={calcResult.salePrice} />
        </Paper>
      </Container>
    )
  }
}