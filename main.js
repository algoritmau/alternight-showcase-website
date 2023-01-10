const productHuntBadge = document.querySelector('.product-hunt-badge')

const getScrollHeight = () =>
  Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  )

window.addEventListener('scroll', () => {
  let currentScrollHeight = getScrollHeight()

  if (
    window.pageYOffset >= currentScrollHeight * 0.7 &&
    !productHuntBadge.hidden
  ) {
    productHuntBadge.hidden = true
  }
})
