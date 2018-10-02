import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';
import App from '../App'

it('Title of the p change after click', ()=>{

    const link = shallow(<Link />)
  
    expect(link.find('p').text()).toEqual('Using enzyme')
  
    link.find('a').simulate('click')
  
    expect(link.find('p').text()).toEqual('Using enzyme after change')
  })