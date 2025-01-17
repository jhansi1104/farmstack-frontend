import { Box, Button, Divider, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getUserLocal, isLoggedInUserParticipant } from "../../Utils/Common";

const navActiveStyle = {
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "18px",
  color: "#00AB55",
  textDecoration: "none",
};

const navInActiveStyle = {
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "18px",
  color: "#212B36",
  textDecoration: "none",
};
const PopoverNavbar = ({
  history,
  loginType,
  isNavLinkActive,
  style,
  isNavLinkActiveForDot,
  isNavLinkActiveForCostewardDot,
  isNavLinkActiveForHome,
  imgUrl,
  handleSignOut,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box
      className="d-flex align-items-center"
      sx={{
        boxShadow: "0px 6px 16px rgba(145, 158, 171, 0.16)",
        height: "60px",
        padding: "10px 16px",
      }}
    >
      <Box aria-describedby={id} variant="contained" onClick={handleClick}>
        <img src={require("../../Assets/Img/menu.svg")} />
      </Box>
      <Box sx={{ marginLeft: "5px" }}>
        <img
          // src={require("../../Assets/Img/footer_logo.svg")}
          style={{ height: "auto", width: "75px", maxHeight: "30px" }}
          src={imgUrl}
          alt="HeaderLogo"
        />
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          ".MuiPopover-paper": {
            top: "0 !important",
            left: "0 !important",
          },
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "214px",
          }}
        >
          <Box
            className="text-right"
            sx={{ margin: "15px 15px 0px 0px" }}
            onClick={handleClose}
          >
            <img src={require("../../Assets/Img/clear_all.svg")} />
          </Box>
          <Box>
            <Box sx={{ padding: "20px", textAlign: "left" }}>
              <NavLink
                activeStyle={
                  isNavLinkActive("/home") ? navActiveStyle : navInActiveStyle
                }
                style={navInActiveStyle}
                to="/home"
                onClick={() => setAnchorEl(null)}
              >
                {isNavLinkActive("/home") ? (
                  <img
                    className={style.dotStyle}
                    src={require("../../Assets/Img/green_dot.svg")}
                    alt="dot"
                  />
                ) : (
                  <></>
                )}
                Home
              </NavLink>
            </Box>
            <Divider />
            {/* {loginType === "admin" ? (
            <NavLink
              activeStyle={navActiveStyle}
              style={navInActiveStyle}
              to="/datahub/dashboard"
              onClick={() => setAnchorEl(null)}
            >
              {isNavLinkActive("/datahub/dashboard") ? (
                <img
                  className={style.dotStyle}
                  src={require("../../Assets/Img/green_dot.svg")}
                  alt="dot"
                />
              ) : (
                <></>
              )}
              Dashboard
            </NavLink>
          ) : (
            <></>
          )} */}
            {(loginType === "admin" || loginType === "guest") &&
            !isLoggedInUserParticipant() ? (
              <>
                <Box sx={{ padding: "20px", textAlign: "left" }}>
                  <NavLink
                    activeStyle={navActiveStyle}
                    style={
                      isNavLinkActiveForCostewardDot("costeward")
                        ? navActiveStyle
                        : navInActiveStyle
                    }
                    to={
                      loginType === "admin"
                        ? "/datahub/participants"
                        : loginType === "guest"
                        ? "/home/participants"
                        : ""
                    }
                    onClick={() => setAnchorEl(null)}
                  >
                    {isNavLinkActiveForDot("participants") ||
                    isNavLinkActiveForCostewardDot("costeward") ? (
                      <img
                        className={style.dotStyle}
                        src={require("../../Assets/Img/green_dot.svg")}
                        alt="dot"
                      />
                    ) : (
                      <></>
                    )}
                    Participants
                  </NavLink>
                </Box>
                <Divider />
              </>
            ) : (
              <></>
            )}
            {loginType === "admin" ||
            loginType === "participant" ||
            loginType === "guest" ? (
              <>
                <Box sx={{ padding: "20px", textAlign: "left" }}>
                  <NavLink
                    activeStyle={navActiveStyle}
                    style={
                      isNavLinkActiveForHome("datasets")
                        ? navActiveStyle
                        : navInActiveStyle
                    }
                    to={
                      loginType === "admin"
                        ? "/datahub/new_datasets"
                        : loginType === "participant"
                        ? "/participant/new_datasets"
                        : loginType === "guest"
                        ? "/home/datasets"
                        : "/"
                    }
                    onClick={() => setAnchorEl(null)}
                  >
                    {isNavLinkActiveForDot("datasets") ? (
                      <img
                        className={style.dotStyle}
                        src={require("../../Assets/Img/green_dot.svg")}
                        alt="dot"
                      />
                    ) : (
                      <></>
                    )}
                    Datasets
                  </NavLink>
                </Box>
                <Divider />
              </>
            ) : (
              <></>
            )}
            {loginType === "admin" || loginType === "participant" ? (
              <>
                <Box sx={{ padding: "20px", textAlign: "left" }}>
                  <NavLink
                    activeStyle={navActiveStyle}
                    style={navInActiveStyle}
                    to={
                      loginType === "admin"
                        ? "/datahub/connectors"
                        : loginType === "participant"
                        ? "/participant/connectors"
                        : ""
                    }
                    onClick={() => setAnchorEl(null)}
                  >
                    {isNavLinkActiveForDot("connectors") ? (
                      <img
                        className={style.dotStyle}
                        src={require("../../Assets/Img/green_dot.svg")}
                        alt="dot"
                      />
                    ) : (
                      <></>
                    )}
                    Connectors
                  </NavLink>
                </Box>
                <Divider />
              </>
            ) : (
              <></>
            )}
            {/* {loginType === "admin" ? (
            <NavLink
              activeStyle={navActiveStyle}
              style={navInActiveStyle}
              to="/datahub/support"
              onClick={() => setAnchorEl(null)}
            >
              {isNavLinkActive("/datahub/support") ? (
                <img
                  className={style.dotStyle}
                  src={require("../../Assets/Img/green_dot.svg")}
                  alt="dot"
                />
              ) : (
                <></>
              )}
              Support
            </NavLink>
          ) : (
            <></>
          )} */}
            {loginType === "admin" || loginType === "participant" ? (
              <>
                <Box sx={{ padding: "20px", textAlign: "left" }}>
                  <NavLink
                    activeStyle={navActiveStyle}
                    style={navInActiveStyle}
                    to={
                      loginType === "admin"
                        ? "/datahub/settings/1"
                        : loginType === "participant"
                        ? "/participant/settings/1"
                        : ""
                    }
                    onClick={() => setAnchorEl(null)}
                  >
                    {isNavLinkActive(
                      loginType === "admin"
                        ? "/datahub/settings/1"
                        : loginType === "participant"
                        ? "/participant/settings/1"
                        : ""
                    ) ? (
                      <img
                        className={style.dotStyle}
                        src={require("../../Assets/Img/green_dot.svg")}
                        alt="dot"
                      />
                    ) : (
                      <></>
                    )}
                    Settings
                  </NavLink>
                </Box>
                <Divider />
              </>
            ) : (
              <></>
            )}
            {getUserLocal() && loginType !== "guest" ? (
              <></>
            ) : (
              <>
                <Box sx={{ padding: "20px", textAlign: "left" }}>
                  <NavLink
                    to={
                      loginType == "guest" && getUserLocal()
                        ? "/datahub/dashboard"
                        : "/login"
                    }
                    activeStyle={navActiveStyle}
                    style={navInActiveStyle}
                    onClick={() => setAnchorEl(null)}
                  >
                    {isNavLinkActive("/login") ? (
                      <img
                        className={style.dotStyle}
                        src={require("../../Assets/Img/green_dot.svg")}
                        alt="dot"
                      />
                    ) : (
                      <></>
                    )}
                    Login
                  </NavLink>
                </Box>
                <Divider />
              </>
            )}
            <Box sx={{ padding: "20px", textAlign: "left" }}>
              {getUserLocal() && loginType !== "guest" ? (
                <Button
                  sx={{
                    fontFamily: "Montserrat !important",
                    fontWeight: 700,
                    fontSize: "14px",
                    width: "94px",
                    height: "34px",
                    background: "#00AB55",
                    borderRadius: "8px",
                    textTransform: "none",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#00AB55",
                      color: "#fffff",
                    },
                  }}
                  onClick={(e) => handleSignOut(e)}
                >
                  Signout
                </Button>
              ) : (
                <Button
                  sx={{
                    fontFamily: "Montserrat !important",
                    fontWeight: 700,
                    fontSize: "14px",
                    width: "94px",
                    height: "34px",
                    background: "#00AB55",
                    borderRadius: "8px",
                    textTransform: "none",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#00AB55",
                      color: "#fffff",
                    },
                  }}
                  onClick={() => history.push("/home/register")}
                >
                  Register
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

export default PopoverNavbar;
