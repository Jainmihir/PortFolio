

const ToolTip = ({ payload, active, label }) => {
    const getString = (l) => {
        const n = 31 - parseInt(l);
        if (n) { return `${n} day${n === 1 ? "" : "s"} ago` };
        return "Today";
    };

    if (active && payload && payload.length) {
        return (
            <div className='tooltip'>
                <p>{`${payload[0].value} contribution${payload[0].value === 1 ? "" : "s"
                    } done ${getString(label || "")}`}</p>
            </div>
        );
    }

    return null;
};

export default ToolTip;
