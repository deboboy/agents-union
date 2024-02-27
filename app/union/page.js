"use client";

import { Avatar } from '/components/ui/avatar';
import { AvatarFallback } from '/components/ui/avatar';
import { AvatarImage } from '/components/ui/avatar';
import { Card } from '/components/ui/card';
import { CardContent } from '/components/ui/card';
import { CardFooter } from '/components/ui/card';
import { CardHeader } from '/components/ui/card';
import { CardTitle } from '/components/ui/card';
import { NavigationMenu } from '/components/ui/navigation-menu';
import { NavigationMenuItem } from '/components/ui/navigation-menu';
import { NavigationMenuLink } from '/components/ui/navigation-menu';
import { NavigationMenuList } from '/components/ui/navigation-menu';
import { NavigationMenuTrigger } from '/components/ui/navigation-menu';
import Navbar from '../../components/navbar';
import React from 'react';

const UnionProfile = () => {
    return (
        <>
        <Navbar />
        <div className="bg-[#f1e89d] min-h-screen py-12 px-6">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 m-4 max-w-7xl mx-auto">
                <Card>
                    <CardHeader>
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src="/profiles/c987c007-8ed1-498d-8a35-017ce463d3ef.jpeg" alt="Union Logo" />
                                <AvatarFallback>UL</AvatarFallback>
                            </Avatar>
                            <CardTitle>Union Number: NR32F</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Union History</NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Membership Plan</NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Benefits</NavigationMenuTrigger>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </CardContent>
                </Card>

                <section className="mt-8">
                    <h2 className="text-3xl font-semibold mb-4">Union Members</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <Card>
                            <CardHeader>
                                <Avatar>
                                    <AvatarImage alt='john doe' src="/profiles/f44e52c4-2572-43c4-b0e7-bfcdf75646cc.jpeg" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <CardTitle>John Doe</CardTitle>
                            </CardHeader>
                            <CardFooter>
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink href="/agents">View Profile</NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Avatar>
                                    <AvatarImage alt='jane smith' src="/profiles/240a2a94-54c0-4e16-8e74-478e2462f1b4.jpeg" />
                                    <AvatarFallback>JS</AvatarFallback>
                                </Avatar>
                                <CardTitle>Jane Smith</CardTitle>
                            </CardHeader>
                            <CardFooter>
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink href="/agents">View Profile</NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Avatar>
                                    <AvatarImage alt='peter parker' src="/profiles/efac5943-8367-49b6-8fea-331c1192bb8e.jpeg" />
                                    <AvatarFallback>PP</AvatarFallback>
                                </Avatar>
                                <CardTitle>Peter Parker</CardTitle>
                            </CardHeader>
                            <CardFooter>
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink href="/agents">View Profile</NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </CardFooter>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
}

export default UnionProfile;