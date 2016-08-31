export function fetchRepoData(page) {
  return fetch(
    "https://api.github.com/orgs/nordsoftware/repos" + "?page=" + page +
    "&access_token=" + "136068275cf127f2e8dee5ec7a7f18c7dda14912"
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}
