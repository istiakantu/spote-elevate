

const InstructorCard = ({ instructor }) => {
    const { image, name, email } = instructor;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="h-[300px]"><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2>
                    {name}
                </h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default InstructorCard;