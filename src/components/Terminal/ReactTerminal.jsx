import React, { useEffect, useRef } from "react";
import { ReactTerminal } from "react-terminal";
// import styles from './Terminal.module.css';
const Terminal = () => {
  const theme = {
    themeBGColor: "#004643",
    themeToolbarColor: "#004643",
    themeColor: "var(--text-color)",
    themePromptColor: "var(--text-color)",
    errorColor: "#FF443E",
    successColor: "#5B9E47",
    linkColor: "#4495D4",
  };
  const textColor = {
    color: "var(--text-color)",
  };
  const buttonColor = {
    color: "var(--button-color)",
  };
  const welcomeMessage = (
    <span>
      Welcome to my website! Get started by typing `
      <strong style={buttonColor}>help</strong>` command below
      <br />
      <br />
    </span>
  );

  const error = {
    color: theme.errorColor,
    fontWeight: "bold",
    marginTop: "5px",
  };
  const promptStyling = {
    color: theme.themePromptColor,
  };

  const indentLevel1 = {
    marginLeft: "15px",
  };

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        reject(new Error("Geolocation is not supported."));
      }
    });
  };

  const commands = {
    help: () => {
      return (
        <div style={{ marginTop: "1px" }}>
          <p style={textColor}>Available Commands:</p>
          <p style={indentLevel1}>
            <span style={buttonColor}>whoami: </span>
            <span style={textColor}>Tells about me</span>
          </p>
          <p style={indentLevel1}>
            <span style={buttonColor}>whatiknow: </span>
            <span style={textColor}>Tells about my tech knowledge</span>
          </p>
          <p style={indentLevel1}>
            <span style={buttonColor}>getlocation: </span>
            <span style={textColor}>Tells about me</span>
          </p>
          <p style={indentLevel1}>
            <span style={buttonColor}>clear: </span>
            <span style={textColor}>clears out everything on terminal!</span>
          </p>
        </div>
      );
    },

    whoami: () => {
      return (
        <span
          style={{
            color: "var(--text-color)",
            marginLeft: "15px",
            marginTop: "5px",
          }}
        >
          I am Mihir Jain! A student at{" "}
          <a href="https://skit.ac.in" style={buttonColor}>
            SKIT
          </a>
          , Jaipur.
        </span>
      );
    },

    getlocation: async () => {
      try {
        const { latitude, longitude } = await getLocation();

        if (latitude === null || longitude === null) {
          return (
            <span style={{ color: "#ff443e", fontWeight: "bold" }}>
              Can't fetch your location!
            </span>
          );
        } else {
          return (
            <span style={{ marginTop: "5px" }}>
              <span style={buttonColor}>
                Latitude: <span style={textColor}>{latitude}</span>
              </span>
              <br />
              <span style={buttonColor}>
                Longitude: <span style={textColor}>{longitude}</span>
              </span>
            </span>
          );
        }
      } catch (err) {
        return (
          <span style={{ color: "#ff443e", fontWeight: "bold" }}>
            Can't fetch your location!
          </span>
        );
      }
    },

    whatiknow: () => {
      return (
        <span
          style={{
            marginTop: "5px",
            color: "var(--text-color)",
            marginLeft: "15px",
          }}
        >
          Experienced in web development and DevOps related technologies, with
          hands-on experience in <span style={buttonColor}>&nbsp;AWS</span>, <span style={buttonColor}>&nbsp;Docker</span>, <span style={buttonColor}>&nbsp;Terraform</span>, <span style={buttonColor}>&nbsp;React.js</span> and <span style={buttonColor}>&nbsp;Node.js</span>
        </span>
      );
    },
  };

  const terminalRef = useRef(null);

  useEffect(() => {
    const terminalDiv = terminalRef.current;

    const handleTouchStart = () => {
      terminalDiv.scrollTop = 0;
    };

    terminalDiv.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    return () => {
      terminalDiv.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <div
      id="terminal-div"
      ref={terminalRef}
      style={{
        border: "2px solid var(--text-color)",
        backgroundColor: "var(--background-color)",
        height: "100%",
      }}
    >
      <ReactTerminal
        prompt={<span style={promptStyling}>$ mihirjain &gt;&gt;</span>}
        commands={commands}
        welcomeMessage={
          <span style={{ color: "var(--text-color)  " }}>{welcomeMessage}</span>
        }
        errorMessage={<span style={error}>Command not found!</span>}
        inputColor="var(--text-color)"
        outputColor="var(--text-color)"
        backgroundColor="var(--background-color)"
        theme={theme}
      />
    </div>
  );
};

export default Terminal;
