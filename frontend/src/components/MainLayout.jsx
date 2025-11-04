import React from 'react';
import { Button } from "@/components/ui/button";
import "@/styles/global.css";
import { 
  LayoutDashboard, 
  Box, 
  FolderOpen, 
  Terminal, 
  Settings 
} from "lucide-react";

export function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      
      <aside className="w-64 border-r bg-muted/40 p-4">
        
        <div className="mb-6 flex items-center px-2">
          <Terminal className="mr-2 h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold">ADB Kit</h2>
        </div>
        
        <nav className="flex flex-col space-y-1">
          <Button variant="ghost" className="justify-start text-base">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="justify-start text-base">
            <Box className="mr-2 h-4 w-4" />
            Application
          </Button>
          <Button variant="ghost" className="justify-start text-base">
            <FolderOpen className="mr-2 h-4 w-4" />
            File
          </Button>
          <Button variant="ghost" className="justify-start text-base">
            <Terminal className="mr-2 h-4 w-4" />
            Flasher
          </Button>
          <Button variant="ghost" className="justify-start text-base">
            <Settings className="mr-2 h-4 w-4" />
            Utility
          </Button>
        </nav>
      </aside>
      
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
      
    </div>
  );
}
