const activeUsers = (users) =>
  users.filter((user) => user.active).map((person) => person.name);

const usersActive = (users) => {
  const activeUsers = [];
  for (const user of users) {
    if (user.active) {
      activeUsers.push(user.name);
    }
  }
  return activeUsers;
};

module.exports = { activeUsers, usersActive };
