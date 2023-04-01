import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCard = styled(Link)`
    width: 359px;
    height: 86px;
    padding: 9px 15px;
    text-decoration: none;
    background: #FFFFFF;
    border-radius: 4px;
    transition: box-shadow 0.3s;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    &:hover {
        box-shadow: 1px 5px 29px -13px rgba(0, 0, 0, 0.25);
    }
`;

export const Content = styled.div`
    h5 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.1875rem;
        color: var(--blue-400);
    }
    p {
        font-weight: 400;
        font-size: 1rem;
        color: var(--grey-400);
        margin-top: 16px;
    }
`;