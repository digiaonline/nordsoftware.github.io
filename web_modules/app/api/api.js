export function fetchRepoData(page) {
  return fetch(
    "https://api.github.com/orgs/nordsoftware/repos" + "?page=" + page +
    "&access_token="
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}
