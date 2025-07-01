import styled from 'styled-components';

export const WhatsAppButtonContainer = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: #25D366;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  color: #fff;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;
