// import { RequestClass } from '@mini-code/request'

interface ResStruct {
  success: string
  result: {
    status: string
    scur: string
    tcur: string
    ratenm: string
    rate: string
    update: string
  }
}

// let $R: typeof RequestClass

export interface GetRateApiOptions {
  scur: string
  tcur: string
}

const rateCache: Record<string, string> = {

}

const res = {
  "success":"1",
  "result":{
    "status":"ALREADY",
    "scur":"USD",
    "tcur":"CNY",
    "ratenm":"美元/人民币",
    "rate":"6.551",
    "update":"2020-12-03 20:36:24"
  }
}

export const getRate = async ({
  scur, tcur
}: GetRateApiOptions) => {
  // if(!$R) $R = new RequestClass<ResStruct>();
  if(rateCache[scur]) return rateCache[scur];
  const apiUrl = `http://api.k780.com/?app=finance.rate&scur=${scur}&tcur=${tcur}&appkey=55916&sign=4d064cee9f44223231209ba9ad22e550`
  const res = await $R.get(apiUrl)
  if(res.success === '1') {
    return res.result.rate
  }
}
