import React from 'react';
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const LinkToNewTab = (props) => {
    return (
        <a target="_blank" style={{
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer'
        }} {...props}>
            {props.children}{" "}
            {props.withIcon && (
                <FaExternalLinkSquareAlt style={{ height: "15px", width: "15px" }} />
            )}
        </a>
    )
}

export default LinkToNewTab;