import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Table } from 'antd'

const DataTable = () => {
  let data1, data2, data3, data4, data5 = ''
  const [loading, setLoading] = useState(true);
  const [finaldata, setFinalData] = useState([]);
  let largest = 0;
  let res = [];

  const client = Axios.create({
    baseURL: 'https://mobilicis-backend1.onrender.com'
  })

  // DEFINED FIVE FUNCTIONS TO GET THE DATA OF USERS OF FIVE COLUMNS
  const getColumnOneData = async () => {
    try {
       data1 = await client.get('/lt5BMW|Mercedes');
      // console.log('getColumnOneData called', response);
      data1 = data1.data.map((el, i) => el.first_name.concat(" " + el.last_name))
    } catch (error) {
      console.log(error)
    }

  }
  // console.log(data1)

  const getColumnTwoData = async () => {
    try {
       data2 = await client.get('/male|phgt10k');
      data2 = data2.data.map((el) => el.first_name.concat(" " + el.last_name));
    } catch (error) {
      console.log(error)
    }
    ;
    //  console.log('data2',data2)
  }

  const getColumnThreeData = async () => {
    try {
       data3 = await client.get('/lnstwMqtgt15');
      data3 = data3.data.map((el) => el.first_name.concat(" " + el.last_name));
      ;
    } catch (error) {
      console.log(error)
    }
    //  console.log('data3',data3)

  }

  const getColumnFourData = async () => {
    try {
       data4 = await client.get('/bmw|mrec|audi&emailnotd');
      data4 = data4.data.map((el) => el.first_name.concat(" " + el.last_name));
    } catch (error) {
      console.log(error)
    }
    ;
    //  console.log('data4',data4)
  }

  const getColumnFiveData = async () => {
    try {
       data5 = await client.get('/top10CWithHighNoOfUsersAndAverageIncm');
      data5 = data5.data.map((el) => el._id);
    } catch (error) {
      console.log(error)
    }
    //  console.log('data5',data5)


    setTimeout(() => {
      // STORING THE LENGTH OF LARGEST ARRA IN largest VARIABLE BECAUES WE NEED THIS LARGEST ARRAY TO SET FINAL DATA
      const length = () => {
        // setLoading(true)
        const lengths = [data1.length, data2.length, data3.length, data4.length, data5.length]
        for (let i = 0; i <= lengths.length; i++) {
          if (lengths[i] > largest) {
            largest = lengths[i];
          }
        }
        console.log(lengths);
      }

      length();
      finalDataSetting();
      setLoading(false)
    }, 2000)
      ;
  }
  // CALLING ALL THE functions DEFINED ABOVE 
  useEffect(() => {

    getColumnOneData();
    getColumnTwoData();
    getColumnThreeData();
    getColumnFourData();
    getColumnFiveData();
  }, [])


  const finalDataSetting = () => {
    // setLoading(true)
    res = [];
    for (let i = 0; i <= largest; i++) {
      const obj = {};
      if (data1[i]) obj.col1 = data1[i];
      if (data2[i]) obj.col2 = data2[i];
      if (data3[i]) obj.col3 = data3[i];
      if (data4[i]) obj.col4 = data4[i];
      if (data5[i]) obj.col5 = data5[i];
      res.push(obj);
    }
    // console.log('dhghghgjhgjh', res);
    setFinalData(res);

  }

  // console.log(finaldata)
  const columns = [
    {
      title: "BMW/Mercedes Owners with Income < $5 USD",
      dataIndex: 'col1',
      align: 'center'
    },
    {
      title: "Wealthy Male Phone Owners",
      dataIndex: 'col2',
      align: 'center'
    },
    {
      title: "Long-Quoted Last Name Users with Matching Email",
      dataIndex: 'col3',
      align: 'center'
    },
    {
      title: "Luxury Car Owners with Digit-Free Emails",
      dataIndex: 'col4',
      align: 'center'
    },
    {
      title: "Top 10 Cities by User Count and Income",
      dataIndex: 'col5',
      align: 'center'
    },

  ]

  // console.log(data1)

  return (
    <div>
      <Table
        columns={columns}
        dataSource={finaldata}
        loading={loading}
      />

    </div>

  )
}

export default DataTable; 
