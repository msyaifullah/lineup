// Define interfaces for teams and matches
export interface Team {
    id: number;
    name: string;
    points?: number; // Used for leaderboard
    matchesPlayed?: number; // Used for leaderboard
}

export interface Match {
    round: number;
    team1: Team | null;
    team2: Team | null;
    winner: Team | null;
    loser: Team | null;
    isDraw?: boolean; // Indicates if the match was a draw
}

export interface LeaderboardEntry {
    team: Team;
    points: number;
    matchesPlayed: number;
}

// Function to generate matches for single elimination
export type SingleElimination = (teams: Team[]) => Match[];

export const singleElimination: SingleElimination = (teams) => {
    if (teams.length < 4 || teams.length > 32 || (teams.length & (teams.length - 1)) !== 0) {
        throw new Error("Number of teams must be between 4 and 32, and a power of 2.");
    }

    const matches: Match[] = [];
    let round = 1;

    while (teams.length > 1) {
        const nextRoundTeams: Team[] = [];
        for (let i = 0; i < teams.length; i += 2) {
            const match: Match = {
                round,
                team1: teams[i],
                team2: teams[i + 1],
                winner: null,
                loser: null,
            };
            matches.push(match);
            nextRoundTeams.push({ id: -1, name: "Winner of Match" }); // Placeholder for the next round winner
        }
        teams = nextRoundTeams;
        round++;
    }

    return matches;
};

// Function to generate matches for double elimination
export type DoubleElimination = (teams: Team[]) => { upperBracket: Match[]; lowerBracket: Match[] };

export const doubleElimination: DoubleElimination = (teams) => {
    if (teams.length < 4 || teams.length > 32 || (teams.length & (teams.length - 1)) !== 0) {
        throw new Error("Number of teams must be between 4 and 32, and a power of 2.");
    }

    const upperBracket: Match[] = [];
    const lowerBracket: Match[] = [];
    let upperTeams = [...teams];
    let round = 1;

    // Upper bracket logic
    while (upperTeams.length > 1) {
        const nextRoundTeams: Team[] = [];
        for (let i = 0; i < upperTeams.length; i += 2) {
            const match: Match = {
                round,
                team1: upperTeams[i],
                team2: upperTeams[i + 1],
                winner: null,
                loser: null,
            };
            upperBracket.push(match);
            nextRoundTeams.push({ id: -1, name: "Winner of Match" }); // Placeholder for the next round winner
        }
        upperTeams = nextRoundTeams;
        round++;
    }

    // Lower bracket logic
    let lowerTeams = teams;
    round = 1;

    while (lowerTeams.length > 1) {
        const nextRoundTeams: Team[] = [];
        for (let i = 0; i < lowerTeams.length; i += 2) {
            const match: Match = {
                round,
                team1: lowerTeams[i],
                team2: lowerTeams[i + 1],
                winner: null,
                loser: null,
            };
            lowerBracket.push(match);
            nextRoundTeams.push({ id: -1, name: "Winner of Match" }); // Placeholder for the next round winner
        }
        lowerTeams = nextRoundTeams;
        round++;
    }

    return { upperBracket, lowerBracket };
};

// Function to generate matches for round robin
export type RoundRobin = (teams: Team[]) => Match[];

export const roundRobin: RoundRobin = (teams) => {
    if (teams.length < 4 || teams.length > 32) {
        throw new Error("Number of teams must be between 4 and 32.");
    }

    const matches: Match[] = [];
    const totalRounds = teams.length - 1;
    const halfSize = Math.floor(teams.length / 2);

    const rotatedTeams = [...teams];

    for (let round = 1; round <= totalRounds; round++) {
        for (let i = 0; i < halfSize; i++) {
            const match: Match = {
                round,
                team1: rotatedTeams[i],
                team2: rotatedTeams[rotatedTeams.length - 1 - i],
                winner: null,
                loser: null,
                isDraw: false, // Default to no draw
            };
            matches.push(match);
        }

        // Rotate teams for the next round
        rotatedTeams.splice(1, 0, rotatedTeams.pop()!);
    }

    return matches;
};

// Function to generate leaderboard
export type GenerateLeaderboard = (teams: Team[], matches: Match[]) => LeaderboardEntry[];

export const generateLeaderboard: GenerateLeaderboard = (teams, matches) => {
    const leaderboard: Map<number, LeaderboardEntry> = new Map();

    // Initialize leaderboard entries
    teams.forEach((team) => {
        leaderboard.set(team.id, {
            team,
            points: 0,
            matchesPlayed: 0,
        });
    });

    // Update leaderboard based on match results
    matches.forEach((match) => {
        if (match.team1 && match.team2) {
            const team1Entry = leaderboard.get(match.team1.id)!;
            const team2Entry = leaderboard.get(match.team2.id)!;

            team1Entry.matchesPlayed++;
            team2Entry.matchesPlayed++;

            if (match.isDraw) {
                team1Entry.points += 1; // 1 point for a draw
                team2Entry.points += 1;
            } else if (match.winner) {
                const winnerEntry = leaderboard.get(match.winner.id)!;
                const loserEntry = leaderboard.get(match.loser!.id)!;

                winnerEntry.points += 3; // 3 points for a win
            }
        }
    });

    // Convert to array and sort by points (descending), then by matches played (ascending)
    return Array.from(leaderboard.values()).sort((a, b) => b.points - a.points || a.matchesPlayed - b.matchesPlayed);
};
/*
// Example usage
const teams: Team[] = [
    { id: 1, name: "Team A" },
    { id: 2, name: "Team B" },
    { id: 3, name: "Team C" },
    { id: 4, name: "Team D" },
];

const singleElimMatches = singleElimination(teams);
console.log("Single Elimination Matches:", singleElimMatches);

const doubleElimMatches = doubleElimination(teams);
console.log("Double Elimination Matches:", doubleElimMatches);

const roundRobinMatches = roundRobin(teams);
console.log("Round Robin Matches:", roundRobinMatches);

const leaderboard = generateLeaderboard(teams, roundRobinMatches);
console.log("Leaderboard:", leaderboard);
*
