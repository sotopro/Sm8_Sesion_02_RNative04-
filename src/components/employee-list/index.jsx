import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

export const EmployeeList = () => {
    const { employees } = useContext(GlobalContext);
    return (
        <>
            {employees.length > 0 ? (
                <>
                    {employees.map((employee) => (
                        <div
                         className='flex items-center bg-gray-100 mb-10 shadow'
                         key={employee.id}
                        >
                            <div className='flex-auto text-left px-4 py-2 m-2'>
                                <p className='text-gray-900 leading-none'>
                                    {employee.name}
                                </p>
                                <p className='text-gray-600'>
                                    {employee.designation}
                                </p>
                                <p className='inline-block text-sm font-semibold mt-1'>
                                    {employee.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <p className='text-center bg-gray-100 text-gray-500 py-5'>
                    No employees found.
                </p>
            )}
        </>
    )
}