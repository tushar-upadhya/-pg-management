import LiveStudentUpdate from "@/components/liveStudentUpdate/LiveStudentUpdate";
import React from "react";

const data = [
 { name: "Ramakant Sharma", status: "3", time: "12:30", room: "101", hostel: "H1" },
 { name: "Ravi Verma", status: "E", time: "13:00", room: "102", hostel: "H2" },
 { name: "Ramakant Sharma", status: "3", time: "12:30", room: "101", hostel: "H1" },
 { name: "Ravi Verma", status: "E", time: "13:00", room: "102", hostel: "H2" },
 { name: "Ramakant Sharma", status: "3", time: "12:30", room: "101", hostel: "H1" },
 { name: "Ravi Verma", status: "E", time: "13:00", room: "102", hostel: "H2" },
 { name: "Ramakant Sharma", status: "3", time: "12:30", room: "101", hostel: "H1" },
 { name: "Ravi Verma", status: "E", time: "13:00", room: "102", hostel: "H2" },
];

const Out: React.FC = () => {
 return (
  <div className="p-4">
   <LiveStudentUpdate title="Hostel 1 - Updates" students={data} />
  </div>
 )
}
export default Out