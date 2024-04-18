import React from "react";
import "@/app/api/Statistici/statistici.css"; // Import CSS for styling

export default function StatisticsPage() {
  // Define the values for each statistic
  const clients = 1200;
  const appointments = 800;
  const repairedCars = 500;

  // Calculate the percentage completion for each statistic
  const clientPercentage = (clients / 2000) * 100;
  const appointmentsPercentage = (appointments / 1500) * 100;
  const repairedCarsPercentage = (repairedCars / 1000) * 100;

  // Calculate the circle radius based on the length of the longest text
  const longestTextLength = Math.max(
    clients.toString().length,
    appointments.toString().length,
    repairedCars.toString().length
  );
  const circleRadius = longestTextLength * 8;

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflowY: "auto",
        fontWeight: "lighter",
        backgroundImage: "url('/car-interior.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1 className="title ">Statistici</h1>
        <div className="statistics-container">
          {/* Client Statistics */}
          <div className="statistic">
            <div
              className="circle"
              style={{
                "--percentage": `${clientPercentage}%`,
                "--radius": `${circleRadius}px`,
              }}
            >
              <div className="statistic-value text-white">{clients}</div>
            </div>
            <div className="statistic-label">Clienți</div>
          </div>

          {/* Appointments Statistics */}
          <div className="statistic">
            <div
              className="circle"
              style={{
                "--percentage": `${appointmentsPercentage}%`,
                "--radius": `${circleRadius}px`,
              }}
            >
              <div className="statistic-value text-white">{appointments}</div>
            </div>
            <div className="statistic-label">Programări</div>
          </div>

          {/* Repaired Cars Statistics */}
          <div className="statistic">
            <div
              className="circle"
              style={{
                "--percentage": `${repairedCarsPercentage}%`,
                "--radius": `${circleRadius}px`,
              }}
            >
              <div className="statistic-value text-white">{repairedCars}</div>
            </div>
            <div className="statistic-label">Mașini reparate</div>
          </div>
        </div>
      </div>
    </div>
  );
}
