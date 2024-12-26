import React from 'react';

function Todolist() {
    const list = [
        "Wake up at 7:00 am",
        "Brush your teeth at 7:15 am",
        "Take shower at 7:30 am",
        "Get ready at 8:00 am",
        "Breakfast at 8:15 am",
        
        "At morning 8:30 am breakfast",
        "Going for collage at 9:15 am",
        "Attend classes from 9:20 am to 12:15 pm",
        "Lunch at 12:30 pm",
        "Attend classes from 1:00 pm to 4:00 pm",
        "Break at 4:00 pm",
        "Study from 4:30 pm to 6:30 pm",
        "Dinner at 8:00 pm",
        "Free time from 9:00 pm to 11:00 pm",
        "Sleep at 1:00 am"
    ];

    return (
        <div>
            <h1>My Todolist</h1>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;