import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Tooltip, Link, Button, Card, CardContent, CardHeader, Typography, CardActions} from "@material-ui/core";
import pdf from "./Rayson_CVE-2019-0708-REDACTED.pdf";
import "./Milkomeda.css";

const Milkomeda = () => {
  const CustomTooltip = withStyles((theme) => ({
    tooltip: {
      fontSize: "1em",
    },
  }))(Tooltip);

  return (
    <Card>
      <CardHeader title="Project Milkomeda" titleTypographyProps={{color: "primary", variant: "h5"}}/>
      <Typography color="textSecondary" variant="subtitle1">A commercial research project commissioned by the{" "}
        <Link target="_blank" rel="noopener noreferrer" href="https://ncl.sg/" >National Cybersecurity R&D Lab</Link>
      </Typography>
      <CardContent>
        <div className="Milkomeda-Media">
          <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-0708" target="_blank" rel="noopener noreferrer">
            <div className="Milkomeda-Media-Overlay" />
          </a>
        </div>
        <div className="Milkomeda-Text">
          <Typography variant="body1" color="textPrimary">
           Worked on developing and documenting the exploit for CVE-2019-0708 (aka{" "}
            <Link href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-0708" target="_blank" rel="noopener noreferrer">BlueKeep</Link>),
           the remote code execution vulnerability that exists in Remote Desktop Services.
           This occurs when an unauthenticated attacker connects to the target system using RDP and sends specially crafted requests.
           An attacker who successfully exploited this vulnerability could execute arbitrary code on the target system with admin rights.
          </Typography>
        </div>
        <CardActions className="Milkomeda-ActionArea">
          <a style={{textDecoration: "none"}} href={pdf} download="Rayson_CVE-2019-0708-REDACTED.pdf">
            <Button variant="outlined" className="Milkomeda-Button" color="secondary">Submitted Report</Button>
          </a>
          <span className="Milkomeda-Icons">
            <CustomTooltip title="Python">
              <img className="Milkomeda-Icon" src="https://img.icons8.com/color/48/000000/python.png"/>
            </CustomTooltip>
            <CustomTooltip title="VMware">
              <img className="Milkomeda-Icon" src="https://img.icons8.com/ios-filled/48/000000/vmware.png"/>
            </CustomTooltip>
            <CustomTooltip title="Remote Desktop Protocol">
              <img className="Milkomeda-Icon" src="https://img.icons8.com/color/48/000000/remote-desktop.png"/>
            </CustomTooltip>
          </span>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Milkomeda;

