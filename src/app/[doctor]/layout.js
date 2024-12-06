
import  Footer  from '../_components/Footer'

export default function layout({children}) {
  return (
    <div>
      {children}
      <Footer/>
    </div>
  )
}
