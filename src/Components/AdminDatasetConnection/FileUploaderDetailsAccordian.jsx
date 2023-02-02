import React from "react"
import { Avatar, Accordion, AccordionDetails, AccordionSummary, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Typography, Badge, LinearProgress } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Row, Col } from "react-bootstrap";

export default function FileUploaderDetailsAccordian({ data, title, deleteFunc, source, datasetname, loader, key, setKey, uploadFile, localUploaded }) {

    return ( 
           <Accordion defaultExpanded={true}>
               <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
             <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {title}

              <sup style={{ height: "20px", width: "20px", backgroundColor: "green", color: "white", borderRadius: "10px", padding: "0px 5px", fontSize: "small", margin: "0px 5px" }}>{uploadFile?.length}  </sup>
                </Typography>
              </AccordionSummary>
             { uploadFile ?
             (<AccordionDetails>
              <Typography style={{ maxHeight: "300px", overflowY: "scroll" , overflowX: "hidden"}}>
                  <ol className="uploaddatasetname">
                    {uploadFile.map((item) => {
                      return (<> 
                      <Row key={key}>
                      {/* <Col> */}
                        <li className="uploadList">
                          {item.name}
                        </li>
                        {/* </Col> */}
                        {/* <Col > */}
                        <IconButton edge="end" aria-label="delete"
                        // style={{alignItem : "right", "marginRight": "80px"}}
                        >
                          <DeleteOutlinedIcon
                          
                            onClick={() => (deleteFunc(datasetname, source, item.name))}
                            color='warning' />
                        </IconButton>
                        {/* </Col> */}
                        {/* </Row> */}
                        <LinearProgress variant="determine" value={item?.progress ? item?.progress : 0} key={key} color="success"
                        style={{width : "350px"}} />
                        </Row>
                        <p>{item?.progress ? item?.progress : 0}%</p>
                      </>
                      )
                    })}
                  </ol>
              </Typography>
              </AccordionDetails>) : ("")}
              </Accordion> 
    )
                  }