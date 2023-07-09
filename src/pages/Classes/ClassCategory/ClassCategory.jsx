import { Slide } from "react-awesome-reveal";
import SectionTitle from "../../../components/SectionTitle";
import ClassCard from "../../Shared/ClassCard/ClassCard";


const ClassCategory = ({items, title}) => {
    return (
        <div className="pt-8">
            <Slide><SectionTitle heading={title}></SectionTitle></Slide>
            <div className="grid md:grid-cols-2 gap-8 my-16 mx-20">
                {
                    items.map(item=><ClassCard key={item._id}
                    item={item}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default ClassCategory;