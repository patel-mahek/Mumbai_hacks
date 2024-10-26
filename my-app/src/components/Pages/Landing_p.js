import Head from '../Functional_c/Head';
import Content from '../Functional_c/Content';
import Fotter from '../Functional_c/Fotter';
import Greet from '../Functional_c/Greet';
import State_t from '../Functional_c/State_t';

import './Landing_p.css'
import React from 'react'

const Landing_p = () => {
  return (
    <div>
      <div className="Page1">
      <div className='right'>
        <Head></Head>
          <Content></Content>
      </div>
      <div className='left'>
        <Greet></Greet>
        {/* <Props name1={'Dashboard'}></Props>
        <Props name2={'page2'}></Props>
        <Props name3={'page3'}></Props>
        <Props name4={'page4'}></Props> */}
      </div>
    </div>
    <Fotter></Fotter>
    <div className='p2'></div>
      <State_t></State_t>
    </div>
  )
}

export default Landing_p
