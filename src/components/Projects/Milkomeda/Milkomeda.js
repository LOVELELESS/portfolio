import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Tooltip,
  Link,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
} from "@material-ui/core";
import pdf from "./Rayson_CVE-2019-0708-REDACTED.pdf";
import python from "../../../icons/python.png";
import vmware from "../../../icons/vmware.png";
import rdp from "../../../icons/remote-desktop.png";
import "./Milkomeda.css";

const Milkomeda = () => {
  const CustomTooltip = withStyles((theme) => ({
    tooltip: {
      fontSize: "1em",
    },
  }))(Tooltip);

  return (
    <Card>
      <CardHeader
        title="Project Milkomeda"
        titleTypographyProps={{ color: "primary", variant: "h5" }}
      />
      <Typography color="textSecondary" variant="subtitle1">
        A commercial research project commissioned by the{" "}
        <Link target="_blank" rel="noopener noreferrer" href="https://ncl.sg/">
          National Cybersecurity R&D Lab
        </Link>
      </Typography>
      <CardContent>
        <a
          href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-0708"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="Milkomeda-Media"></div>
        </a>
        <div className="Milkomeda-Text">
          <Typography variant="body1" color="textPrimary">
            Worked on developing and documenting the exploit for CVE-2019-0708
            (aka{" "}
            <Link
              href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-0708"
              target="_blank"
              rel="noopener noreferrer"
            >
              BlueKeep
            </Link>
            ), the remote code execution vulnerability that exists in Remote
            Desktop Services. This occurs when an unauthenticated attacker
            connects to the target system using RDP and sends specially crafted
            requests. An attacker who successfully exploited this vulnerability
            could execute arbitrary code on the target system with admin rights.
          </Typography>
        </div>
        <CardActions className="Milkomeda-ActionArea">
          <a
            style={{ textDecoration: "none" }}
            href={pdf}
            download="Rayson_CVE-2019-0708-REDACTED.pdf"
          >
            <Button
              variant="outlined"
              className="Milkomeda-Button"
              color="secondary"
            >
              Submitted Report
            </Button>
          </a>
          <div className="Milkomeda-Icons">
            <CustomTooltip enterTouchDelay={30} title="Python">
              <img className="Milkomeda-Icon" src={python} />
            </CustomTooltip>
            <CustomTooltip enterTouchDelay={30} title="VMware">
              <img className="Milkomeda-Icon" src={vmware} />
            </CustomTooltip>
            <CustomTooltip enterTouchDelay={30} title="Remote Desktop Protocol">
              <img className="Milkomeda-Icon" src={rdp} />
            </CustomTooltip>
          </div>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Milkomeda;
