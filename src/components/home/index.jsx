import React from 'react';
import { Heading } from '../heading';
import { EmployeeList } from '../employee-list';

export const Home = () => (
  <>
    <div className='container mx-auto'>
        <h3 className='text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase '>
            CRUD API and HOOKS
        </h3>
        <Heading />
        <EmployeeList />
    </div>
  </>
);