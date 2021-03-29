module.exports = function createDreamTeam(members) {
  if (!members || !members.length) return false;
  else  return members.map(el => {
          if (typeof (el) == 'string') {
            return el.trim().slice(0, 1).toUpperCase();
          }
        }).sort().join('');
};
