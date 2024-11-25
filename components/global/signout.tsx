"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from '../ui/button';

type Props = {}

const SignOutButton = (props: Props) => {
    const router = useRouter();

    const handleSignOut = async () => {
        document.cookie = 'token=; Max-Age=0; path=/';

        router.push('/login');
    };

    return (
        <Button className="w-full" onClick={handleSignOut}>Sign Out</Button>
    );
}

export default SignOutButton