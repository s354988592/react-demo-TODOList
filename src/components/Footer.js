import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      所有
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      激活
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      完成的
    </FilterLink>
  </p>
)

export default Footer
