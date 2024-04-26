import React from 'react'
import { Input } from './ui/input'
import { FilePenLine, LogIn, Menu, Search } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

type Props = {}

const NavbarShadCn = (props: Props) => {
  return (
    <div className='bg-black p-2 flex justify-between'>
        <div className='flex gap-2 justify-start md:items-center'>
            <div className='text-pink-500 flex items-center text-sm hover:cursor-pointer font-bold md:text-lg'>
                <h1>NextDoujin</h1>
            </div>
            <div className='flex gap-2 md:gap-3'>
                <div className='flex rounded overflow-hidden'>
                    <Input placeholder='Search for doujin' className='rounded-none'/>
                    <div className='bg-pink-500 flex items-center p-2'>
                    <Search size={20} strokeWidth={3} className='text-white'/>
                    </div>
                </div>
                <div className='bg-gray-500 flex items-center p-2 rounded md:hidden'>
                    <Menu className='text-white'/>
                </div>
                <div className='text-white hidden md:flex md:gap-3 md:items-center'>
                    <Link href={'/random'}>Random</Link>
                    <Link href={'/tags'}>Tags</Link>
                    <Link href={'/artists'}>Artists</Link>
                    <Link href={'/characters'}>Characters</Link>
                    <Link href={'/parodies'}>Parodies</Link>
                    <Link href={'/groups'}>Groups</Link>
                </div>
            </div>

            
        </div>
        <div className='hidden md:gap-2 md:flex'>
                <Button variant={'ghost'} className='text-white hover:text-white'>
                    <LogIn />
                    <p>Sign in</p>
                </Button>
                <Button variant={'default'} className='text-white bg-pink-500'>
                    <FilePenLine  />
                    <p>Register</p>
                </Button>
            </div>
    </div>
  )
}

export default NavbarShadCn