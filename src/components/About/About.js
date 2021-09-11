import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import DocumentViewer from "../DocumentViewer";
import React from 'react';

const About = () => {
  const [openIframe, setOpenIframe] = React.useState(false)
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      <h5>
        Don&apos;t be shy, reach out to me through one of the channels below!
      </h5>
      <div className='about__contact center'>
       <button>
            <span type='button' className='btn btn--outline' onClick={()=>setOpenIframe(!openIframe)}>
              Resume
            </span>
          </button>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
     <DocumentViewer source="https://github.com/titusdishon/portfolio/blob/main/TITUS_DISHON_Resume.pdf" open={openIframe} handleClose={()=>setOpenIframe(!openIframe)}/>

    </div>
  )
}

export default About
