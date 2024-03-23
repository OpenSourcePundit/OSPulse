/* eslint-disable react/prop-types */
import React from 'react'
import {Helmet} from 'react-helmet-async'

const Title = ({
    title = "OSPulse",
    description = "This is an instant messaging app OSPulse designed for you to be always feel connected."
}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content ={description} />
    </Helmet>
  )
}

export default Title