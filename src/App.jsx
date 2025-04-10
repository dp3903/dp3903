import './App.css'
import { Button } from "@/components/ui/button"
import { ThemeProvider, useTheme } from "@/components/theme-provider"
import { ModeToggle } from './components/test'
import { MagicCard } from "@/components/ui/magic-card";
import { useEffect } from 'react';
import Meteors from './components/ui/meteors';
import Hero from './components/Hero';
import { Separator } from '@radix-ui/react-dropdown-menu';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BlurFade from './components/ui/blur-fade';

function App() {

  const { theme } = useTheme();
  
  useEffect(() => {
    console.log(theme === "dark");
  });

  return (
    <div className=''>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BlurFade delay={0.25} inView>
          <Hero/>
        </BlurFade>

        <Separator className=' mb-40 border-0' />

        <BlurFade delay={0.25} inView>
          <h1 className='mb-10 text-4xl'>My Skills</h1>
          <Skills/>
        </BlurFade>

        <Separator className='mt-40 mb-40 border-0' />

        <BlurFade delay={0.25} inView>
          <h1 className='mb-10 text-4xl'>Projects</h1>
          <Projects/>
        </BlurFade>

      </ThemeProvider>
    </div>
  )
}

export default App
