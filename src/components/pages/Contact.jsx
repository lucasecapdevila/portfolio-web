import { Button, Label, Textarea, TextInput } from "flowbite-react"


const Contact = () => {
  

  return (
    <main className="min-h-[90vh] max-w-[100vw] md:h-screen px-4 lg:ps-32 py-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="titulos text-textDarkColor text-4xl md:text-5xl font-bold uppercase">Contactame</h1>
        <h2 className="titulos text-textBlack text-2xl self-start">¿Quieres saber más de mí?</h2>
        <p className="textos text-textBlack text-md">Estoy disponible a nuevas oportunidades y colaboraciones! Si estás buscando alguien que pueda aportar nuevas ideas a tus proyectos y obtener resultados significativos, no dudes en ponerte en contacto conmigo.</p>
      </div>
      
      <form className="flex max-w-md flex-col gap-4 mt-10 border-2 rounded-md border-gray-300 p-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>
      <Button className="bg-textDarkColor" type="submit">Submit</Button>
    </form>
    </main>
  )
}

export default Contact