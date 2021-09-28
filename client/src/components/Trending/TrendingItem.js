import React, {useCallback, useEffect, useState} from 'react'
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const axios = require('axios')


export default function TrendingItem({obj}) {
  const { id, name, symbol, thumb, price_btc } = obj.item;
  const [price, setPrice] = useState(price_btc);
  let url = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=cad`;

  const getCoinPrice = useCallback(() => {
    axios
      .get(url)
      .then((response) => {
        let { data } = response;
        let cadPrice = Object.values(data)[0].cad;
        setPrice(cadPrice);
      })
      .catch((err) => console.error(err));
  }, [url]);

  useEffect(() => {
    getCoinPrice();
  }, [getCoinPrice]);

  return (
    <TableRow key={id}>
    <TableCell><img src={thumb} alt="thumb" /></TableCell>
    <TableCell>{symbol}</TableCell>
    <TableCell>{name}</TableCell>
    <TableCell>{price}</TableCell>
  </TableRow>
  );
}
