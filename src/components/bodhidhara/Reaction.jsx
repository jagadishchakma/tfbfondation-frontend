import '../../assets/css/bodhidhara/reaction.css';


const reactions = [
    {
        id: 1,
        name: "Love",
        color: "#0011a8",
        bgColor: "#0011a8",
    },
    {
        id: 2,
        name: "Diligence",
        color: "#ffe100",
        bgColor: "#ffe100",
    },
    {
        id: 3,
        name: "Power",
        color: "#ed131e",
        bgColor: "#ed131e",
    },
    {
        id: 4,
        name: "Generous",
        color: "#ffffff",
        bgColor: "#ffffff",
    }, 
    {
        id: 5,
        name: "Forgive",
        color: "#ff9900",
        bgColor: "#ff9900",
    }
]
const Reaction = () => {
    const fiveReaction = () => {
        return (
            <div className="d-flex align-items center gap-2">
                <div className="react-maitri bodhi-react">

                </div>
                <div className="react-bairagya bodhi-react">

                </div>
                <div className="react-virya bodhi-react">

                </div>
                <div className="react-dana bodhi-react">

                </div>
                <div className="react-kshanti bodhi-react">

                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="d-flex align-items-center flex-column justify-content-center">
                <h6 className='text-center'>23k</h6>
                <div className="d-flex align-items-center justify-content-between gap-2 shadow-sm p-2 rounded">
                    <div className="react-maitri bodhi-react"></div>
                    <span>Love</span>
                </div>
            </div>
        </div>
    );
};

export default Reaction;