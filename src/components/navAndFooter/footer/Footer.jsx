import FooterLinks from "./FooterLinks"
import { footerContent } from "./links"


function Footer() {
  return (
    <footer className="flex justify-center gap-32 bg-gray-200 h-[20rem] p-11">
      <div id = "logo" className="w-1/5 flex flex-col items-center gap-2 mt-7">
        <h1 className="text-3xl font-serif font-black">Ricardo</h1>
        <p className="roboto-light text-gray-500">Eye Wear</p>
      </div>
      {
        footerContent.map((content, index) => {
          return <FooterLinks key={index} title={content.title} linksList={content.links} />
        })
      }
    </footer>
  )
}

export default Footer