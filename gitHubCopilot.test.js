const { GitHubCopilotStatisticsManager } = require("./gitHubCopilotStatistics");

describe("GitHubCopilotStatisticsManager", () => {
  let gitHubCopilot;
  beforeEach(() => {
    gitHubCopilot = new GitHubCopilotStatisticsManager();
  });

  test("adding users", () => {
    expect(gitHubCopilot.addUser("Aurelio")).toBe(1);
  });

  test("adding entries with wrong id", () => {
    gitHubCopilot.addUser("Aurelio");
    expect(gitHubCopilot.addEntry(2)).toBe(false);
  });

  test("adding entries", () => {
    gitHubCopilot.addUser("Aurelio");
    expect(gitHubCopilot.addEntry(1)).toBe(1);
  });

  test("list of active users", () => {
    const result = ["Costa 1", "Lilia 1"];

    gitHubCopilot.addUser("Costa");
    gitHubCopilot.addUser("Lilia");

    gitHubCopilot.addEntry(1);
    gitHubCopilot.addEntry(2);

    expect(gitHubCopilot.listOfActiveUsers()).toStrictEqual(result);
  });

  test("user with out entries", () => {
    gitHubCopilot.addUser("Costa");

    expect(gitHubCopilot.listOfUsageByEntry()).toStrictEqual([false]);
  });

  test("list of usage by entry", () => {
    const result = ["Costa used copilot", "Lilia used copilot"];

    gitHubCopilot.addUser("Costa");
    gitHubCopilot.addUser("Lilia");

    gitHubCopilot.addEntry(1);
    gitHubCopilot.addEntry(2);

    expect(gitHubCopilot.listOfUsageByEntry()).toStrictEqual(result);
  });
});
