import styled from 'styled-components';

/* eslint-disable react/prop-types */
export const ButtonComponent = ({
    styleBootstrap, text, linkImg
}) => {
    return (
        <StyledButton className={`btn btn-${styleBootstrap}`}>
            <StyledImage src={linkImg} alt="" />
            <p className="fw-bold font-shadow-sm text-light">{text}</p>
        </StyledButton>
    )
}

const StyledButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover img {
        transform: scale(1.1);
    }
`;

const StyledImage = styled.img`
    width: 100px;
    height: 100px;
    transition: transform 0.3s ease;
`;
