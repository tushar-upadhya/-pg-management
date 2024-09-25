import LiveStudentUpdate from "@/components/liveStudentUpdate/LiveStudentUpdate";

const data = [
 { name: "Ramakant Sharma", status: "IN", time: "12:30", room: "101", hostel: "H1" },
 { name: "Ravi Verma", status: "OUT", time: "13:00", room: "102", hostel: "H2" },
 { name: "Ramakant Sharma", status: "IN", time: "12:30", room: "101", hostel: "H1" },
 { name: "Ravi Verma", status: "OUT", time: "13:00", room: "102", hostel: "H2" },
 { name: "Ramakant Sharma", status: "IN", time: "12:30", room: "101", hostel: "H1" },
 { name: "Ravi Verma", status: "OUT", time: "13:00", room: "102", hostel: "H2" },
 { name: "Ramakant Sharma", status: "IN", time: "12:30", room: "101", hostel: "H1" },
 { name: "Ravi Verma", status: "OUT", time: "13:00", room: "102", hostel: "H2" },
];

const AttendancePage = () => {
 return (
  <div className="p-4">
   <LiveStudentUpdate title="Hostel 1 - Updates" students={data} />
  </div>
 );
};

export default AttendancePage;
