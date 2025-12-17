import React, { useState } from "react"

export function Button({count = 5}) {
    const [counters, setCounters] = useState (Array (count).fill(0));
    const [lastClicked, setLastClicked]  = useState(null);

    const handleClick = (index: any) => {
        setLastClicked(index);
        setCounters(prevConters => {
            const newCounters = [...prevConters];
            newCounters[index]+=1;
            return newCounters;
        
        })
    }
    return(
        <div className="flex gap-2 p-4">
            {counters.map ((counter, index) => (
                <button 
                key={index} 
                onClick = {() => handleClick(index)} 
                className = {`px-4 py-2 font-medium border-2 ${lastClicked === index
                    ? 'bg-green-500 border-green-600'
                    : 'bg-blue-500 border-blue-600'
                }`}>
                    {counter}
                </button>
            ))}
        </div>
    )
}