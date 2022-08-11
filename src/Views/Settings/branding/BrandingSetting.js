import React, { useState, useEffect, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BrandingSetting.css";
import Button from "@mui/material/Button";
import { FileUploader } from "react-drag-drop-files";
import UploadOrgBanner from "../organisation/UploadOrgBanner";

import HTTPService from "../../../Services/HTTPService";
import UrlConstant from "../../../Constants/UrlConstants";

import { SketchPicker } from "react-color";
import HandleSessionTimeout, {
  setTokenLocal,
  getTokenLocal,
  setUserId,
  getUserLocal,
  handleAddressCharacters,
} from "../../../Utils/Common";
import { useHistory } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import { GetErrorHandlingRoute } from "../../../Utils/Common";

export default function BrandingSetting(props) {
  const fileTypes = ["JPEG", "PNG", "jpg"];
  // const [orgfilesize, setorgfilesize] = useState(false);
  const [color, setColor] = useState({ r: 200, g: 150, b: 35, a: 1 });
  const [brandfile, setbrandfile] = useState(null);
  const [hexColor, sethexColor] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const history = useHistory();

  // get brand details.
  const getBrandingDetails = async () => {
    setIsLoader(true);
    await HTTPService(
      "GET",
      UrlConstant.base_url + UrlConstant.branding,
      "",
      false,
      true
    )
      .then((response) => {
        setIsLoader(false);
        console.log(brandfile);
        console.log(response.data);
        console.log(response.data.css.btnBackground);
        if (response.data.css.btnBackground == null) {
          setColor("#c09507");
          sethexColor("#c09507");
        } else {
          setColor(response.data.css.btnBackground);
          sethexColor(response.data.css.btnBackground);
        }
        // setColor(response.data.css.btnBackground);
        // sethexColor(response.data.css.btnBackground);
        // console.log(response.data.banner);
        // setbrandfile(response.data.banner);
      })
      .catch((e) => {
        setIsLoader(false);
        console.log(e);
        console.log(e.response.status);
        history.push(GetErrorHandlingRoute(e));
      });
  };

  useEffect(() => {
    getBrandingDetails();
  }, []);

  const handleBrandSettingSubmit = (e) => {
    e.preventDefault();

    let url = UrlConstant.base_url + UrlConstant.branding;

    var bodyFormData = new FormData();
    bodyFormData.append("button_color", hexColor);
    bodyFormData.append("banner", brandfile);
    console.log("branding settings details", bodyFormData);
    setIsLoader(true);
    HTTPService("PUT", url, bodyFormData, true, true)
      .then((response) => {
        setIsLoader(false);
        console.log("response");
        console.log("org details", response.data);
        //   console.log(response.json());
        console.log(response.status);
        if (response.status === 201) {
          props.setisBrandUpdateSuccess();
          // setisPolicies(true);
          // setisOrg(false);
          // setEmail(false);
          // setError(false);
        } else {
          // setError(true);
        }
      })
      .catch((e) => {
        setIsLoader(false);
        console.log(e);
        //   setError(true);
      });
  };

  const handleBannerFileChange = (file) => {
    setbrandfile(file);
  };
  const handleColorChange = (color) => {
    console.log(color);
    setColor(color);
    console.log(color.hex);
    sethexColor(color.hex);
  };
  const brandsettingcancelbtn = (e) => {
    getBrandingDetails();
    setbrandfile(null);
    history.push("/datahub/settings/5");
    window.location.reload();
    // sethexColor(color);
  };

  return (
    <div className="brandsetting">
      {isLoader ? <Loader /> : ""}
      <form noValidate autoComplete="off" onSubmit={handleBrandSettingSubmit}>
        <Row>
          <span className="title">Customize Design</span>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="bannerdrag">
            <FileUploader
              handleChange={handleBannerFileChange}
              name="file"
              types={fileTypes}
              children={
                <UploadOrgBanner
                  uploaddes="Size should be '1400pixels X 220 pixels' 2MB only"
                  uploadtitle="Upload your banner image here"
                />
              }
              onDrop={(file) => console.log(file)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div>
              <p className="uploadorgimgname">
                {brandfile
                  ? brandfile.size
                    ? `File name: ${brandfile.name}`
                    : ""
                  : ""}
                {/* {file == null && profile_pic ? (
                <a
                  target="_blank"
                  href={profile_pic}
                  style={{ color: "#C09507", textDecoration: "none" }}>
                  Click here to view uploaded image!
                </a>
              ) : (
                ""
              )} */}
              </p>
              <p className="oversizemb-uploadimgOrglogo">
                {brandfile != null && brandfile.size > 2097152
                  ? "File uploaded is more than 2MB!"
                  : ""}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <span className="title">Button Color</span>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SketchPicker
              onChange={handleColorChange}
              color={color}
              width="400px"
              className="colorpickersettings"
              // height="100"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="brandsubmit">
              <Button
                variant="contained"
                className="accountnextbtn"
                type="submit">
                <span className="">Submit</span>
              </Button>
              {/* {!ispropfilefirstnameerror &&
              !accfilesize &&
              accfirstnamebtn &&
              file != null &&
              accnumberbtn ? (
                <Button
                  variant="contained"
                  className="accountnextbtn"
                  type="submit">
                  <span className="signupbtnname">Submit</span>
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  disabled
                  className="disableaccountnextbtn">
                  Submit
                </Button>
              )} */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="brandingcancel">
              <Button
                variant="outlined"
                className="accountsettingcancelbtn"
                type="button"
                onClick={brandsettingcancelbtn}>
                Cancel
              </Button>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
}
