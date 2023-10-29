"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import Profile from '@components/Profile';

import React from 'react'

const MyProfile = () => {

    const {data: session} = useSession();

    const [posts, setPosts] = useState([]);

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

    useEffect(() => {
        const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();

        setPosts(data);
        }
        if(session?.user.id) fetchPosts();
    }, []);

    return (
        <Profile 
            name="My"
            desc="Welcome to your profile!"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile