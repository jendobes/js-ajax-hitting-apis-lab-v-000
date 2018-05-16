function getRepositories() {
  const username = document.getElementById("username").value
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayRepositories)
  req.open("GET", `https://api.github.com/users/${username}/repos`)
  req.send()
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="'
   + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function getCommits(el) {
  const repoName = el.dataset.repo
  const username = document.getElementById("username").value
  const uri = `https://api.github.com/users/${username}/${repoName}/commits`
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayCommits)
  req.open("GET", uri)
  req.send()
}

function displayCommits () {
  const commits = JSON.parse(this.responseText)
  const commitList = `<ul>${commits.map(commit => '<li><h3>'+ commit.commit.author.name +' ('+ commit.author.login +')</h3>'
   + commit.commit.message' + </li>').join('')}</ul>`
  document.getElementById("details").innerHTML = commitList
}

function getBranches() {

}

function displayBranches() {

}
