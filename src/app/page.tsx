"use client"
import Image from "next/image";
import { useState } from "react";

const phrases = [
  "No",
  "Are you sure?",
  "Like really sure?",
  "Say sike right now",
  "Pookie please?",
  "Don't do this to me",
  "I'm begging",
  "I'm gonna shit myself",
  "Literally on my hands and knees",
  "I'm gonna cry ...",
  "I'll walk into the ocean",
  "Say sike for real now",
  "Pretty please?",
];



export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16

  function handleClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length-1)];
  }
  
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
      {yesPressed ? (
          <>
          <div className="flex flex-col gap-16 justify-center items-center">
            <Image 
              src="/Heart Kirby No Background.webp" 
              alt="Happy Kirby" 
              height={300}
              width={200}
            />
            <div className="uppercase font-bold text-8xl">hooray!</div>
          </div>
            
          </>
        ) : (
          <>
            <div  className="flex flex-col gap-4 justify-center items-center">
              <Image 
                src="/Kirby with Knife.png" 
                alt="Kirby holding a knife" 
                height={300}
                width={200}
              />

              <div className="text-6xl font-medium">
                Will you be my Valentine?
              </div>

              <div className="mt-16 flex flex-row gap-16 items-center">
                <button
                  className="btn-yes-style"
                  onClick={() => setYesPressed(true)}
                >
                  <div className="uppercase" style={{ fontSize: yesButtonSize }}>Yes</div>
                </button>
                <button
                  onClick={handleClick}
                  className="btn btn-primary lowercase"
                >
                  {getNoButtonText()}
                </button>
              </div>
            </div>
          </>
        )
      }
      </div>
    </main>
  );
}
