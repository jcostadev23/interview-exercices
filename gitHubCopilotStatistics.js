/*
Exercise: GitHub Copilot Statistics Manager

Create a GitHub Copilot Statistics Manager to help the boss understand how the team is utilizing GitHub Copilot.

Your solution should include functionality to:
	- Add users to the system
	- Add an entry every time a user uses copilot
	- List all users who have used GitHub Copilot, sorted by usage frequency (most frequent users first).
	- List all usages of copilot by order of entry.

Example:
Add user Costa
Add user Aurelio
Add user Maria
Add entry Maria used copilot
Add entry Aurelio used copilot
Add entry Maria used copilot

List copilot users:
Maria 2
Aurelio 1
Costa 0

List usages:
Maria used copilot
Aurelio used copilot
Maria used copilot

Tip: Do not repeat objects. Use ids.
 */

class GitHubCopilotStatisticsManager {
  constructor() {
    this.users = {};
    this.id = 1;
  }

  createEntryTime() {
    const date = new Date();
    const hours = date.getHours().toLocaleString().padStart(2, "0");
    const minutes = date.getMinutes().toLocaleString().padStart(2, "0");
    const secounds = date.getSeconds().toLocaleString().padStart(2, "0");

    return `${hours}${minutes}${secounds}`;
  }

  addUser(name) {
    const id = this.id++;
    this.users[id] = { id, name };

    return id;
  }

  addEntry(id) {
    const user = this.users[id];

    if (!user) {
      return false;
    }

    if (!user.entries) {
      user.entries = [];
    }

    user.entries.push(this.createEntryTime());
    return user.entries.length;
  }

  listOfActiveUsers() {
    return Object.values(this.users)
      .filter((user) => user.entries.length > 0)
      .sort((a, b) => {
        const lastEntryA = parseInt(a.entries[a.entries.length - 1]);
        const lastEntryB = parseInt(b.entries[b.entries.length - 1]);
        return lastEntryB - lastEntryA;
      })
      .map((user) => `${user.name} ${user.entries.length}`);
  }

  listOfUsageByEntry() {
    return Object.values(this.users)
      .map((user) => {
        if (!user.entries) {
          return false;
        }

        return `${user.name} used copilot`;
      })
      .flat();
  }
}

module.exports = { GitHubCopilotStatisticsManager };
