import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

//createClient é uma instancia do sanity/client, está sendo responsável por interagir com o backend e sendo passada pro componente de Login
export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-02-26",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
})

// instanciando o construtor de imagem (associado ao sanity/image-url) baseado na config da variavel client
const builder = imageUrlBuilder(client)

// utilizando função "builder" do imageUrlBuilder para gerar uma URL
export const urlFor = (source) => builder.image(source)
