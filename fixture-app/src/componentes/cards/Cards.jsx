import "./Cards.css";
import React from "react";

const Card = () => {
  const teams = [
    {
      name: "Team A",
      logo: "teamA.jpg",
      players: ["Player 1", "Player 2", "Player 3"],
      points: 10,
    },
    {
      name: "Team B",
      logo: "teamB.jpg",
      players: ["Player 4", "Player 5", "Player 6"],
      points: 20,
    },
    {
      name: "Team C",
      logo: "teamC.jpg",
      players: ["Player 7", "Player 8", "Player 9"],
      points: 30,
    },
    {
      name: "Team D",
      logo: "teamD.jpg",
      players: ["Player 10", "Player 11", "Player 12"],
      points: 40,
    },
    {
      name: "Team E",
      logo: "teamE.jpg",
      players: ["Player 13", "Player 14", "Player 15"],
      points: 50,
    },
    {
      name: "Team F",
      logo: "teamF.jpg",
      players: ["Player 16", "Player 17", "Player 18"],
      points: 60,
    },
    {
      name: "Team G",
      logo: "teamG.jpg",
      players: ["Player 19", "Player 20", "Player 21"],
      points: 70,
    },
    {
      name: "Team H",
      logo: "teamH.jpg",
      players: ["Player 22", "Player 23", "Player 24"],
      points: 80,
    },
  ];

  return (
    <div className="cards-container">
      {teams.map((team, index) => (
        <div key={index} className="card">
          <img src={team.logo} alt={team.name} className="card-img" />
          <h2 className="card-title">{team.name}</h2>
          <ul className="card-description">
            {team.players.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
          <p className="card-points">Points: {team.points}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
