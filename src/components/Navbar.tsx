"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem,  } from "./ui/navbar-menu";
import { cn } from "@/utils/utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        
                    </MenuItem>
                </Link>
                <Link href={"/about"}>
                    <MenuItem setActive={setActive} active={active} item="About">
                        
                    </MenuItem>
                </Link>
                 
                    <MenuItem setActive={setActive} active={active} item="Portfolio">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="https://github.com/CoderRedwing">My Github</HoveredLink>
                            <HoveredLink href="https://www.linkedin.com/in/ajitesh-mishra-a32825227/">My Linkedin Profile</HoveredLink>
                            <HoveredLink href="ajiteshmishra2002@gmail.com">My Gmail</HoveredLink>
                            <HoveredLink href="/courses">Writing</HoveredLink>
                            <HoveredLink href="/courses">Music Production</HoveredLink>
                        </div>
                    </MenuItem>
               
                 <Link href={"https://form.typeform.com/to/kIbJAXgO"}>
                    <MenuItem setActive={setActive} active={active} item="Contact"/>
                        
                </Link>
                
            </Menu>

        </div>
    )   
}

export default Navbar;