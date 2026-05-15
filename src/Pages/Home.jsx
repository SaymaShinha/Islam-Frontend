import { useLoaderData } from "react-router";
import { asmaUlHusna } from "../Functions/getDataFromAPI.js";
import { useState, useEffect } from "react";

function Home() {
    return (
        <>
        <div className="flex flex-col m-4 p-3">
            <h2 className="p-1">
                Furqan Life is a Quran reading platform that allows users to read Surahs,
            </h2>

            <h2 className="p-1">
                explore verses, and access structured translations in a clean and user-friendly interface.
            </h2>

            <h2 className="p-1">
                Our goal is to make Quran reading simple, accessible, and organized for everyone.
            </h2>

            <section className="mt-4 items-center justify-content-center">
                <h1 className="text-xl font-bold text-start">Features</h1>

                <ul className="list-disc pl-6 mt-2 space-y-1 text-start">
                    <li>📖 Read Quran Surah by Surah</li>
                    <li>🔍 Easy navigation between chapters</li>
                    <li>⚡ Fast and responsive design</li>
                    <li>📱 Mobile-friendly interface</li>
                    <li>🧭 Clean and structured browsing experience</li>
                </ul>
            </section>
            </div>
        </>
    )
}

export default Home;