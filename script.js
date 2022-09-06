const form = document.getElementById("form")

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(ev) {
  ev.preventDefault()

  window.alert("Form submitted ✅")
}