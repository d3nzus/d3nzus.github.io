function Socials(){
    return(
        <div className="flex flex-row align-middle justify-center">
            <a href="https://www.instagram.com/d3nzus" target="_blank" rel="noopener noreferrer">
                <img src="/icons/ig.png" alt="Instagram" className="h-10 w-10 mx-3 my-5" />
            </a>
            <a href="mailto:d3nzus@email.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/em.png" alt="Email" className="h-10 w-10 mx-3 my-5" />
            </a>
            <a href="https://github.com/d3nzus" target="_blank" rel="noopener noreferrer">
                <img src="/icons/gh.png" alt="GitHub" className="h-10 w-10 mx-3 my-5" />
            </a>
            <a href="https://www.linkedin.com/in/renz-banas" target="_blank" rel="noopener noreferrer">
                <img src="/icons/li.png" alt="LinkedIn" className="h-10 w-10 mx-3 my-5" />
            </a>
        </div>
    );
}

export default Socials;