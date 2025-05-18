const PortfolioItem = ({ title, image, link }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                    src={image}
                    className="card-img-top"
                    alt={title}
                    style={{ objectFit: "cover", height: "200px" }}
                />
                </a>
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    );
};
export default PortfolioItem;
