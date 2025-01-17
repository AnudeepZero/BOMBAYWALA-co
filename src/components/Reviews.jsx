import React from 'react'
import Image from 'next/image'

function Reviews() {
  return (
    <div>
    <section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
        <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What our clients are saying
                </h1>

                <div className="flex mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>

            <div className="flex justify-between mt-8 md:mt-0">
                <button title="left arrow" className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100   hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100  hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 " src="/menu_left.png" alt="" width={1000} height={500}/>

                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                    </div>
                </div>
            </div>

            <div className="p-8 bg-blue-500 border border-transparent rounded-lg ">
                <p className="leading-loose text-white">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div className="flex items-center mt-8 -mx-2">
                <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 " src="/menu_left.png" alt="" width={1000} height={500}/>

                    <div className="mx-2">
                        <h1 className="font-semibold text-white">Jeny Doe</h1>
                        <span className="text-sm text-blue-200">CEO, Jeny Consultency</span>
                    </div>
                </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div className="flex items-center mt-8 -mx-2">
                <Image className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="/menu_left.png" alt="" width={1000} height={500}/>

                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>
    </div>
  )
}

export default Reviews