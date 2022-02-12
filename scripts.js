const LinksSocialMedia = {
  github: 'JulioMourajr',
  youtube: 'CortesdoCasimitoOFICIAL',
  facebook: 'tony.moura.9619',
  instagram: 'juliomourajr11',
  twitter: 'juliomourajr11'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      ;(userName.textContent = data.name),
        (textAbout.textContent = data.bio),
        (userLink.href = data.html_url),
        (userPhoto.src = data.avatar_url),
        (userLogin.textContent = data.login)
    })
}

getGithubProfileInfos()
