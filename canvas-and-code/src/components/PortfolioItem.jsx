const PortfolioItem = ({ title, image, link, type }) => {
    const isPhoto = type === 'photo';

    const handleClick = () => {
        // Simple placeholder lightbox effect (opens in a new tab)
        const imgWindow = window.open('', '_blank');
        imgWindow.document.write(`<img src="${image}" style="width:100%;height:auto;" alt="${title}" />`);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                {isPhoto ? (
                    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                        <img
                            src={image}
                            className="card-img-top"
                            alt={title}
                            style={{ objectFit: "cover", height: "200px" }}
                        />
                    </div>
                ) : (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={image}
                            className="card-img-top"
                            alt={title}
                            style={{ objectFit: "cover", height: "200px" }}
                        />
                    </a>
                )}
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;