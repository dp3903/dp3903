import React from 'react'
import Marquee from "@/components/ui/marquee";

const techStack = [
    { name: "Angular", src: "angular.png" },
    { name: "C++", src: "c++.png" },
    { name: "C#", src: "csharp.png" },
    { name: "CSS3", src: "css3.png" },
    { name: "Dart", src: "dart.png" },
    { name: "Django", src: "django.png" },
    { name: "Docker", src: "docker.png" },
    { name: "Flutter", src: "flutter.png" },
    { name: "HTML5", src: "html5.png" },
    { name: "JavaScript", src: "js.png" },
    { name: "Linux", src: "linux.png" },
    { name: "MySQL", src: "mysql.png" },
    { name: "Node.js", src: "nodejs.png" },
    { name: "Postman", src: "postman.png" },
    { name: "Python", src: "python.png" },
    { name: "ReactJS", src: "reactjs.png" },
    { name: "Tailwind CSS", src: "tailwindcss.png" },
    { name: "TypeScript", src: "typescript.png" },
    { name: "Vite.js", src: "vitejs.png" },
];

const firstRow =techStack.slice(0,techStack.length / 2);
const secondRow =techStack.slice(techStack.length / 2 + 1);

function Skills() {
  return (
    <div className='w-100 flex flex-col justify-center items-center' >
        <div className='w-4/5 relative before:absolute before:size-full before:content[""] before:inset-x-0 before:z-10 before:bg-gradient-to-r before:from-black before:via-transparent before:to-black'>
            <Marquee pauseOnHover className="[--duration:20s]">
                {techStack.map((item) => (
                    <div key={item.name} className='h-30 w-30 flex flex-col items-center justify-between p-2 mx-4'>
                        <img className='relative' src={"src/assets/" + item.src} alt={item.name} height="40" width="40"></img>
                        <span className='relative bottom-0'>{item.name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    </div>
  )
}

export default Skills