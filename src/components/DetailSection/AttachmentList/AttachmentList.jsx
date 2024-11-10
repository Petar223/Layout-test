import React from "react";
import styled from "styled-components";
import { AttachmentIcon } from "~components/Icons/Icons";

const AttachmentContainer = styled.div`
  padding: 0;
`;

const AttachmentItem = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 6px;
  display: flex;
  align-items: center;
`;

const AttachmentLink = styled.a`
  color: ${({ theme }) => theme.palette.link[400]};
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function AttachmentList({ items }) {
  return (
    <AttachmentContainer>
      {items?.map((item, index) => (
        <AttachmentItem key={index}>
          <IconWrapper>
            <AttachmentIcon width="16px" height="16px" />
          </IconWrapper>
          <AttachmentLink
            href={item.file_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.file_label}
          </AttachmentLink>
        </AttachmentItem>
      ))}
    </AttachmentContainer>
  );
}

export default AttachmentList;
