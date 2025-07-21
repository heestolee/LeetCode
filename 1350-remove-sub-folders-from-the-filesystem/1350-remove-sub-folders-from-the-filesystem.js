/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = (folder) => {
  folder.sort();

  const filteredFolders = [];
  let lastKeptPath = null;

  for (const currentPath of folder) {
    if (lastKeptPath === null || !currentPath.startsWith(lastKeptPath + "/")) {
      filteredFolders.push(currentPath);
      lastKeptPath = currentPath;
    }
  }

  return filteredFolders;
};
