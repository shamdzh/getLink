import React, { useEffect, useState } from 'react'
import LinkForm from '../components/LinkForm'
import ShortLink from '../components/ShortLink'


function Main() {

  const [link, setLink] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    console.log(link)
  })

  return (
    <section className='main'>
      <div className="container">
        <div className="main__inner">
          <LinkForm setLink = {setLink} setVisible={setVisible} />
          {visible ? <ShortLink link = {link}/> : null}
        </div>
      </div>
    </section>
  )
}

export default Main