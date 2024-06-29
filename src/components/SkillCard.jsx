import PropTypes from 'prop-types';

const SkillCard = ({image, skill, knowledge}) => {
    return (
        <div className='flex flex-col justify-center items-center space-y-4 p-4 bg-[#090c56] hover:scale-105 duration-200 transition-transform rounded-xl'>

            <img className='w-16 h-16 bg-[#090c56]' src={image} alt="" />
            <p className='uppercase'> {skill} </p>
            <p className=' bg-[#4b50b0] p-2 rounded-lg'> {knowledge} </p>
            
        </div>
    );
};

SkillCard.propTypes = {
    image: PropTypes.string,
    skill : PropTypes.string,
    knowledge : PropTypes.string

}

export default SkillCard;