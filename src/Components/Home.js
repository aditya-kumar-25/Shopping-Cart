import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { baseUrl } from '../baseUrl'
import LoadItem from './LoadItem';
import Spinner from './Spinner';

function Home() {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([]);

  async function getItems() {
    setLoading(true)

    try {
      const response = await axios.get(baseUrl)
      setItems(response.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl mx-auto py-[50px] gap-x-5 gap-y-10 px-8'>
      {loading ? <Spinner /> : (
        items.map((obj, index) => (
          <LoadItem key={index} obj={obj} />
        ))
      )}
    </div>
  )
}

export default Home;
