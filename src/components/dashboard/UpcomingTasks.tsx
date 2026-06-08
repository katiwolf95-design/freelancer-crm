"use client";

import { useState } from "react";

export default function UpcomingTasks() {
    
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Call new client",
            completed: false,
        },
        {
            id: 2,
            text: "Send project proposal",
            completed: false,
        },
        {
            id: 3,
            text: "Finish landing page",
            completed: true,
        },
        {
            id: 4,
            text: "Create invoice",
            completed: false,
        },
    ]);

    const toggleTask = (id: number) => {
        setTasks(
            tasks.map((task) => 
            task.id === id
                ? {
                    ...task,
                    completed: !task.completed,
                  }
                : task
            )
        );
    };

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    return (
        <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-6">
                Upcoming Tasks
            </h2>

            <p className="text-sm text-gray-500 mt-1 mb-6">
                {completedTasks} of {tasks.length} completed
            </p>

            <div className="space-y-4">

                {tasks.map((task) => (
                    <label
                        key={task.id}
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                            className="w-4 h-4 accent-[#9b8acb]"
                        />

                        <span
                            className={`
                                transition
                                ${
                                    task.completed
                                        ? "line-through text-gray-400"
                                        : "text-gray-700"
                                }
                            `}
                        >
                                    {task.text}
                        </span>
                    </label>
                ))}    
            </div>
        </div>
    );
}