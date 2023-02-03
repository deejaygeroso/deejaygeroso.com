const typeAnimation = (elementId: string, text: string, cb?: () => void): void => {
  const speedInMilliSeconds = 80
  let counter = 0

  const typeWriter = (): void => {
    if (counter < text.length) {
      const elementToBeTyped = document.getElementById(elementId) as HTMLElement
      elementToBeTyped.innerHTML += text.charAt(counter)
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

const typeAnimationForAuthorName = (cb: () => void): void => {
  const author = `Deejay Geroso`
  const spanElementId = 'title1-author-name'

  const spanElement = document.createElement('SPAN')
  spanElement.setAttribute('id', spanElementId)

  const title1Element = document.getElementById('title1') as HTMLElement
  title1Element.appendChild(spanElement)

  typeAnimation(spanElementId, author, cb)
}

export const executeTitleTypeAnimation = (): void => {
  const title1Id = 'title1'
  const title2Id = 'title2'
  const title1Text = `Hello, I'm `
  const title2Text = `I'm a Software Engineer`

  setTimeout((): void => {
    typeAnimation(title1Id, title1Text, (): void => {
      typeAnimationForAuthorName((): void => {
        typeAnimation(title2Id, title2Text)
      })
    })
  }, 250)
}
