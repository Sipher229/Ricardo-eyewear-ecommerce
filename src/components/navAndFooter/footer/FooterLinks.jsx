/* eslint-disable react/prop-types */

function FooterLinks({title = "Some Title", linksList = []}) {
  return (
    <>
      <ul className="list-none ">
        <li className="text-2xl font-bold my-5">{title}</li>
        {
          linksList.map((link, index) => {
            return <li key={index}><a href="#" className="text-gray-700">{link}</a></li>
            
          })
        }
      </ul>
    </>
  )
}

export default FooterLinks