const faderContainers = document.querySelectorAll('.project-container')
const faders = document.querySelectorAll('.fade-in')

const appearOptions = {
  threshold: 1,
  rootMargin: '0px 0px -10px 0px'
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.children[0].children[1].classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  })
}, appearOptions)

faderContainers.forEach(container  => {
    appearOnScroll.observe(container)
})