import { LINK } from "./link"

const URL = `${LINK}/sale/send`

export const addSale = (new_Discount, setResp) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(new_Discount)
    })
    .then(res => res.json())
    .then(json => setResp(json))
  }