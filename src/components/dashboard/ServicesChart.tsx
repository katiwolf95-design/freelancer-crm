"use client";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

type ServicesChartProps = {
    data: {
        name: string;
        value: number;
    }[];
};

const COLORS = [
    "#7CC6C6", // Türkis
    "#F2C14E", // Gold
    "#F28CA6", // Rosé
    "#7BAAF7", // Blau
    "#B9A7E8", // Lavendel
];

export default function ServicesChart({
    data,
}: ServicesChartProps) {

    const total = data.reduce(
        (sum, item) => sum + item.value,
        0
    );

    return (
        <div className="h-40 flex flex-col md:flex-row items-center gap-6">

            <div className="w-full shrink-0 h-full">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={30}
                            outerRadius={70}
                            paddingAngle={4}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={entry.name}
                                    fill={
                                        COLORS[
                                            index % COLORS.length
                                        ]
                                    }
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="w-full space-y-3">
                {data.map((item, index) => (
                    <div
                        key={item.name}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{
                                    backgroundColor:
                                        COLORS[index % COLORS.length],
                                }}
                            />

                            <span className="text-sm text-gray-700">
                                {item.name}
                            </span>
                        </div>

                        <span className="text-sm font-medium text-gray-500">
                            {Math.round((item.value / total) * 100)}%
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}