import './Country.css'

const Country = ({ country }) => {
    const { name, flags } = country;

    return (
        <div className='country'>

            {/* 40-2 Display Countries In A Simple Way, Folder Structure */}
            <img src={flags.png } alt="" />
            <p>Name:{name?.common }</p>
        </div>
    );
};

export default Country;