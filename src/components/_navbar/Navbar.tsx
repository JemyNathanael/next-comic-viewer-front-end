"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { MenuIcon, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SignedIn from "../_auth/signed-in";
import SignInButton from "../_auth/sign-in-button";
import SignedOut from "../_auth/signed-out";
import SignOutButton from "../_auth/sign-out-button";
import { auth } from "@/lib/auth";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getSession, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavbarProps {}

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Navbar = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [session, setSession] = useState<Session | null>();

  const router = useRouter();

  useEffect(() => {
    async function getUserSession() {
      const user = await getSession();
      setSession(user);
    }
    getUserSession();
  }, []);

  return (
    <>
      <NavigationMenu className="p-3 bg-[#171717]">
        <NavigationMenuList className="lg:flex lg:flex-col lg:items-center lg:gap-2">
          <NavigationMenuItem className="flex justify-between lg:items-center lg:w-full lg:gap-8">
            <NavigationMenuLink
              href="/"
              className={cn(
                "text-purple-400 font-bold text-xl lg:text-2xl",
                spaceGrotesk.className
              )}
            >
              Next Doujin
            </NavigationMenuLink>
            <NavigationMenuList className="hidden lg:flex lg:items-center lg:gap-4 lg:text-white lg:font-bold ">
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/types">Types</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/genres">Genres</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="authors">Author</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            {/* Helper div for justify-between */}
            {!session && <div className="bg-transparent"></div>}
            {/* Impelement the SignedIn and SignedOut for next update */}
            {session && (
              <NavigationMenuList className="justify-self-end relative">
                <NavigationMenuTrigger>
                  <Avatar>
                    <AvatarImage src={session?.user.image || ""} />
                  </Avatar>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute p-2 w-44 rounded-xl flex flex-col justify-center items-center -translate-x-3/4 transition-all duration-500 bg-white border border-purple-400">
                  <Avatar>
                    <AvatarImage src={session?.user.image || ""} />
                  </Avatar>
                  <h1 className="font-bold">Hi, {session?.user.name}</h1>
                  <p
                    className="cursor-pointer text-sm text-red-400"
                    onClick={() => signOut()}
                  >
                    Logout
                  </p>
                </NavigationMenuContent>
              </NavigationMenuList>
            )}
          </NavigationMenuItem>
          <NavigationMenuItem className="flex gap-4 items-center justify-center w-full">
            <Button className="p-1 border rounded-md lg:hidden">
              <MenuIcon
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
                size={24}
              />
            </Button>
            <Input className="text-white" size={24} type="text" />
            <Button className="p-1 border rounded-md">
              <Search className="text-white" size={24} />
            </Button>
          </NavigationMenuItem>
          {isMenuOpen && (
            <NavigationMenuItem className="w-full h-screen flex flex-col grow bg-[#171717] text-white font-bold text-md p-3">
              <NavigationMenuLink>Home</NavigationMenuLink>
              <NavigationMenuLink>Types</NavigationMenuLink>
              <NavigationMenuLink>Genres</NavigationMenuLink>
              <NavigationMenuLink>Authors</NavigationMenuLink>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navbar;
