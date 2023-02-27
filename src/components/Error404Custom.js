import ErrorSvg from '../svg/404.svg'

const Error404Custom = (props) => {

  if (props.mode === 'light') {
    document.body.style.backgroundColor = 'var(--bs-light)';
    document.body.style.color = 'var(--bs-dark)';
  } else {
    document.body.style.backgroundColor = 'var(--bs-dark)';
    document.body.style.color = 'var(--bs-light)';
  }

  return (
    <>
      <div className='d-flex justify-content-center align-item-center' style={{ position: 'relative', height: '100vh', overflow: 'hidden', zIndex: '-9' }}>
        <img src={ErrorSvg} alt={'Error 404'} style={{ position: 'relative', height: '100%' }} />
      </div>
    </>
  )
}

export default Error404Custom
