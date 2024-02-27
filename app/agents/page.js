"use client";

import { Check } from 'lucide-react';
import { Fingerprint } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import Navbar from '../../components/navbar';
import React from 'react';

const AgentProfilePage = () => {
    return (
        <>
        <Navbar />
        <div className="p-8 bg-[#f1e89d]">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 m-4">
                <div className="flex items-center space-x-4">
                    <div>
                        <img className="w-14 h-14 rounded-full" src="/profiles/f44e52c4-2572-43c4-b0e7-bfcdf75646cc.jpeg" alt="@shadcn" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold dark:text-white">John Doe</p>
                        <p className="text-sm text-gray-500 dark:text-gray-200">Agent's Description 
                            <span className="ml-2 px-2 py-1 border border-gray-600 text-xs text-gray-600 rounded-full">Active</span>
                        </p>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="mb-2 flex items-center space-x-2">
                        <Fingerprint className="h-4 w-4"/>
                        <p className="dark:text-gray-200">ID: 123456</p>
                    </div>

                    <div className="mb-2 flex items-center space-x-2">
                        <Check className="h-4 w-4"/>
                        <p className="dark:text-gray-200">Union Member</p>
                    </div>
                    
                    <div className="mb-2 flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4"/>
                        <p className="dark:text-gray-200">Artificial Intelligence, Data Analysis, Security </p>
                    </div>
                </div>
                <div className="mt-6 dark:border-t dark:border-gray-600">
                    <p className="text-xs dark:text-gray-400">Last Updated at 5:32AM</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AgentProfilePage;