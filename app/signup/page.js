"use client";

import React from 'react';

import { Alert } from '/components/ui/alert';
import { AlertTitle } from '/components/ui/alert';
import { Button } from '/components/ui/button';
import { Checkbox } from '/components/ui/checkbox';
import { Input } from '/components/ui/input';
import { Label } from '/components/ui/label';
import { Briefcase } from 'lucide-react';
import { FlagTriangleRight } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Mailbox } from 'lucide-react';
import { UserCircle2 } from 'lucide-react';
import Navbar from '../../components/navbar';

const SignUpForm_41W01 = () => {
    return (
        <>
        <Navbar />
        <div className="w-full max-w-sm mx-auto p-4 space-y-4 bg-white dark:bg-black shadow rounded-md">
            <h2 className="font-bold text-2xl text-center">Organizer Signup</h2>
            <Alert>
                <UserCircle2 className="h-4 w-4" />
                <AlertTitle>Name</AlertTitle>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your Full Name" />
            </Alert>
            <Alert>
                <Mailbox className="h-4 w-4" />
                <AlertTitle>Email</AlertTitle>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Enter your Email" />
            </Alert>
            <Alert>
                <Briefcase className="h-4 w-4" />
                <AlertTitle>Job Title</AlertTitle>
                <Label htmlFor="job">Job Title</Label>
                <Input id="job" placeholder="Enter your Job Title" />
            </Alert>
            <Alert>
                <FlagTriangleRight className="h-4 w-4" />
                <AlertTitle>Company</AlertTitle>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Enter your Company Name" />
            </Alert>
            <Alert>
                <Lock className="h-4 w-4" />
                <AlertTitle>Password</AlertTitle>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Enter your Password" />
            </Alert>
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </label>
            </div>
            <Button variant="primary" className="w-full">Sign Up</Button>
        </div>
        </>
    )
}

export default SignUpForm_41W01;