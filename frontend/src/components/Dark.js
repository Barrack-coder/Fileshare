import React from "react";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext, themes } from "../context/ThemeContext";

const fabs = {
  float: {
    position: "fixed",
    width: "30px",
    height: "30px",
    bottom: "40px",
    // right: "10px",
    left: "10px",
    // backgroundColor: "#0C9",
    color: "#FFF",
    // borderRadius: "50px",
    textAlign: "center",
    boxShadow: "2px 2px 3px #999",
  },
};

function Dark() {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <>
      <div>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              // style={fabs.float}
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}>
              <i
                className={
                  darkMode ? (
                    <MdOutlineWbSunny style={fabs.float} />
                  ) : (
                    <MdDarkMode />
                  )
                }></i>
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    </>
  );
}

export default Dark;
