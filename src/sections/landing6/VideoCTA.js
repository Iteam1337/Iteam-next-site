import React, { useContext } from "react";
import styled from "styled-components";

import { Box } from "../../components/Core";

import GlobalContext from "../../context/GlobalContext";

import { device } from "../../utils";
import imgVideo from "../../assets/image/jpeg/video-bg.jpg";

const IconButton = styled(Box)`
  cursor: pointer;
  font-size: 22px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: ${({ theme }) => theme.colors.secondary};
  width: 64px;
  height: 64px;
  @media ${device.sm} {
    width: 100px;
    height: 100px;
  }
  @media ${device.md} {
    width: 124px;
    height: 124px;
  }
`;

const VideoCTA = () => {
  const gContext = useContext(GlobalContext);

  const openVideoModal = (e) => {
    e.preventDefault();
    gContext.toggleVideoModal();
  };

  return (
    <>
      {/* <!-- VideoCTA Area --> */}
      <Box className="position-relative overflow-hidden">
        <img src={imgVideo} alt="" className="w-100 img-fluid" />
        <IconButton onClick={openVideoModal}>
          <i className="icon icon-triangle-right-17-2"></i>
        </IconButton>
      </Box>
    </>
  );
};

export default VideoCTA;
