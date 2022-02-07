import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Food For All',
  description: 'Here we donate food to the needy once from the resturant and in coordination with NGOs.',
  keywords: 'food',
}

export default Meta
