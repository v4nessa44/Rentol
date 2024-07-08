import React from 'react'
import { useState } from 'react';
import styles from "./Home.module.css";

import {useEffect} from "react";
import axios from "axios";
import { Flex, Spin } from 'antd';

const Home = () => {
  const[items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = async () =>{
    try{
      setIsLoading(true);
      const response = await axios.get("https://668150a804acc3545a0655e4.mockapi.io/items");
    
    setItems(response.data);
    setIsLoading(false);
  }catch (err){
    console.log(err);
  } 
  };

  useEffect(() => {
    
    fetchItems();
  },[]);

  if (isLoading){
    return <h1>
    <Flex align="center" gap="middle">
    <Spin size="large" />
  </Flex>
    </h1>
  }

  return (
    <div className={styles.main}>
      {items.map(item =>
        <div className={styles.card}>
          <img src={item.image}/>
          <div>
            <h2>{item.name}</h2>
            <h2>${item.price}</h2>
          </div>

        </div>
        )}
    </div>
  )
}

export default Home