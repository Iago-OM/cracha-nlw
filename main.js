const linksSocial = {
  github: 'iago-OM',
  facebook: 'iago.oliveira.90',
  twitter: 'iagoRX',
  youtube: 'channel/UCSfwM5u0Kce6Cce8_S72olg',
  instagram: 'iagoliveira95'
}

function changeLinksSocial() {

  for (let li of ul_links.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://${social}.com/${linksSocial[social]}`

  }

}
changeLinksSocial();


function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocial.github}`
  //fetch- pegar a info da api e tras de volta
  fetch(url)
    .then(Response => Response.json())
    .then(data => {

      Name.textContent = data.name;
      description.textContent = data.bio;
      linkGitHub.href = data.html_url;
      userImg.src = data.avatar_url;
      userLogin.textContent = data.login;
    })
}
getGitHubProfileInfos();