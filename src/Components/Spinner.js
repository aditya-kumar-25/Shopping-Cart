import React from 'react'

const loadingURL = 'https://media0.giphy.com/media/ZO9b1ntYVJmjZlsWlm/200.webp?cid=ecf05e47kcjgz49o4odr0jcp6o5pkngm6fv6tvp7hb7izdu9&ep=v1_gifs_search&rid=200.webp&ct=g';

function Spinner() {
  return (
        <img src={loadingURL} alt='Loading' className='fixed top-[35%] left-[40%]' />
  )
}

export default Spinner
