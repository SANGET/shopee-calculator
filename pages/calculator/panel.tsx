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
import Box from '@material-ui/core/Box';
// import { Form } from 'react-final-form';
// import { TextField, Select } from 'mui-rff';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { TextField, Select } from 'formik-material-ui';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import clsx from 'clsx';

import * as yup from 'yup';

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
          <Formik
            onSubmit={(values, {setSubmitting}: FormikHelpers<any>) => {
              console.log(values)
              setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
            initialValues={{}}
            // validate={this.validate}
          >
            {({ submitForm, isSubmitting, touched, errors, values }) => {
              return (
                <Form style={{width: 400}}>
                  <Box margin={1}>
                    <Field error={errors.buyingPrice} helperText="qweqwe" component={TextField} label="采购价格" name="buyingPrice" required={true} />
                  </Box>
                  <Box margin={1}>
                    <Field component={TextField} label="商品重量（克）" name="commodityWeight" required={true} />
                  </Box>
                  <Box margin={1}>
                    <Field component={TextField} label="手续费" name="handlingFee" required={true} />
                  </Box>
                  <Box margin={1}>
                    <Field component={TextField} label="附加费" name="additionalFee" required={true} />
                  </Box>
                  <Box margin={1}>
                    <Field component={TextField} label="利润率" name="profix" required={true} />
                  </Box>
                  <Box margin={1}>
                    <Field component={TextField} label="包装重量（克）" name="weightOfPack" required={true} />
                  </Box>
                  <Box margin={1}>
                    <Field component={TextField} label="折扣" name="discount" required={true} />
                  </Box>
                  <Box margin={1}>
                    <FormControl style={{minWidth: '200px'}}>
                      <InputLabel id="demo-simple-select-label">
                        站点选择
                      </InputLabel>
                      <Field
                        labelId="demo-simple-select-label"
                        name="currency"
                        component={Select}
                      >
                        {
                          currencyInfo.map((info, idx) => {
                            const { alias, scur } = info;
                            return (
                              <MenuItem 
                                value={scur} 
                                key={scur}>
                                {alias}
                              </MenuItem>
                            )
                          })
                        }
                      </Field>
                    </FormControl>
                  </Box>
                  <Box margin={1}>
                    <Button
                      type="submit"
                      variant="contained" color="primary" disableElevation
                    >
                      计算
                    </Button>
                  </Box>
                </Form>
              )
            }}
          </Formik>
        </Paper>
        <Paper className="result-area" style={{padding: 20}}>
          <h3>计算结果</h3>
          <List>
            <ListItem>
              <ListItemText
                primary="实际运费"
                secondary="123"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="销售价格"
                secondary="2"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="卖家承担的运费"
                secondary="3"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="利润"
                secondary="4"
              />
            </ListItem>
          </List>
          {/* <TextField label="实际运费" value={calcResult.realFreight} />
          <TextField label="销售价格" value={calcResult.salePrice} />
          <TextField label="卖家承担的运费" value={calcResult.customFreight} />
          <TextField label="利润" value={calcResult.salePrice} /> */}
        </Paper>
      </Container>
    )
  }
}