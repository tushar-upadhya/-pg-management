import RoomGrid from '@/components/roomGrid/RoomGrid';
import React from 'react';

const roomsData = [
 { number: 101, status: 'occupied' },
 { number: 102, status: 'occupied' },
 { number: 103, status: 'occupied' },
 { number: 104, status: 'occupied' },
 { number: 105, status: 'occupied' },
 { number: 106, status: 'occupied' },
 { number: 107, status: 'occupied' },
 { number: 108, status: 'vacant' },
 { number: 109, status: 'vacant' },
 { number: 110, status: 'vacant' },
 { number: 111, status: 'vacant' },
 { number: 112, status: 'occupied' },
 { number: 113, status: 'occupied' },
 { number: 114, status: 'occupied' },
 { number: 115, status: 'occupied' },
 { number: 116, status: 'occupied' },
 { number: 117, status: 'vacant' },
 { number: 118, status: 'vacant' },
 { number: 119, status: 'vacant' },
 { number: 120, status: 'vacant' },
 { number: 121, status: 'occupied' },
 { number: 122, status: 'occupied' },
 { number: 123, status: 'occupied' },
 { number: 124, status: 'occupied' },
 { number: 125, status: 'occupied' },
 { number: 126, status: 'vacant' },
 { number: 127, status: 'highlight' },
 { number: 128, status: 'vacant' },
 { number: 129, status: 'vacant' },
 { number: 130, status: 'vacant' },
 { number: 131, status: 'vacant' },
 { number: 132, status: 'vacant' },
 { number: 133, status: 'vacant' },
 { number: 134, status: 'vacant' },
 { number: 135, status: 'vacant' },
 { number: 136, status: 'highlight' },
 { number: 137, status: 'highlight' },
 { number: 138, status: 'vacant' },
 { number: 139, status: 'vacant' },
 { number: 140, status: 'vacant' },
];

const AssignedPage: React.FC = () => {
 return (
  <div className="p-4 sm:p-6 w-full">
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 max-w-full mx-auto">
    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={5}
      building="H1"
      rooms={roomsData}
     />
    </div>
    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={7}
      building="H2"
      rooms={roomsData}
     />
    </div>
    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={2}
      building="H3"
      rooms={roomsData}
     />
    </div>
    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={4}
      building="H4"
      rooms={roomsData}
     />
    </div>

    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={5}
      building="H1"
      rooms={roomsData}
     />
    </div>
    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={7}
      building="H2"
      rooms={roomsData}
     />
    </div>
    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={2}
      building="H3"
      rooms={roomsData}
     />
    </div>
    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={4}
      building="H4"
      rooms={roomsData}
     />
    </div>


    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={5}
      building="H1"
      rooms={roomsData}
     />
    </div>
    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={7}
      building="H2"
      rooms={roomsData}
     />
    </div>
    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={2}
      building="H3"
      rooms={roomsData}
     />
    </div>
    <div>
     <RoomGrid
      bedType="6 Bedded Bunker"
      floorNo={4}
      building="H4"
      rooms={roomsData}
     />
    </div>
   </div>
  </div>
 );
};

export default AssignedPage;
