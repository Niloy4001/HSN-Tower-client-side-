import React from 'react'

const Announcement = () => {
    const announcements = [
        "Maintenance work on January 20th.",
        "Water supply will be interrupted from 10 AM to 2 PM on January 21st.",
        "New parking slots are available from February.",
      ];
  return (
    <div>
    <h1 className="text-2xl font-bold mb-5">Announcements</h1>
    <div className="bg-white shadow-md rounded-lg p-5">
      <ul className="space-y-3">
        {announcements.map((announcement, index) => (
          <li key={index} className="text-lg border-b pb-2">
            {announcement}
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Announcement