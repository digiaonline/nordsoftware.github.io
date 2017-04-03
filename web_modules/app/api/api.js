export function fetchRepoData(page) {
  return fetch(
    "https://api.github.com/orgs/nordsoftware/repos" + "?page=" + page +
    "&access_token=" + "7ae90da9d34c9b25fc80b4be439df3cc4d9c27b9"
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}
