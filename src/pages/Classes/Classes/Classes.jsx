import useClasses from "../../../hooks/useClasses";
import ClassCategory from "../ClassCategory/ClassCategory";


const Classes = () => {
    const [classes] = useClasses()

    const football = classes.filter(item=> item.className === 'Football');
    const cricket = classes.filter(item=> item.className === 'Cricket');
    const swimming = classes.filter(item=> item.className === 'Swimming');
    const badminton = classes.filter(item=> item.className === 'Badminton');
    const basketball = classes.filter(item=> item.className === 'Basketball');
    const volleyball = classes.filter(item=> item.className === 'Volleyball');
    
    return (
        <div>
            <ClassCategory items={football} title='Football'></ClassCategory>
            <ClassCategory items={cricket} title='Cricket'></ClassCategory>
            <ClassCategory items={swimming} title='Swimming'></ClassCategory>
            <ClassCategory items={badminton} title='Badminton'></ClassCategory>
            <ClassCategory items={basketball} title='Basketball'></ClassCategory>
            <ClassCategory items={volleyball} title='Volleyball'></ClassCategory>
        </div>
    );
};

export default Classes;