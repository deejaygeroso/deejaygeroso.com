const typeAnimation = (elementId: string, text: string, cb?: () => void): void => {
  const speedInMilliSeconds = 80
  let counter = 0

  const typeWriter = (): void => {
    if (counter < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(counter)
      counter++
      setTimeout(typeWriter, speedInMilliSeconds)
    } else {
      if (cb) {
        cb()
      }
    }
  }
  typeWriter()
}

const typeAnimationForSpanElement = (cb: () => void): void => {
  const titleName = `Deejay Geroso`
  const spanElementId = 'title1-author-name'

  const spanElement = document.createElement('SPAN')
  spanElement.setAttribute('id', spanElementId)

  document.getElementById('title1').appendChild(spanElement)

  typeAnimation(spanElementId, titleName, cb)
}

export const executeTitleTypeAnimation = (): void => {
  const title1Id = 'title1'
  const title2Id = 'title2'
  const title1Text = `Hello, I'm `
  const title2Text = `I'm a Software Engineer`

  setTimeout((): void => {
    typeAnimation(title1Id, title1Text, (): void => {
      typeAnimationForSpanElement((): void => {
        typeAnimation(title2Id, title2Text)
      })
    })
  }, 250)
}
