import Project from "../types/Project"
import miniMetroImg from '@/../public/Mini-Metro.webp'

const miniMetro: Project = {
  id: 1,
  title: "Mini-Metro",
  imageUrl: miniMetroImg,
  description: `
        A personal mini version of the TfGM metro boards. 
        It's a Python project that I built to run on a Raspberry Pi that calls the TfGM API and displays the next couple of trams for a given stop.
        `,
  imageAlt: "Picture of a Raspberry Pi 4 connected to a 16x2 LCD showing tram times"
}
const familyRecipe: Project = {
  id: 2,
  title: "Family Recipe",
  description: `
      A recipe sharing site for family and friends.
    `,
}
const anythingFromTheTrolley: Project = {
  id: 3,
  title: "Anything from the Trolley?",
  description: `
      A social tea and coffee making tool
    `,
}

export const projects =
  [
    miniMetro,
    familyRecipe,
    anythingFromTheTrolley
  ]