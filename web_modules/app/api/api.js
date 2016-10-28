export function fetchRepoData(page) {
  return fetch(
    "https://api.github.com/orgs/nordsoftware/repos" + "?page=" + page +
    "&access_token=" + "2199dcb3e3523d9c8a31c6c5567c88eb34840cc5"
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}
