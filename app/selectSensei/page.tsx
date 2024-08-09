'use client'
import Image from "next/image";
import { useState } from "react";

export default function SelectSensei() {

    const [sensei, setSensei] = useState('');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
            <h1 className="text-3xl font-bold">Select Your Sensei</h1>
            <div className="flex gap-4 mt-8">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    onClick={() => setSensei('Michael')}
                >
                    Michael
                    <p className=""> Easy</p>
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    onClick={() => setSensei('Braum')}
                >
                    Braum
                    <p className=""> Tough</p>
                </button>
            </div>
            <div className="mt-8">
                <h2>You selected: {sensei}</h2>
            </div>
        </div>
    );
}

