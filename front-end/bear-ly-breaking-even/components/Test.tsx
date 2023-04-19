import Head from 'next/head'
import {useRouter} from "next/router"
import {useState, useEffect} from "react"
import PageHeader from '@/components/PageHeader'
import ExpenseTable from '@/components/ExpenseTable'
import ExpenseTable2 from '@/components/ExpenseTable2'
import ExpenseTable3 from '@/components/ExpenseTable3'
import ExpenseTable4 from '@/components/ExpenseTable4'
import ExpenseTable5 from '@/components/ExpenseTable5'
import classNames from "classnames";


function Tab({ label, active, onClick }) {
    return (
      <li
        className={classNames(
          "cursor-pointer",
          "text-gray-600",
          "py-4",
          "px-6",
          "border-b-4",
          active ? "border-blue-500" : ""
        )}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }

  function Test() {
    const [activeTab, setActiveTab] = useState(1);
  
    const renderTable = () => {
      switch (activeTab) {
        case 1:
          return <ExpenseTable />;
        case 2:
          return <ExpenseTable2 />;
        case 3:
          return <ExpenseTable3 />;
        case 4:
          return <ExpenseTable4 />;
        case 5:
          return <ExpenseTable5 />;
        default:
          return null;
      }
    }

  return (
    <div className="container mx-auto px-4">
      <ul className="flex border-b">
        <Tab
          label="Home & Utils"
          active={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />
        <Tab
          label="Transportation"
          active={activeTab === 2}
          onClick={() => setActiveTab(2)}
        />
        <Tab
          label="Food & Groceries"
          active={activeTab === 3}
          onClick={() => setActiveTab(3)}
        />
        <Tab
          label="Entertainment"
          active={activeTab === 4}
          onClick={() => setActiveTab(4)}
        />
        <Tab
          label="Health"
          active={activeTab === 5}
          onClick={() => setActiveTab(5)}
        />
      </ul>
      {renderTable()}
    </div>
  );
  }

export default Test;