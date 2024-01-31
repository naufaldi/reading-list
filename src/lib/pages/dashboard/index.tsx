"use client"

import React, { useEffect, useState } from 'react';
import { Book, columns } from '@/lib/components/dashboard/columns';
import { DataTable } from '@/lib/components/dashboard/data-table';

async function getData(): Promise<Book[]> {
  return [
    { id: "book1", pages: 320, title: "Books A", status: "backlog", author: "Author A", url: "https://example.com/book1" },
    { id: "book2", pages: 215, title: "Books B", status: "reading", author: "Author B", url: "https://example.com/book2" },
    { id: "book3", pages: 198, title: "Books C", status: "finish", author: "Author C", url: "https://example.com/book3" },
    { id: "book4", pages: 450, title: "Books D", status: "pause", author: "Author D", url: "https://example.com/book4" },
    { id: "book5", pages: 350, title: "Books E", status: "backlog", author: "Author E", url: "https://example.com/book5" },
    { id: "book6", pages: 290, title: "Books F", status: "reading", author: "Author F", url: "https://example.com/book6" },
    { id: "book7", pages: 310, title: "Books G", status: "finish", author: "Author G", url: "https://example.com/book7" },
    { id: "book8", pages: 425, title: "Books H", status: "pause", author: "Author H", url: "https://example.com/book8" },
    { id: "book9", pages: 220, title: "Books J", status: "backlog", author: "Author I", url: "https://example.com/book9" },
    { id: "book10", pages: 500, title: "Books I", status: "reading", author: "Author J", url: "https://example.com/book10" },
    { id: "book11", pages: 275, title: "Books K", status: "finish", author: "Author K", url: "https://example.com/book11" },
    { id: "book12", pages: 340, title: "Books L", status: "pause", author: "Author L", url: "https://example.com/book12" },
    { id: "book13", pages: 360, title: "Books", status: "backlog", author: "Author M", url: "https://example.com/book13" },
    { id: "book14", pages: 480, title: "Books M", status: "reading", author: "Author N", url: "https://example.com/book14" },
    { id: "book15", pages: 200, title: "Books  N", status: "finish", author: "Author O", url: "https://example.com/book15" },
    { id: "book16", pages: 390, title: "Books S", status: "pause", author: "Author P", url: "https://example.com/book16" },
    { id: "book17", pages: 410, title: "Books Q", status: "backlog", author: "Author Q", url: "https://example.com/book17" },
    { id: "book18", pages: 305, title: "Books W", status: "reading", author: "Author R", url: "https://example.com/book18" },
    { id: "book19", pages: 250, title: "Books ES", status: "finish", author: "Author S", url: "https://example.com/book19" },
    { id: "book20", pages: 430, title: "Books R", status: "pause", author: "Author T", url: "https://example.com/book20" },

  ]
    ;
}

const Dashboard = () => {
  const [data, setData] = useState<Book[]>([]); // Initialize state to hold your data

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
