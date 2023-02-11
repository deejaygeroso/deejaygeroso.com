interface ITestimonial {
  comments: string[]
  date: string
  name: string
  photo: {
    default: string
    webp: string
  }
  position: string
  subComments?: string[]
}

export default ITestimonial
