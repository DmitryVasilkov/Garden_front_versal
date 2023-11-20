import { LINK } from "./link";

const URL = `${LINK}/order/send`

export const firstOrder = (newOrder, setResp) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(newOrder)
    })
    .then(res => res.json())
    .then(json => setResp(json))
  }