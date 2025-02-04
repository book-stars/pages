import { motion } from 'framer-motion';
import bookStar from "./bookstar.svg";


export function Welcome() {
  return (
    <main className="justify-center ">
                                                
    <section
      className="pt-8 lg:pt-32  bg-center bg-cover"
    >
      <img src={bookStar} alt="Logo booksta.rs" className="h-80 mx-auto my-14" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
      
        <div
          className="border border-border-dark fill-background-light p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4"
        >
          
          <span className="font-inter text-xs font-medium text-primary-light ml-3"
            >Rewolucja w Edukacji Online</span
          >
          <a
            href="javascript:;"
            className="w-8 h-8 rounded-full flex justify-center items-center bg-primary"
          >
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <motion.h1 initial={{ opacity: 0.1, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        
          className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-text-primary-light md:text-5xl leading-[50px]"
        >
          Uczniowie i nauczyciele 
          
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
          className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-text-primary-light mb-5 md:text-5xl leading-[50px]"
        >
          poza szkołą
          <span className="text-secondary-dark"> Online! </span>
        </motion.h1>
        <p
          className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-text-muted-light mb-9"
        >
          Tworzenie i korzystanie z interaktywnych form nauki jest szybsze i łatwiejsze!
        </p>
        <a
          href="javascript:;"
          className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-secondary-light rounded-full bg-surface-dark shadow-xs hover:bg-secondary hover:text-primary-dark transition-all duration-500"
        >
          Czytaj więcej
          <svg
            className="ml-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <div className="flex justify-center">
          {/* <img
            src="https://pagedone.io/asset/uploads/1691054543.png"
            alt="Dashboard image" className="rounded-t-3xl h-auto object-cover"
          /> */}
        </div>
      </div>
    </section>
                                                </main>
  );
}

