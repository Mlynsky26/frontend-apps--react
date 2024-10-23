function Footer() {
    return ( 
        <div className="bg-dark text-white text-center p-3">
            <img src={window.location.origin + '/logo.png'} alt="WSEI" width={100}/>
            <div>mateusz.moniowski@microsoft.wsei.edu.pl</div>
        </div>
    );
}

export default Footer;