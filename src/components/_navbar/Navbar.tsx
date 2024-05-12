"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { MenuIcon, Search } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SignedIn from "../_auth/signed-in";
import SignInButton from "../_auth/sign-in-button";
import SignedOut from "../_auth/signed-out";
import SignOutButton from "../_auth/sign-out-button";
import { auth } from "@/lib/auth";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <NavigationMenu className="p-3 bg-[#171717]">
        <NavigationMenuList className="lg:flex lg:flex-col lg:items-center lg:gap-2">
          <NavigationMenuItem className="flex justify-center lg:items-center lg:w-full lg:gap-8">
            <NavigationMenuLink
              href="/"
              className="text-purple-400 font-bold text-xl lg:text-2xl"
            >
              Next Doujin
            </NavigationMenuLink>
            <NavigationMenuList className="hidden lg:flex lg:gap-4 lg:text-white lg:font-bold ">
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
