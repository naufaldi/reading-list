"use client"

import React, { useEffect, useState } from 'react';
import { Payment, columns } from '@/lib/components/dashboard/columns';
import { DataTable } from '@/lib/components/dashboard/data-table';

async function getData(): Promise<Payment[]> {
  return [
    { id: "h1kjif8b", amount: 600, status: "success", email: "k@example.com" },
    { id: "i2lkjg9c", amount: 650, status: "pending", email: "l@example.com" },
    { id: "j3mlkhad", amount: 700, status: "failed", email: "m@example.com" },
    { id: "k4nmlibe", amount: 750, status: "success", email: "n@example.com" },
    { id: "l5okmjcf", amount: 800, status: "pending", email: "o@example.com" },
    { id: "m6plnkdg", amount: 850, status: "failed", email: "p@example.com" },
    { id: "n7qmlodh", amount: 900, status: "success", email: "q@example.com" },
    { id: "o8rnmpdi", amount: 950, status: "pending", email: "r@example.com" },
    { id: "p9sognqj", amount: 1000, status: "failed", email: "s@example.com" },
    { id: "qatpohrk", amount: 1050, status: "success", email: "t@example.com" },
    { id: "rbuqpias", amount: 1100, status: "pending", email: "u@example.com" },
    { id: "scvrqjbt", amount: 1150, status: "failed", email: "v@example.com" },
    { id: "tdwsrkcu", amount: 1200, status: "success", email: "w@example.com" },
    { id: "uextsldv", amount: 1250, status: "pending", email: "x@example.com" },
    { id: "vfyutmdw", amount: 1300, status: "failed", email: "y@example.com" },
    { id: "wgzvunex", amount: 1350, status: "success", email: "z@example.com" },
    { id: "xhawvoey", amount: 1400, status: "pending", email: "aa@example.com" },
    { id: "yibxwpfz", amount: 1450, status: "failed", email: "bb@example.com" },
    { id: "zjcyxqga", amount: 1500, status: "success", email: "cc@example.com" },
    { id: "akdzyrhb", amount: 1550, status: "pending", email: "dd@example.com" }
  ]
    ;
}

const Dashboard = () => {
  const [data, setData] = useState<Payment[]>([]); // Initialize state to hold your data

  useEffect(() => {
    // Define an async function inside the useEffect
    const fetchData = async () => {
      const fetchedData = await getData(); // Fetch data
      setData(fetchedData); // Update state with the fetched data
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Dashboard;
