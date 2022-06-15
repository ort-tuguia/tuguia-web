import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';


function Index() {
    const router = useRouter();
    useEffect(()=>{
        router.replace("/auth")
    },[])

}

export default Index;
