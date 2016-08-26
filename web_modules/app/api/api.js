export function fetchRepoData() {
  return fetch("https://api.github.com/orgs/nordsoftware/repos")
              .then((response) => response.json())
              .then((data) => {
                return data
              })
              .catch((error) => {
                return error
              })
}
