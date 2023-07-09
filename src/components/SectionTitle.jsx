

const SectionTitle = ({heading}) => {
    return (
        <div className="text-center mt-16 text-white">
           <div className="divider md:w-1/4 mx-auto"></div>
           <h2 className="md:text-3xl uppercase"> ---------- {heading} ---------- </h2>
           <div className="divider md:w-1/4 mx-auto"></div>
        </div>
    );
};

export default SectionTitle;