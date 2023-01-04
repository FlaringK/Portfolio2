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
document.querySelectorAll(".window").forEach(e => {
  e.querySelectorAll("p").forEach((p, i) => {
    p.style.setProperty("--lineNumber", `"${i+1}"`)
  })
})

// Load json
fetch("./projects.json")
  .then(response => response.json())
  .then(json => loadProjects(json))

const fileMenu = document.getElementById("projectMenu")
const preview = document.getElementById("projectPreview")

let loadProjects = projects => {
  console.log(projects)

  projects.forEach(data => {

    //Add icons to menu
    const icon = document.createElement("div")
    icon.className = "icon"
    icon.innerHTML = `<div class="iconimg"> <img src="${data.icon}"> </div> ${data.title}`

    icon.onclick = () => {
      preview.innerHTML = `<div class="previewimg"> <a href='${data.link}'><img src="${data.icon}"> </div> <h2>${data.title}</h2></a> ${data.description}`
    }

    fileMenu.append(icon)

  })
}