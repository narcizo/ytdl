"use client";
import { useState, useEffect } from 'react';
import { asciiArts } from '../static/asciiArts';

export default function Home() {

  const [asciiIndex, setAasciiIndex] = useState(Math.floor(Math.random() * asciiArts.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setAasciiIndex(Math.floor(Math.random() * asciiArts.length));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <div className="flex flex-col justify-center items-center flex-wrap gap-3"> */}
      <div className="grid grid-cols-1">
        {/* <div className='absolute inset-y-14'> */}
        <div className='grid grid-cols-subgrid text-center h-[50vh]'>
          <div className='flex justify-center items-center'>
            <pre className="whitespace-pre-wrap">
              {asciiArts[asciiIndex]}
            </pre>
          </div>
        </div>

        {/* <div className='absolute inset-y-2/4'> */}
        <div className='grid grid-cols-subgrid col-span-4'>
          <form className="flex flex-row flex-wrap justify-center w-screen px-80">
            <div className="flex flex-row w-full">
              <input className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="url" pattern="https://.*" required placeholder="Paste the youtube link here"/>
              <select id="format" className="w-20 justify-end items-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="mp3">mp3</option>
                <option value="mp4">mp4</option>
              </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-8 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Download
            </button>
          </form>
        </div>
      </div>
      {/* <div className="grid grid-cols-4">
        <div>
          1
        </div>
        <div>
          1
        </div>
        <div>
          1
        </div>
        <div>
          1
        </div>
        <div>
          1
        </div>
        <div>
          1
        </div>
        <div>
          1
        </div>
        <div className='grid grid-cols-subgrid gap-4 col-span-3'>
          1
        </div>
        <div>
          1
        </div>
        <div>
          1
        </div>
        <div>
          1
        </div>
      </div> */}
    </>
  );
}
