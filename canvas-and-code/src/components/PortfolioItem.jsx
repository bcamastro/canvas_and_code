const PortfolioItem = ({ title, image, link, type }) => {
    const isPhoto = type === 'photo';

    const handleClick = () => {
        if (isPhoto) {
            const imgWindow = window.open('', '_blank');
            imgWindow.document.write(`<img src="${image}" style="width:100%;height:auto;" alt="${title}" />`);
        }
    };

    return (
        <div className="col-md-4 mb-4">
            {isPhoto ? (
                // For photo portfolio
                <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                    <img
                        src={image}
                        alt={title}
                        className="img-fluid"
                        style={{
                            objectFit: "contain",
                            width: "100%",
                            maxHeight: "400px",
                            borderRadius: "8px"
                        }}
                    />
                </div>
            ) : (
                // For templates — card layout with text and link
                <div className="card h-100 shadow-sm">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={image}
                            className="card-img-top"
                            alt={title}
                            style={{
                                objectFit: "cover",
                                height: "200px"
                            }}
                        />
                    </a>
                    <div className="card-body text-center">
                        <h5 className="card-title">{title}</h5>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioItem;
