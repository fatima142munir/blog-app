import Link from 'next/link'
import React from 'react'
import { Iblog } from '@/sanity/schemaTypes/typeBlog'

export const Hero = ({ heroData }: { heroData:Iblog}) => {
    return (
        <>
            <section className="text-pink body-font">
                <div className="container px-2 py-5 mx-auto">
                    <div className="flex sm:flex-col flex-wrap">
                        
                        <div className="sm:w-1/3 mx-auto h-full border-2 border-pink bg-yellow bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center">
                            <h2 className="tracking-widest text-xs title-font font-medium text-orange mb-1">{heroData.catName}</h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-purple mb-3">{heroData.name}</h1>
                            <p className="leading-relaxed text-pink mb-3">{heroData.summrey}</p>
                            <Link href={`/post/${heroData.slug}?`} className="text-purple items-center">Read More...</Link>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
