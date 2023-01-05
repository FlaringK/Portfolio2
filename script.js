/* Para Divs */
for (let i = 0; i < 10; i++) {
  let paraDiv = document.createElement("div")
  paraDiv.className = "parallaxDiv"
  paraDiv.id = `para${i}`
	paraDiv.style.setProperty("--startpos", `var(--startpos${i})`)
	paraDiv.style.setProperty("--bgimg", `var(--paraimg${i})`)
	paraDiv.style.zIndex = `-${i + 1}`

  document.body.appendChild(paraDiv)
}

/* CSS veritical parallax */
document.documentElement.style.setProperty('--scroll', window.scrollY);

document.addEventListener('scroll', function(e) {
    document.documentElement.style.setProperty('--scroll', window.scrollY);
});

/* Add line numbers */
document.querySelectorAll(".notes").forEach(e => {
  e.querySelectorAll("p").forEach((p, i) => {
    p.style.setProperty("--lineNumber", `"${i+1}"`)
  })
})

// Load Project json
fetch("./projects.json").then(response => response.json()).then(json => loadProjects(json))

const fileMenu = document.getElementById("projectMenu")
const preview = document.getElementById("projectPreview")

let loadProjects = projects => {
  console.log(projects)

  projects.forEach(data => {

    //Add icons to menu
    const icon = document.createElement("div")
    icon.className = "icon"
    icon.innerHTML = `<div class="iconimg"> <img src="${data.icon}"> </div> ${data.title}`

    icon.onclick = e => {
      preview.innerHTML = `<a href='${data.link}'><div class="previewimg"> <img src="${data.icon}"> </div> <h2>${data.title}</h2></a> ${data.description}`

      const icons = document.querySelectorAll("#projectMenu .icon")
      icons.forEach(i => { i.className = "icon" })
      e.target.className = "icon active"
    }

    fileMenu.append(icon)

  })
}

// Load Art json
fetch("./artworks.json").then(response => response.json()).then(json => loadArtworks(json))

const artList = document.getElementById("artList")
const viewerImg = document.querySelector("#artViewer img")

let loadArtworks = artworks => {

  artworks.forEach(work => {
    let img = document.createElement("img")
    img.src = work

    img.onclick = e => {
      viewerImg.src = e.target.src
    }

    artList.append(img)
  })

}