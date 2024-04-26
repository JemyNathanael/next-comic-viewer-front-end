import React from 'react'
import { Search, Menu } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='bg-black text-white text-sm font-bold flex items-center justify-between md:justify-between p-2 gap-2'>
            <div className='flex items-center md:gap-8 gap-2'>
                <h1>NextDoujin</h1>
                <div className='flex gap-2'>
                    <div className='flex rounded overflow-hidden '>
                        <input placeholder='Search doujin...' type="text" className='w-4/5 md:w-96 px-2' />
                        <div className='bg-pink-500 flex items-center p-2'>
                            <Search />
                        </div>
                    </div>
                    <div className='bg-gray-500 radius rounded p-2 md:hidden'>
                        <Menu />
                    </div>
                </div>
                <div className='hidden md:flex md:gap-6'>
                    <Link href={'/random'}>Random</Link>
                    <Link href={'/random'}>Tags</Link>
                    <Link href={'/random'}>Artists</Link>
                    <Link href={'/random'}>Characters</Link>
                    <Link href={'/random'}>Parodies</Link>
                    <Link href={'/random'}>Groups</Link>
                </div>

            </div>
            <div className='hidden md:flex gap-2 md:text-white'>
                <div className='md:p-3 rounded-md'>
                    <p>Sign In</p>
                </div>
                <div className='md:bg-pink-500 md:p-3 rounded-md'>
                    <p>Register</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar