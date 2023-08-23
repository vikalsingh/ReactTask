import React, { useEffect, useState } from "react";
import { Card } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import DataTable from "react-data-table-component";
import axios from "axios";

const data = [
  {
    name: "2016",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2017",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2018",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2019",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "2020",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "2021",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "2022",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const customStyles = {
  headRow: {
    style: {
      backgroundColor: "gray",
      color: "white",
    },
  },
};

const Main = () => {
  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          console.log("=======================", res);
          setRecords(res.data.products);
          setFilterRecords(res.data.products);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  const handleFilter = (event) => {
    const newData = filterRecords.filter((row) =>
      row.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  };
  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Sent</h3>
            <span className="material-icons-outlined">inventory_2</span>
          </div>
          <h1>249</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Open Rate</h3>
            <span className="material-icons-outlined">category</span>
          </div>
          <h1>25</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Click Rate</h3>
            <span className="material-icons-outlined">groups</span>
          </div>
          <h1>1500</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Click Through</h3>
            <span className="material-icons-outlined">
              notification_important
            </span>
          </div>
          <h1>56</h1>
        </div>
      </div>

      <div className="main-title">
        <h2>Delivery</h2>
      </div>

      <div className="main-cards">
        <Card title="Card title" size="small">
          Card content
        </Card>
        <Card title="Card title" size="small">
          Card content
        </Card>
        <Card title="Card title" size="small">
          Card content
        </Card>
        <Card title="Card title" size="small">
          Card content
        </Card>
      </div>
      <div className="main-title">
        <h2>Email Data Chart</h2>
      </div>
      <div className="main-cards">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>

      <div className="searchDiv">
        <input type="text" placeholder="Search" onChange={handleFilter} style={{padding: 9}}/>
      </div>
      <DataTable
        columns={column}
        data={records}
        customStyles={customStyles}
        pagination
        selectableRows
      ></DataTable>
    </main>
  );
};

export default Main;
