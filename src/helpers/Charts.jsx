import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Charts({ data, color, gradient }) {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tickLine={false} />
                <YAxis tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke={color} fill={color} />
            </AreaChart>
        </ResponsiveContainer>

        // For liner gradient

        // <ResponsiveContainer width="100%" height="100%">
        //     <AreaChart width={730} height={250} data={data}
        //         margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        //         <defs>
        //             <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        //                 <stop offset="5%" stopColor={color} stopOpacity={0.8} />
        //                 <stop offset="95%" stopColor={color} stopOpacity={0} />
        //             </linearGradient>
        //         </defs>
        //         <XAxis dataKey="name" />
        //         <YAxis />
        //         <CartesianGrid strokeDasharray="3 3" />
        //         <Tooltip />
        //         <Area type="monotone" dataKey="pv" stroke={color} fillOpacity={1} fill="url(#colorPv)" />
        //     </AreaChart>
        // </ResponsiveContainer>
    );
}

