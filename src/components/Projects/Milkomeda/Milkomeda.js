import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Tooltip, Link, Button, Card, CardContent, CardHeader, Typography, CardActions} from "@material-ui/core";
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
        <Link component="button"><Typography variant="subtitle1">National Cybersecurity R&D Lab</Typography></Link>
      </Typography>
      <CardContent>
        <div className="Milkomeda-Media">
          <div className="Milkomeda-Media-Overlay" />
        </div>
        <div className="Milkomeda-Text">
          <Typography variant="body1" color="textPrimary">
           Worked on developing and documenting the exploit for CVE-2019-0708 (aka <Link>BlueKeep</Link>), the remote code execution vulnerability that exists in Remote Desktop Services.
           This occurs when an unauthenticated attacker connects to the target system using RDP and sends specially crafted requests.
           An attacker who successfully exploited this vulnerability could execute arbitrary code on the target system with admin rights.
          </Typography>
        </div>
        <CardActions className="Milkomeda-ActionArea">
          <Button variant="outlined" className="Milkomeda-Button" color="secondary">Submitted Report</Button>
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

