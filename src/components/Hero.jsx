import React from 'react'
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import WordRotate from '@/components/ui/word-rotate';
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import ShineBorder from "@/components/ui/shine-border";
 
const Icons = {
  email: (props) => <MailIcon {...props} />,
  linkedin: (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  github: (props) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
};
 
const DATA = {
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
      },
    },
  },
};


function Hero() {

  return (
    <div className='h-[90vh] pt-40 flex flex-wrap flex-row justify-evenly'>
        {/* <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
            "[mask-image:radial-gradient(circle_at_right_center,white,transparent,transparent)] ",
              "h-full"
            )}
        /> */}
        
        <div className='w-min'>
            <h1 className='text-7xl w-max bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Hi Everyone</h1>

            <div className='mt-6 text-xl text-left'>
                My name is <span className='text-fuchsia-400 text-4xl'>Dhruv</span> and I am a 
                    <WordRotate
                        className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-transparent bg-clip-text"
                        words={["Software Engineering.", "Programmer.","Problem-solver.","Developer."]}
                    />
            </div>

            <ShineBorder
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="m-auto sm:m-0 sm:mt-6"
                borderRadius={50}
            >
                <TooltipProvider>
                    <Dock direction="middle" className="rounded-[50px]">
                        {Object.entries(DATA.contact.social).map(([name, social]) => (
                            <DockIcon key={name}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a
                                            href={social.url}
                                            target='_blank'
                                            aria-label={social.name}
                                            className={cn(
                                                buttonVariants({ variant: "ghost", size: "icon" }),
                                                "size-12 rounded-full",
                                            )}
                                        >
                                            <social.icon className="size-4" />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </DockIcon>
                        ))}
                    </Dock>
                </TooltipProvider>
            </ShineBorder>
        </div>
        <div className='h-min min-w-fit mt-5'>
            <NeonGradientCard className="max-w-sm p-0 items-center justify-center text-center">
                <img className='rounded-2xl' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAtAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAYHBQj/xAA9EAABAwIEBAIIAwQLAAAAAAABAAIDBBEFEiExBkFRcSJhBxMyUoGRobEUI0IVM3KyNUNTYnSSosLR8PH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIFAwQG/8QAIREBAAICAwACAwEAAAAAAAAAAAECAxEEEiETMUFRYSL/2gAMAwEAAhEDEQA/AOboiLo5CIiAiIgInmgIKAqXPa3cqzJLm0Gg+6tqvZfqvOmP6dlS2VwO6too3KdQyWytd5d1UCDsQeyxEGmybR1ZmvNFYikN8pt3JV/srQrMCIilAiIgIiICIiAiIgIiICIiCib92SFRO6wDBzVyQgMN+ixrk2J3CrK0QhEUqq6ERhzvyRgvedmsFyfgFXLFLCzPPDLE3bNLGWD5kJtOlCIiINjfmr8Ly64O6sKuHSQKYRLJREV3MREQEREBERAREQEREBERBaqPZaPNWFfnHhCsKll6i23g3gubHgK2te6DDgfCW+3N/D0Hn8l5fCOC/t3HIqSW4p2j1kxG+QcvjoF3KNjI2NjjaGMaAGtaLAAbBebPk6+Q9/E48ZP9W+ljDcPpMMpmwUFOynjHJg38yeZWS7xAtf4muFiHagjopReOZn7asViI1py/jvhhtPQCto2Afgfy5m8zCf3b/hq09beS0HrdfQlbDE5ueVodG5pjma4aOYd79t/muH8S4M/AcYmw9xLo2+KF53cw7X8+XwXswZO3jK5eHpPaPp5aqi9sd1Sq4ReQL0w8M/TJREV3MREQEREBERAREQEREBERBRMLxuWNost1spuQBzJXucFYHh2KfjqnGpxDRUrWA/m5MznXtr0AHxuqXnXsuuKk3nUNs9FGEmlwyoxKVtn1jg2Me7G2/wByT8gt7XkYVitBUU7IcGinqaeFoYx1PA4xgDS2bQXWcamdur8OrQ3qGA/YrNvFrW3pt4rUx0iu2SiwY8WoHz/hzUsiqLX9TN+W+38LrHkrtXX0dFF6ysqoIGe9LIG/dU1Lt3r+2StS484ZlxzD6d1C1prKU2ZmdbMw7gnysD/6tiZXCYXpqSsmbyc2AtB/zWUSVkkLC+XD64NHuQ5z8mklXrFqzuHPJOO8TWZcLxjBsQwWWOLEqYwukBLDcEPta9rdwsenG/yXRPSJiOF41w/HJQVkU01LUAmMGzwDdpBadeYv2XPIHMMfgcDbU2N7L34rTaNyxuRStLar7C6iIuzzCIiAiIgIiICIiAiIgIiIN/8ARphkD6WqxCeJkkjpPVRZgDlAFyR0uT9ApxzhKhxXiHEI4oxBUuw8T0nq/C0SZiCSBvfwrF9GWKCGpqMMlItMRLD/ABAWcPkBbsVtmIk0/E+CVJ0bKJ6Vw6lwD2/yOXgvNoyz62MNaX49fGx8NiAcP4aKRuWEUseQWt+kX+q9FeJQSzYa6WExOmpHPMkTo7Zo7m5aQdxfUEdbWWb+1IiQBBU3PWNV3/Vukx5p4/H+F02M4TTUNQwF8tXG2JxGrNbvt55Q5eNhnCWD4JxbhdZRUjWRvZLFlcc2WWwLCL87B/0WzyNfUVbamewLAWxR8mA7m/Mm3/HNRUQtnjylzm2cHNe3drgbghROT1f4ImJmY9eypv72o53XnMxF0bQ2pheX7F0LLtPn5KJcUOQ/haSaST9Il8DPienYE+Sne/yrNZ/Tm/H3DkFfjOKV9yy81LTNyc5XkNe49g5q9vjmhpp+G6iR0bQ6lbngNtW2sLA9LaLMxajfHhdLDNJ62Z9fDLLJltnf6wOJtyGmg6WXi+kvERT4ZBQN9uqeSfJjbX+ZI+qmLTa9dImlceK+/wBOaoiLQYoiIgIiICIiAiIgIiICIiC5BNLTTx1FO/JLG4OY7oR/37rsmHT0XEFDR1wZmyPEoaHaxyAWI+pXF1lUGJV2GPMuHVD4nnUgO8LrbXHNccuL5I3H29XG5HxTMTG4l3hFYoqqKtpIKqnN4ZmB7OxV9ZjdidxsREUJERRdBiYo6kigbPXSsiiheH5nusLi9u/Zcf4oxc43i8lU0ObC0ZIWnfKOZ73JWz+latDpcPoGkEMDp5B5+y3/AH/RaF2WhxsWo7Sx+dn7W+OBERepniIiAiIgIiICIiAiIgIiICIiDpPovxN81JV4dNtTFr4nH3XXuPgR/qW8c1yX0dziLiERO2nhcw99CPsuosqcrsk242cs3kV1du8K3bDH8ZSKGkEXaQR1ClcHrFBIAJOw3UOcGAl+luqwaio9abN0Zf5pEeolyDiSulxDHq6ol0PrnRtHRrSWj7LzFfxD+kaz/Ey/zlWFr1jUQ+avO7TMiIisqIiICIiAiIgIiICKCbanZW3TgeyAfMqJlMQuqCQNyFjOkc7dxVN+qjsnqys7feCesZ7wWIhTsnq3L0f4ZNiGMsq4ZAyCicHPeRuSCA0fDVdSliErdBZw2K0D0WYtTtinwmRojne8zMcf63QAjuLfJdCFiFnci0zf1ucGlYw+MEZ2Gwu0jzVQnm/tSsmWJsg1Fj1WLJE6PcadVy29MwoLnO9ok9ynZPgilVo3F3CscMdXi9DUFmW8kkD23Dr7lpvp1tqtHFR/d+q6lxzVMpeG6lrz457RMb1J3+gXKLL3YLWmvrH5mOlb+L/r2+ara9rtj8CsSyDrou/Z5OrNRYmY8iVIe4bOPxTZ1ZSK2yVrh4jYq4piVdCIilAhIAudgix5n5ttgk+JiNqZJC86aBUKMx/ULKVzdE2SyFAgWUFSiCaaeWnlinheWTRODmPG7SOa7PwtxRR4/TsZmbFXhv5kBO55lvULimzrjYqsEhwcCQ5puHA2IPUHqueTFF49ejByLYZ8+n0MFK5hw56QaimLafGwaiDb8Q0fmM7j9XffuuhVWK0NLQGumqYxT5A8PBvmB2sPNeC2K1Z018XIpkrtkvhY7lbsrFSynpYXT1M4hiYLvkfoGjzWnYt6R6ZtMP2PTukmL7XqGlrQ229hv20WkY7xFiWO5fx8o9Sw3ELG5WA9bcz3XSmC8/bhl5uOsf59lVxPjbsbxIytuKaK7YGkWs3mT5nT6Lye6i9zflyUr3RWIjUMm9ptbch2KpZ7F1U7Yqn9NlKo03F0UAcgqwNECw6K9A7dpOisqWnK4HlzUwiY2y0S6K7molPhKxud0RVleoVSiKqwpbsFKICi6lEFLhoqm6i6Igc1TkbmzZRmva9tURSj8pVJ1OqIqwlWNlB02UopFJ2UO9pqlEFXNERAQ7IimBlM9kIiK7k//9k="></img>
            </NeonGradientCard>
        </div>
    </div>
  )
}

export default Hero