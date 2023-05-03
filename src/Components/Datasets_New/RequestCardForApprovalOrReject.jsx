import React, { useContext, useEffect, useState } from "react";
import global_style from "../../Assets/CSS/global.module.css";
import global_styles from "../../Assets/CSS/global.module.css";
import local_style from "./request_card.module.css";
import { Col, Row } from "react-bootstrap";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import HTTPService from "../../Services/HTTPService";
import UrlConstant from "../../Constants/UrlConstants";
import { FarmStackContext } from "../Contexts/FarmStackContext";
import { daysSincePublish } from "../NewOnboarding/utils";
import { Badge, Popconfirm } from "antd";
import NoDataAvailable from "../Dashboard/NoDataAvailable/NoDataAvailable";
const RequestCardForApprovalOrReject = (props) => {
  const { data, setApprovalStatus, approvalStatus } = props;
  const { callLoader, callToast } = useContext(FarmStackContext);
  const [requestReceivedColumns, setRequestReceivedColumns] = useState([]);
  const [noDataRequest, setNoDataRequest] = useState(true);

  const [toDate, setToDate] = useState({});
  const [requestToShow, setRequestsToShow] = useState([]);
  const SubmitHandler = (condition, usagePolicyId) => {
    callLoader(true);
    let url =
      UrlConstant.base_url + "datahub/usage_policies/" + usagePolicyId + "/";
    let method = "PATCH";
    let payload;
    if (condition == "approved") {
      let date = toDate ? new Date(toDate) : null;
      if (date) {
        let timezoneOffset = date.getTimezoneOffset() * 60 * 1000; // convert to milliseconds
        date = new Date(date.getTime() - timezoneOffset); // adjust for timezone offset
      }
      payload = {
        approval_status: condition,
        accessibility_time: toDate[usagePolicyId]
          ? new Date(toDate[usagePolicyId]).toISOString().substring(0, 10)
          : null,
      };
    } else {
      payload = { approval_status: condition };
    }
    HTTPService(method, url, payload, false, true, false, false)
      .then((response) => {
        callLoader(false);
        // console.log(response);
        callToast("Request successfull", "success", true);
        setApprovalStatus(!approvalStatus);
        // setToDate([]);
      })
      .catch((error) => {
        callLoader(false);
        callToast("Request unsuccessfull", "error", true);
        // console.log(error);
      });
  };
  const [filter, setFilter] = useState("all");
  console.log("I am inside request card in view");
  const [filterOptions, setFilterOptions] = useState([
    { label: "All", value: "all" },
    { label: "Approved", value: "approved" },
    { label: "Pending", value: "requested" },
    { label: "Rejected", value: "rejected" },
  ]);
  const [open, setOpen] = useState(false);
  const [confirmIndex, setConfirmIndex] = useState(-1);

  const showPopconfirm = (index) => {
    setOpen(true);
    setConfirmIndex(index);
  };

  const handleOk = (condition, usagePolicyId) => {
    // setConfirmLoading(true);

    SubmitHandler(condition, usagePolicyId);
  };

  const handleCancel = () => {
    setConfirmIndex(-1);
    setOpen(false);
  };
  const handleFilterChange = (event, filterSelected) => {
    setFilter(filterSelected);
    console.log(data, "data");
    if (filterSelected == "all" || !filterSelected) {
      console.log(filterSelected, data);
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i]?.accessibility == "private") {
          arr = [...arr, data[i]];
        }

        if (data[i]?.usage_policy?.length > 0) {
          setNoDataRequest(false);
        }
      }
      // console.log(arr);

      setRequestsToShow([...arr]);
      return;
    }
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].accessibility == "private") {
        let obj = { ...data[i] };
        let eachArr = obj["usage_policy"].filter((eachUsagePolicy, index) => {
          console.log(eachUsagePolicy.approval_status, filterSelected);
          return eachUsagePolicy.approval_status == filterSelected;
        });
        obj["usage_policy"] = [...eachArr];
        if (eachArr?.length > 0) {
          setNoDataRequest(false);
        }
        arr.push(obj);
      }
    }
    setRequestsToShow([...arr]);
  };
  const handleToDate = (value, policyId) => {
    let allDates = { ...toDate, [policyId]: value };
    setToDate({ ...allDates });
    console.log(allDates);
  };

  useEffect(() => {
    let columnsForReceived = [
      "Dataset details",
      "Organization details",
      "Status",
      // "Accessibility time",
      "Actions",
    ];
    setRequestReceivedColumns(columnsForReceived);
  }, []);
  useEffect(() => {
    let show = true;
    console.log("use Effect calling");
    if (filter == "all" || !filter) {
      console.log(filter, data);
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i]?.accessibility == "private") {
          arr = [...arr, data[i]];
          if (data[i]?.usage_policy?.length > 0) {
            show = false;
          }
        }
      }
      // console.log(arr);
      setNoDataRequest(show);
      setRequestsToShow([...arr]);
      return;
    }
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].accessibility == "private") {
        let obj = { ...data[i] };
        let eachArr = obj["usage_policy"].filter((eachUsagePolicy, index) => {
          console.log(eachUsagePolicy.approval_status, filter);
          return eachUsagePolicy.approval_status == filter;
        });
        if (eachArr?.length > 0) {
          show = false;
        }
        obj["usage_policy"] = [...eachArr];
        arr.push(obj);
      }
    }
    setNoDataRequest(show);
    setRequestsToShow([...arr]);
  }, [data]);
  let counter = 0;
  return (
    <>
      {data?.length > 0 && (
        <Row className="mt-20">
          <Col lg={6} md={12} sm={12}>
            <div
              className={
                global_style.bold600 +
                " " +
                global_style.size32 +
                " " +
                local_style.text_left
              }
            >
              List of requests
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} style={{ textAlign: "right" }}>
            <ToggleButtonGroup
              value={filter}
              exclusive
              onChange={handleFilterChange}
              aria-label="text alignment"
              sx={{
                textTransform: "capitalize",
                "& .Mui-selected": {
                  backgroundColor: "#00ab55 !important",
                  color: "white !important",
                  // textTransform: "none !important",
                },
              }}
            >
              {filterOptions.map((eachFilter, index) => {
                return (
                  <ToggleButton
                    value={eachFilter.value}
                    aria-label="left aligned"
                  >
                    {eachFilter.label}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          </Col>
        </Row>
      )}

      <Table
        sx={{
          "& .MuiTableCell-root": {
            // borderLeft: "1px solid rgba(224, 224, 224, 1)",
            fontFamily: "Montserrat",
          },
        }}
      >
        <TableHead
          sx={{
            background: "#F8F8F8 !important",
            fontFamily: "Montserrat",
          }}
        >
          <TableRow
            sx={{
              "& .MuiTableCell-root": {
                fontFamily: "Montserrat",
              },
            }}
          >
            {console.log(requestReceivedColumns, "eachHead")}
            {requestReceivedColumns.map((eachHead, index) => {
              return (
                <TableCell
                  sx={{
                    "& .MuiTableCell-root": {
                      fontFamily: "Montserrat",
                    },
                    textAlign: "left",
                    alignItems: "left",
                  }}
                  className={local_style.file_table_column}
                >
                  {eachHead}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        {requestToShow.length > 0 && (
          <TableBody>
            {requestToShow?.map((eachDatasetFile, index) => {
              if (eachDatasetFile?.accessibility == "private")
                return eachDatasetFile?.usage_policy?.length > 0
                  ? eachDatasetFile?.usage_policy.map(
                      (eachUsagePolicy, usagePolicyIndex) => {
                        counter++;
                        return (
                          <TableRow>
                            {/* <TableCell> */}
                            <TableCell component="th" scope="row">
                              <div style={{ display: "flex", gap: "20px" }}>
                                <span>
                                  <div
                                    className={
                                      global_styles.bold600 +
                                      " " +
                                      global_styles.size14
                                    }
                                    style={{
                                      textOverflow: "ellipsis",
                                      display: "flex",
                                      alignItems: "center",
                                      columnGap: "10px",
                                    }}
                                  >
                                    <img
                                      src={require("../../Assets/Img/file.svg")}
                                      alt=""
                                      style={{ display: "inline-block" }}
                                    />
                                    <div
                                      style={{
                                        // width: "100px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                      }}
                                      className={local_style.link_name}
                                    >
                                      {eachDatasetFile.file?.split("/").at(-1)}
                                    </div>
                                  </div>
                                  <div>Dataset file name</div>
                                </span>
                                <span>
                                  {/* <div
                                  className={
                                    global_styles.bold600 +
                                    " " +
                                    global_styles.size16
                                  }
                                >
                                  {" "}
                                  {row.file_name}
                                </div>
                                <div>File name</div> */}
                                </span>
                              </div>
                              {/* </TableCell> */}
                              {/* <div
                              className={
                                global_style.bold400 +
                                " " +
                                global_style.size16 +
                                " " +
                                local_style.text_left
                              }
                            >
                              Dataset file name
                            </div>
                            <div
                              className={
                                global_style.bold600 +
                                " " +
                                global_style.size16 +
                                " " +
                                local_style.text_left
                              }
                            >
                              <img
                                src={require("../../Assets/Img/file.svg")}
                                alt=""
                              />{" "}
                              <span className={local_style.link_name}>
                                {eachDatasetFile.file?.split("/").at(-1)}
                              </span>
                            </div> */}
                            </TableCell>

                            <TableCell>
                              <div
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: "0.5fr 1fr",
                                  gridTemplateRows: "1fr 1fr",
                                  gridGap: "10px",
                                }}
                              >
                                <div className={local_style.each_value_in_div}>
                                  <div
                                    className={
                                      global_styles.bold600 +
                                      " " +
                                      global_styles.size14
                                    }
                                  >
                                    {/* <Avatar
                                  alt="Remy Sharp"
                                  src={
                                    UrlConstant.base_url_without_slash +
                                    eachUsagePolicy.organization.logo
                                  }
                                /> */}
                                    {eachUsagePolicy.organization.name}
                                  </div>
                                  <div>Request by</div>
                                </div>
                                <div className={local_style.each_value_in_div}>
                                  <div
                                    className={
                                      global_styles.bold600 +
                                      " " +
                                      global_styles.size14
                                    }
                                  >
                                    {" "}
                                    {eachUsagePolicy.organization.org_email}
                                  </div>
                                  <div>Organization email</div>
                                </div>
                                <div className={local_style.each_value_in_div}>
                                  <div
                                    className={
                                      global_styles.bold600 +
                                      " " +
                                      global_styles.size14
                                    }
                                  >
                                    {" "}
                                    {eachUsagePolicy.organization.phone_number}
                                  </div>
                                  <div>Organization Contact no.</div>
                                </div>
                                {/* <span>
                                <div
                                  className={
                                    global_styles.bold600 +
                                    " " +
                                    global_styles.size16
                                  }
                                >
                                  {" "}
                                  {eachUsagePolicy.user.email}
                                </div>
                                <div>Organization email</div>
                              </span> */}
                              </div>

                              {/* old */}
                              {/* <div
                              className={
                                global_style.bold400 +
                                " " +
                                global_style.size16 +
                                " " +
                                local_style.text_left
                              }
                            >
                              Request by
                            </div>
                            <div
                              className={
                                global_style.bold600 +
                                " " +
                                global_style.size16 +
                                " " +
                                local_style.text_left
                              }
                            >
                              {eachUsagePolicy.user.first_name}
                            </div>
                            <div
                              className={
                                global_style.bold600 +
                                " " +
                                global_style.size16 +
                                " " +
                                local_style.text_left
                              }
                            >
                              {eachUsagePolicy.user.email}
                            </div> */}
                            </TableCell>
                            <TableCell style={{ textAlign: "left" }}>
                              <div
                                className={
                                  global_style.bold600 +
                                  " " +
                                  global_style.size14 +
                                  " " +
                                  local_style.text_left
                                }
                              >
                                {eachUsagePolicy.approval_status ==
                                "approved" ? (
                                  <Badge
                                    style={{
                                      backgroundColor:
                                        eachUsagePolicy.approval_status ==
                                        "rejected"
                                          ? "#ff5630"
                                          : eachUsagePolicy.approval_status ==
                                            "approved"
                                          ? "#00ab55"
                                          : "#faad14",
                                      width: "80px",
                                    }}
                                    count={"Apporved"}
                                  ></Badge>
                                ) : eachUsagePolicy.approval_status ==
                                  "rejected" ? (
                                  <Badge
                                    style={{
                                      backgroundColor:
                                        eachUsagePolicy.approval_status ==
                                        "rejected"
                                          ? "#ff5630"
                                          : eachUsagePolicy.approval_status ==
                                            "approved"
                                          ? "#00ab55"
                                          : "#faad14",
                                      width: "80px",
                                    }}
                                    count={"Rejected"}
                                  ></Badge>
                                ) : (
                                  "Period"
                                )}
                              </div>
                              {eachUsagePolicy.approval_status !== "approved" &&
                              eachUsagePolicy.approval_status !== "rejected" ? (
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                >
                                  <DatePicker
                                    disabled={
                                      eachUsagePolicy.approval_status !==
                                      "approved"
                                        ? false
                                        : true
                                    }
                                    disablePast
                                    inputFormat="dd/MM/yyyy"
                                    placeholder="Till"
                                    label="Till"
                                    value={
                                      toDate[eachUsagePolicy?.id ?? ""] ?? null
                                    }
                                    onChange={(value) =>
                                      handleToDate(value, eachUsagePolicy.id)
                                    }
                                    PaperProps={{
                                      sx: {
                                        borderRadius: "16px !important",
                                        "& .MuiPickersDay-root": {
                                          "&.Mui-selected": {
                                            backgroundColor:
                                              "#007B55 !important",
                                          },
                                        },
                                      },
                                    }}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        id="filled-basic"
                                        variant="outlined"
                                        sx={{
                                          width: "200px",
                                          svg: { color: "#00AB55" },
                                          "& .MuiInputBase-input": {
                                            height: "20px",
                                          },
                                          "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                              borderColor: "#919EAB !important",
                                            },
                                            "&:hover fieldset": {
                                              borderColor: "#919EAB",
                                            },
                                            "&.Mui-focused fieldset": {
                                              borderColor: "#919EAB",
                                            },
                                          },
                                        }}
                                        required={
                                          eachUsagePolicy.approval_status ==
                                          "approved"
                                            ? false
                                            : true
                                        }
                                        helperText={
                                          <Typography
                                            sx={{
                                              fontFamily:
                                                "Montserrat !important",
                                              fontWeight: "400",
                                              fontSize: "12px",
                                              lineHeight: "18px",
                                              color: "#FF0000",
                                              textAlign: "left",
                                            }}
                                          >
                                            {/* {!validator &&
                                      (!fromDate !== null ||
                                        !fromDate !== undefined ||
                                        !fromDate !== "")
                                        ? ""
                                        : "Please enter the start date of the data capture interval."} */}
                                          </Typography>
                                        }
                                      />
                                    )}
                                    // error={props.dataCaptureStartErrorMessage ? true : false}
                                  />
                                </LocalizationProvider>
                              ) : eachUsagePolicy.approval_status ==
                                "approved" ? (
                                `Till : ${
                                  eachUsagePolicy.accessibility_time ?? "NA"
                                }`
                              ) : (
                                ""
                              )}
                            </TableCell>
                            <TableCell
                              className={
                                local_style.table_cell_for_approve_button
                              }
                            >
                              {eachUsagePolicy.approval_status !== "approved" &&
                                eachUsagePolicy.approval_status !==
                                  "rejected" && (
                                  <Button
                                    style={{
                                      border: "1px solid #00ab55",
                                      color: "#00ab55",
                                      // color: "white",
                                      textTransform: "none",
                                      height: "30px",
                                      fontFamily: "Montserrat",
                                      width: "100px",
                                    }}
                                    onClick={() =>
                                      SubmitHandler(
                                        "approved",
                                        eachUsagePolicy.id
                                      )
                                    }
                                  >
                                    Approve
                                  </Button>
                                )}
                              {eachUsagePolicy.approval_status !==
                                "rejected" && (
                                <Button
                                  style={{
                                    border: "1px solid #ff5630",
                                    color: "#ff5630",
                                    textTransform: "none",
                                    height: "30px",
                                    width: "100px",
                                    fontFamily: "Montserrat",
                                  }}
                                  onClick={() =>
                                    SubmitHandler(
                                      "rejected",
                                      eachUsagePolicy.id
                                    )
                                  }
                                >
                                  {eachUsagePolicy.approval_status == "approved"
                                    ? "Recall"
                                    : "Reject"}
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )
                  : "";
            })}
          </TableBody>
        )}

        {/* {counter > 0 ? (
          {console.log(counter)}
          <NoDataAvailable message={"No request available"} />
        ) : (
          ""
        )} */}
        {/* {console.log(requestToShow, "requestToShow")} */}
      </Table>
    </>
  );
};

export default RequestCardForApprovalOrReject;
