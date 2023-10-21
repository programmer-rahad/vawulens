const PageWelcome = ({title,image,children}) => {
  return (
    <header className='page-welcome'>
        <div className='page-welcome-container'>
            <div className='page-welcome-image'>
                <img src={image} alt="Page Welcome Image" />
            </div>
            <div className="welcome-content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default PageWelcome